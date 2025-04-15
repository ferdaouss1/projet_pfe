import { createContext, useState, useContext } from 'react';

// إنشاء السياق
const CartContext = createContext();

// مكون Provider
export const CartProvider = ({ children }) => {
  const [panier, setPanier] = useState([]);  // حالة السلة

  const addToCart = (produit) => {
    setPanier(prevPanier => [...prevPanier, produit]);  // إضافة منتج إلى السلة
  };

  return (
    <CartContext.Provider value={{ panier, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// استخدام السياق في مكونات أخرى
export const useCart = () => useContext(CartContext);
