// src/SimulationRetard.js
import React, { useState } from 'react';

function SimulationRetard({ detailsBillet, onTermine }) {
  const [retard, setRetard] = useState('');
  const [messageRemboursement, setMessageRemboursement] = useState('');

  // ... (la fonction handleSimulation reste la même)
  const handleSimulation = () => {
    const retardEnHeures = parseInt(retard, 10);
    if (isNaN(retardEnHeures) || retardEnHeures < 0) {
      setMessageRemboursement('Veuillez entrer une valeur de retard valide.');
      return;
    }
    if (retardEnHeures > detailsBillet.duree) {
      const remboursement = detailsBillet.prix * 0.5;
      setMessageRemboursement(`Félicitations ! Le retard (${retardEnHeures}h) est supérieur à la durée du vol (${detailsBillet.duree}h). Vous êtes remboursé de 50%, soit ${remboursement} €.`);
    } else {
      setMessageRemboursement(`Désolé, le retard (${retardEnHeures}h) n'est pas supérieur à la durée du vol (${detailsBillet.duree}h). Vous n'êtes pas éligible au remboursement.`);
    }
  };

  return (
    <div className="card">
      <h2>Étape 3 : Assurance Activée pour le billet {detailsBillet.id}</h2>
      <p>Votre billet de {detailsBillet.prix} € est maintenant assuré.</p>
      <div className="form-group">
        <label>Simuler un retard à l'arrivée (en heures) :</label>
        <input
          type="number"
          value={retard}
          onChange={(e) => setRetard(e.target.value)}
          placeholder="Ex: 5"
        />
      </div>
      <button onClick={handleSimulation} className="btn-primary">
        Vérifier mon éligibilité
      </button>

      {messageRemboursement && (
        <div className="result-message">{messageRemboursement}</div>
      )}
      
      {/* Ce bouton appelle maintenant une fonction qui sait où retourner */}
      <button onClick={onTermine} className="btn-secondary" style={{marginTop: '20px'}}>
        Terminer
      </button>
    </div>
  );
}

export default SimulationRetard;
