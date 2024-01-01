import { useEffect, useState } from "react";
import { useURLId } from "../hooks/use-url-id";
import { useNavigate } from "react-router-dom";
import { Product } from "./Homepage";

const ProductItem = () => {
  const [singleProduct, setSingleProduct] = useState<Product | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(false);
  const { id } = useURLId();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:9000/products/${id}`);
        const data: Product = await response.json();
        setSingleProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  if (singleProduct)
    return (
      <>
        <div className="single__product">
          <h1>
            <span onClick={() => navigate("/")}>🔙</span>
            <span>
              {singleProduct.itemName} Page ID: {id}
            </span>
          </h1>
          <section>
            <figure className="product__img-container">
              <img
                className="product__img"
                src={singleProduct.imageUrl}
                alt="image"
              />
            </figure>
            <aside>
              <h2>{singleProduct.itemName}</h2>
              <h3>{singleProduct.notes}</h3>
              <h4>
                Category: <span>{singleProduct.type}</span>
              </h4>
              <p>
                Width: <strong>{singleProduct.size.width}</strong>
              </p>
              <p>
                Length: <strong>{singleProduct.size.length}</strong>
              </p>
            </aside>
          </section>
        </div>
      </>
    );
};

export default ProductItem;
