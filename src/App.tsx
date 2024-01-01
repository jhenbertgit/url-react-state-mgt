import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import ProductItem from "./components/ProductItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<ProductItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
