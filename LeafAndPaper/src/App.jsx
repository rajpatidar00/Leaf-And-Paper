import { Routes, Route } from "react-router-dom";
import Cards from "./Components/Cards";
import Categories from "./Components/categories";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Hero from "./Pages/Hero";
import ProductDetailPage from "./Pages/ProductDetailPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Cards />
              <Categories />
              <ProductList />
            </>
          }
        />

        {/* Product Detail Page */}
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
