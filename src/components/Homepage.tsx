import { json, useLoaderData } from "react-router-dom";
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
  const products = useLoaderData() as Product[];

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

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const response = await fetch("http://localhost:9000/products");

  if (!response.ok) {
    return json({ message: "Could not fetch from database" }, { status: 500 });
  } else {
    return response;
  }
};
