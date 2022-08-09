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
              <p>Le garage <span className="red">Car</span>Elec s'est construit au fil des années une longue expérience dans le domaine de la mécanique automobile au service de l’entretien de votre véhicule. Depuis, ce sont des centaines de véhicules qui sont entretenus par nos soins.</p>
            </div>
          </div>
          <img src={notreGarage1} className='img-right' />
        </div>

        <div className='content-n'>
          <img src={notreGarage2} className='img-left' />
          <div className='txt-right-container'>
            <div className='txt-right'>
              <h1>L'atelier <span className="red">où tout se passe.</span></h1>
              <p>L’ensemble de nos réparations sont réalisées sur place, dans notre atelier à Strasbourg. C'est ici que nous prolongeons la vie de votre véhicule et vous garantissons de reprendre la route en toute sécurité grâce à nos mécaniciens expérimentés.</p>
            </div>
          </div>
        </div>

        <div className='content-n'>
          <div className='txt-left-container'>
            <div className='txt-left'>
              <h1>L'Alsace, <span className="red">Strasbourg.</span></h1>
              <p>Afin de garantir au mieux un service de qualité et de proximité, aucune sous traitance n'est réalisée. L’intégralité des travaux effectués sur votre véhicule est réalisée au sein notre atelier mécanique à Strasbourg. Notre équipe est à votre service et à votre écoute pour tout conseil ou demande de renseignement. La qualité est notre priorité dans les nombreux services que nous proposons : tâches d’entretien courant, vidange, freinage, pneumatique, entretien des filtres, ou encore carrosserie et peinture.</p>
            </div>
          </div>
          <img src={notreGarage3} className='img-right' />
        </div>

      </div>
    )
  }
}

export default NotreGarage;
