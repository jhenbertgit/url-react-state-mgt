import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Size {
  length: number;
  width: number;
}

export type Product = {
  id: number;
  imageUrl: string;
  itemName: string;
  notes: string;
  size: Size;
  type: string;
};

const Homepage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9000/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <main className="homepage">
      <h1>My Store</h1>
      <div className="products__list">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`product?id=${product.id}`}
            className="product__item"
          >
            <img loading="lazy" src={product.imageUrl} alt="image" />
            <h2>{product.itemName}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Homepage;
