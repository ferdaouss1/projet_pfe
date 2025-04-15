import React from 'react';

const Checkout = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="card-title mb-4 text-center">Paiement</h2>
              <form>
                {/* Adresse */}
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Adresse</label>
                  <input type="text" className="form-control" id="address" name="address" placeholder="123 rue exemple, Ville" />
                </div>

                {/* Paiement */}
                <div className="mb-3">
                  <label htmlFor="payment" className="form-label">Informations de paiement</label>
                  <input type="text" className="form-control" id="payment" name="payment" placeholder="Carte Visa **** **** **** 1234" />
                </div>

                {/* Bouton */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-success">
                    Confirmer le paiement
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
