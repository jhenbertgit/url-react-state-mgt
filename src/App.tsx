import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import ProductItem from "./components/ProductItem";
import RootLayout from "./layouts/Root";
import { loader as productLoader } from "./components/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
        loader: productLoader,
      },
      {
        path: "product",
        element: <ProductItem />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
