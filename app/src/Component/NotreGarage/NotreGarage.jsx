import React from 'react';

import './NotreGarage.css';

import notreGarage1 from '../../img/notre-garage-1.png';
import notreGarage2 from '../../img/notre-garage-2.png';
import notreGarage3 from '../../img/notre-garage-3.png';

class NotreGarage extends React.Component {
  render() {
    return (
      <div className='notre-garage-container'>

        <div className='content-n'>
          <div className='txt-left-container'>
            <div className='txt-left'>
              <h1>Une passion, <span className="red">un métier.</span></h1>
              <p>Le garage carelec, c’est des d’années d’expérience en mécanique automobile au service de l’entretien de votre véhicule. Depuis, ce sont des centaines de véhicules entretenus par nos soins. L’ensemble de nos réparations sont réalisées sur place, dans notre atelier à Strasbourg.</p>
            </div>
          </div>
          <img src={notreGarage1} className='img-right' />
        </div>

        <div className='content-n'>
          <img src={notreGarage2} className='img-left' />
          <div className='txt-right-container'>
            <div className='txt-right'>
              <h1>L'atelier, <span className="red">où tout se passe.</span></h1>
              <p>Le garage carelec, c’est des d’années d’expérience en mécanique automobile au service de l’entretien de votre véhicule. Depuis, ce sont des centaines de véhicules entretenus par nos soins. L’ensemble de nos réparations sont réalisées sur place, dans notre atelier à Strasbourg.</p>
            </div>
          </div>
        </div>

        <div className='content-n'>
          <div className='txt-left-container'>
            <div className='txt-left'>
              <h1>L'Alsace, <span className="red">Strasbourg.</span></h1>
              <p>Afin de garantir au mieux un service de proximité, l’intégralité de l’entretien et de la maintenance est réalisé au sein notre atelier mécanique à Strasbourg. Nous disposons d’une équipe de garagistes au service de la maintenance de votre véhicule. Nous réaliserons au mieux l’entretien de vos véhicules. Mais aussi, l’ensemble des réparations : tâches d’entretien courant, vidange, freinage, pneumatique, entretien des filtres, ou encore la carrosserie et la peinture avec notre service dédié.</p>
            </div>
          </div>
          <img src={notreGarage3} className='img-right' />
        </div>

      </div>
    )
  }
}

export default NotreGarage;