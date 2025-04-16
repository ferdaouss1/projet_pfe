import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [panier, setPanier] = useState([]);

  const addToCart = (produit) => {
    setPanier((prevPanier) => {
      const existingProduct = prevPanier.find(item => item.id === produit.id);
      if (existingProduct) {
        return prevPanier.map(item =>
          item.id === produit.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevPanier, { ...produit, quantity: 1 }];
      }
    });
  };

  const decreaseQuantity = (id) => {
    setPanier((prevPanier) =>
      prevPanier
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setPanier((prevPanier) => prevPanier.filter(item => item.id !== id));
  };

  const getTotal = () => {
    return panier
      .reduce((acc, produit) => acc + produit.quantity * parseFloat(produit.prix), 0)
      .toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{ panier, addToCart, removeFromCart, getTotal, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
