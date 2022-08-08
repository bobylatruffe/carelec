import React from 'react';

import "./Estimer.css";

import GetImmatArrow from '../GetImmatArrow/GetImmatArrow';

class Estimer extends React.Component {
  render() {
    return (
      <div id="estimer">
        <GetImmatArrow />
        <div id="description">
          <h1><span class="red">Estimer</span> le cout de votre entretien</h1>
          <p>Nous avons beosin de votre plaque d'immatriculation afin d'identifier le modèle de votre véhicule.</p>
        </div>
      </div>
    )
  }
}

export default Estimer