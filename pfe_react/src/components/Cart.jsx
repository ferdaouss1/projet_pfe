import { useState } from 'react';

const Cart = ({ panier }) => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold text-dark">Votre Panier</h2>

      {/* عرض محتويات السلة */}
      <ul className="list-group">
        {panier.map((produit, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between">
            {produit.nom} - {produit.prix} DH
          </li>
        ))}
      </ul>

      {/* إذا كانت السلة فارغة */}
      {panier.length === 0 && <p className="text-center mt-4">Votre panier est vide</p>}
    </div>
  );
};

export default Cart;
