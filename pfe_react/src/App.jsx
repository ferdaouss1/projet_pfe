import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';  // استيراد السياق

// استيراد الصفحات
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import TripPage from './pages/TripPage';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <main style={{ minHeight: '80vh', padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trip" element={<TripPage />} />
            <Route path="/produits" element={<ProductPage />} />
            <Route path="/panier" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
