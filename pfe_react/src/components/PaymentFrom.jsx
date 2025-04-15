import React, { useState } from 'react';

const PaymentForm = ({ amount }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simuler succès paiement
    setIsPaymentSuccess(true);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center ">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="card-title text-center mb-4">Paiement</h2>

              {isPaymentSuccess === true ? (
                <div className="alert alert-success text-center">
                  ✅ Paiement effectué avec succès !
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Numéro de carte */}
                  <div className="mb-3">
                    <label className="form-label">Numéro de carte</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="1234 5678 9012 3456"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      required
                    />
                  </div>

                  {/* Date d’expiration */}
                  <div className="mb-3">
                    <label className="form-label">Date d'expiration</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="MM/AA"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      required
                    />
                  </div>

                  {/* CVV */}
                  <div className="mb-4">
                    <label className="form-label">CVV</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="123"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      required
                    />
                  </div>

                  {/* Montant total */}
                  <p className="mb-3 text-center fw-bold">
                    Montant total : <span className="text-success">${amount}</span>
                  </p>

                  {/* Bouton payer */}
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Payer maintenant
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
