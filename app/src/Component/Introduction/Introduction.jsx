import React from 'react';

import GetImmatArrow from '../GetImmatArrow/GetImmatArrow';

import './Introduction.css'

import accueilLeft from '../../img/accueil-left.png';
import accueilRight from '../../img/accueil-right.png';


class Introduction extends React.Component {
  render() {
    return (
      <div className="Introduction">
        <img id="accueilLeft" src={accueilLeft}></img>
        <GetImmatArrow />
        <img id="accueilRight" src={accueilRight}></img>
      </div>
    )
  }
}

export default Introduction