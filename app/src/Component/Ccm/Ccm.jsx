import React from "react";

import "./Ccm.css"

class Ccm extends React.Component {
  render() {
    return (
      <div id="ccm-contents">

        <div className="ccm-content-n">
          <h1><span className="red">Comment</span> ça marche ?</h1>
          <p>Vous trouverez la description des différentes étapes afin de mieux comprendre comment nous travaillons, mais surtout comment notre service fonctionne.</p>
        </div>

        <div className="ccm-content-n ccm-left">
          <h3>Commencer par <span className="red">estimer</span> <br />le coût de l'entretien de votre véhicule.</h3>
          <p>Saisissez simplement votre plaque d'immatriculation, et nous identifierons le modèle exact de votre véhicule, afin de vous fournir un coût le plus juste.</p>
        </div>

        <div className="ccm-content-n ccm-right">
          <h3>Choisissez la date et un créneau pour <br />qu'on puisse venir <span class="red">récupérer</span> votre véhicule.</h3>
          <p>Après avoir pris connaissance du coût de votre entretien, choisissez une date et un créneau horaire afin qu'un de nos mécaniciens vienne récupérer votre véhicule pour réaliser son entretien. Il réalisera également un état des lieux sur votre véhicule.</p>
        </div>

        <div className="ccm-content-n ccm-left">
          <h3><span class="red">Suivez en direct</span><br /> tout ce qu'il se passe avec votre véhicule.</h3>
          <p>A partir du moment ou vous avez pris un rendez-vous, depuis votre espace personnel vous pouvez suivre l'avancement des différentes étapes (recherche de votre véhicule, pièces changées, opération en cours ...) qui sont réalisées.</p>
        </div>

        <div className="ccm-content-n ccm-right">
          <h3><span class="red">Restitution</span> de votre véhicule et paiement.</h3>
          <p>Une fois que l'entretien de votre véhicule est terminé, notre mécanicien vous rapporte votre véhicule, un état des lieux est effectué et comparé avec la 1er. Si tout vous semble correct, alors vous pourrez réaliser le paiement de la prestation directement à notre mécanicien.</p>
        </div>

      </div>
    )
  }
}

export default Ccm;