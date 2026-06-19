import { Route, Routes } from "react-router-dom";
import CartSidebar from "./components/CartSidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LocationsPage from "./pages/LocationsPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-background font-body-md">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:productId" element={<ProductDetailPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <CartSidebar />
      <Footer />
    </div>
  );
}
