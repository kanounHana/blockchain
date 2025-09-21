// src/Historique.js
import React from 'react';

// On récupère la nouvelle prop "onSimuler"
function Historique({ billets, onSimuler }) {
  return (
    <div className="card">
      <h2>Historique des Billets Assurés</h2>
      {billets.length === 0 ? (
        <p>Vous n'avez encore acheté aucun billet.</p>
      ) : (
        <ul className="historique-list">
          {billets.map((billet) => (
            <li key={billet.id}>
              <div className="billet-info">
                <strong>ID:</strong> {billet.id}   

                <strong> | Prix:</strong> {billet.prix} € | <strong>Durée du vol:</strong> {billet.duree}h   

                <strong> | Statut:</strong> {billet.statut}
              </div>
              {/* Le nouveau bouton qui appelle la fonction passée en prop */}
              <button
                onClick={() => onSimuler(billet)}
                className="btn-secondary"
              >
                Simuler le retard
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Historique;
