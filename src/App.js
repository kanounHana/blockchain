// src/App.js
import React, { useState } from 'react';
import AchatBillet from './AchatBillet';
import Paiement from './Paiement';
import SimulationRetard from './SimulationRetard';
import Historique from './Historique';
import './App.css';

function App() {
  const [vueActuelle, setVueActuelle] = useState('achat');
  const [vuePrecedente, setVuePrecedente] = useState('achat'); // Pour gérer le retour
  const [billetActif, setBilletActif] = useState(null);
  const [historique, setHistorique] = useState([]);

  const handleAchat = (detailsBillet) => {
    setBilletActif(detailsBillet);
    setVueActuelle('paiement');
  };

  const handlePaiement = () => {
    const billetPaye = { ...billetActif, statut: 'Payé' };
    setHistorique([...historique, billetPaye]);
    setBilletActif(billetPaye);
    setVueActuelle('simulation');
  };

  // NOUVELLE FONCTION : Permet de lancer la simulation depuis l'historique
  const simulerDepuisHistorique = (billet) => {
    setBilletActif(billet);
    setVuePrecedente('historique'); // On se souvient d'où on vient
    setVueActuelle('simulation');
  };

  // Le bouton "Terminer" de la simulation nous ramènera soit à l'achat, soit à l'historique
  const handleSimulationTerminee = () => {
    setBilletActif(null);
    setVueActuelle(vuePrecedente); // Retourne à la vue précédente
    setVuePrecedente('achat'); // Réinitialise pour le prochain cycle
  };

  // Gère la navigation principale
  const naviguerVers = (vue) => {
    setBilletActif(null); // On nettoie le billet actif quand on navigue manuellement
    setVueActuelle(vue);
    setVuePrecedente(vue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Assurance Retard de Vol</h1>
        <nav>
          <button className="btn" onClick={() => naviguerVers('achat')}>Acheter un Billet</button>
          <button className="btn" onClick={() => naviguerVers('historique')}>Voir l'Historique</button>
        </nav>
      </header>
      <main className="container">
        {vueActuelle === 'achat' && <AchatBillet onAchatSubmit={handleAchat} />}

        {vueActuelle === 'paiement' && (
          <Paiement
            detailsBillet={billetActif}
            onPaiementReussi={handlePaiement}
            onRetour={() => naviguerVers('achat')}
          />
        )}

        {vueActuelle === 'simulation' && (
          <SimulationRetard
            detailsBillet={billetActif}
            onTermine={handleSimulationTerminee} // Utilise la nouvelle fonction de fin
          />
        )}

        {vueActuelle === 'historique' && (
          <Historique
            billets={historique}
            onSimuler={simulerDepuisHistorique} // On passe la nouvelle fonction à l'historique
          />
        )}
      </main>
    </div>
  );
}

export default App;
