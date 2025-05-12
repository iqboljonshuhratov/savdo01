import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import CategoryDetail from "./pages/category-detail";
import { MainLayout } from "./layout/main-layout";
import { ProductDetail } from "./pages/product-detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="category-detail/:catalog" element={<CategoryDetail />} />
          <Route path="product-detail/:slug/:id " element={<ProductDetail />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
