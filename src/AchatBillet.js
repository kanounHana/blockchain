// src/AchatBillet.js
import React, { useState } from 'react';

function AchatBillet({ onAchatSubmit }) {
  const [duree, setDuree] = useState('');
  const [prix, setPrix] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (duree > 0 && prix > 0) {
      onAchatSubmit({
        id: `Billet-${Date.now()}`, // Ajout d'un ID unique basé sur le timestamp
        duree: parseInt(duree, 10),
        prix: parseFloat(prix),
      });
    } else {
      alert('Veuillez entrer une durée et un prix valides.');
    }
  };

  return (
    <div className="card">
      <h2>Étape 1 : Acheter votre billet</h2>
      <p>
        Souscrivez à l'assurance : si le retard de votre vol dépasse sa durée
        initiale, vous êtes remboursé à 50%.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Durée du vol (en heures) :</label>
          <input
            type="number"
            value={duree}
            onChange={(e) => setDuree(e.target.value)}
            placeholder="Ex: 3"
            required
          />
        </div>
        <div className="form-group">
          <label>Prix du billet (en €) :</label>
          <input
            type="number"
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
            placeholder="Ex: 450"
            required
          />
        </div>
        <button type="submit" className="btn-primary">
          Souscrire et Payer
        </button>
      </form>
    </div>
  );
}

export default AchatBillet;
