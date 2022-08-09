import React from "react";

import "./Ccm.css"

class Ccm extends React.Component {
  render() {
    return (
      <div id="ccm-contents">

        <div className="ccm-content-n">
          <h1><span className="red">Comment</span> ça marche ?</h1>
          <p>Vous trouverez ci-dessous la description des différentes étapes afin de mieux comprendre comment nous travaillons, mais surtout comment notre service fonctionne.</p>
        </div>

        <div className="ccm-content-n ccm-left">
          <h3><span className="red">Estimer</span> le coût d'entretien de votre véhicule.</h3>
          <p>Saisissez simplement votre plaque d'immatriculation et nous identifierons le modèle exact de votre véhicule. Ainsi nous vous proposerons des équipements adaptés au coût le plus juste.</p>
        </div>

        <div className="ccm-content-n ccm-right">
          <h3><span class="red">Prise en charge</span> de votre véhicule.<br />Choisissez la date et l'heure parmis nos créneaux disponibles et nous venons chercher votre véhicule au lieu souhaité.</h3>
          <p>Après avoir pris connaissance du coût de votre entretien, choisissez le moment et l'endroit où notre mécanicien viendra récupérer votre véhicule afin de réaliser la prestation. Dans un soucis de transparence, il réalisera à la prise en main un état des lieux de votre véhicule avec photos.</p>
        </div>

        <div className="ccm-content-n ccm-left">
          <h3><span class="red">Suivez en direct</span> tout ce qu'il se passe avec votre véhicule.</h3>
          <p>Dès la prise en main de votre véhicule par notre équipe, vous pouvez depuis votre espace personnel sur notre site suivre l'avancement des différentes étapes réalisées sur votre véhicule (sa localisation, les pièces changées, les opérations en cours, etc.).</p>
        </div>

        <div className="ccm-content-n ccm-right">
          <h3><span class="red">Restitution</span> de votre véhicule et paiement.</h3>
          <p>Une fois l'entretien de votre véhicule terminé, notre mécanicien vous rapporte votre véhicule au lieu convenu. Un nouvel état des lieux est effectué et comparé avec le premier. Le paiement de la prestation se fait directement sur place auprès de notre mécanicien. Vous pouvez alors prendre la route en toute sécurité.</p>
        </div>

        <div id="line-vertical"></div>
        <div id="car"></div>
        <div className="lines-left line-1"></div>
        <div className="lines-right line-2"></div>
        <div className="lines-left line-3"></div>
        <div className="lines-right line-4"></div>
      </div>
    )
  }
}

export default Ccm;
