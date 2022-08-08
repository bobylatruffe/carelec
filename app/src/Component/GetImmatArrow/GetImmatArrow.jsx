import React, { Fragment } from 'react';

import GetImmat from '../GetImmat/GetImmat';

import accueilArrow from '../../img/accueil-arrow.png'

class GetImmatArrow extends React.Component {
  render() {
    return (
      <Fragment>
        <div id='arrowTextContainer'>
          <p id='handwrite'>
            Avant de prendre rdv, utilisez notre outils<br />
            pour estimer le coût de votre<br />
            entretien ou réparation
          </p>
          <img id="accueilArrow" src={accueilArrow}></img>
        </div>
        <GetImmat class="GetImmatContainer" />
      </Fragment>
    )
  }
}

export default GetImmatArrow;
