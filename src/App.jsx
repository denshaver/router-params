import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { getProducts } from "./api/getProducts";
import ProductPage from "./pages/ProductPage";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const handleGetProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };

    handleGetProducts();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<HomePage products={products} />} />
          <Route
            path="/products/:productID"
            element={<ProductPage products={products} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
