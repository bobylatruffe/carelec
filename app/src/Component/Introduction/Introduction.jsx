import React from 'react';
import GetImmat from '../GetImmat/GetImmat';

import './Introduction.css'

import accueilLeft from '../../img/accueil-left.png';
import accueilRight from '../../img/accueil-right.png';
import accueilArrow from '../../img/accueil-arrow.png'

class Introduction extends React.Component {
  render() {
    return (
      <div className="Introduction">
        <img id="accueilLeft" src={accueilLeft}></img>
        <div id='arrowTextContainer'>
          <p id='handwrite'>
            Avant de prendre rdv, saisissez votre immatriculation<br/>
            afin d'estimer les coûts pour l'entretien<br/>
            ou la réparation de votre véhicule
          </p>
          <img id="accueilArrow" src={accueilArrow}></img>
        </div>
        <GetImmat />
        <img id="accueilRight" src={accueilRight}></img>
      </div>
    )
  }
}

export default Introduction
