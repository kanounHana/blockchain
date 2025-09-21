// src/Paiement.js
import React from 'react';



function Paiement({ detailsBillet, onPaiementReussi, onRetour }) {
  const adresseVendeur = '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B';
  const prixEnEth = (detailsBillet.prix / 2000).toFixed(4);

  return (
    <div className="card">
      <h2>Étape 2 : Confirmer le Paiement</h2>
      <p><strong>ID du Billet :</strong> {detailsBillet.id}</p>
      <p><strong>Durée du vol :</strong> {detailsBillet.duree} heures</p>
      <p><strong>Prix du billet :</strong> {detailsBillet.prix} €</p>
      <hr />
      <p>Veuillez transférer <strong>{prixEnEth} ETH</strong> à l'adresse :</p>
      <p className="eth-address">{adresseVendeur}</p>
      <div className="button-group">
        <button onClick={onRetour} className="btn-secondary">
          Retour
        </button>
        <button onClick={onPaiementReussi} className="btn-primary">
          Simuler le paiement et Activer
        </button>
      </div>
    </div>
  );
}



export default Paiement;
