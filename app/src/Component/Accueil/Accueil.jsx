import React, { Fragment } from 'react';

import Introduction from "../../Component/Introduction/Introduction";
import AccrocheN from "../../Component/Accoches/AccrocheN";
import Confiance from "../../Component/Confiance/Confiance";
import GetImmat from "../../Component/GetImmat/GetImmat";

import accrocheCanape from "../../img/accroche-canape.png";
import accrocheCanapeBg from "../../img/bg-accroche-canape.png";
import accrocheSuivi from "../../img/accroche-suvi.png";
import accrocheSuiviBg from "../../img/bg-accroche-suivi.png";
import accrocheDevis from "../../img/accroche-devis.png";
import arrowRight from "../../img/arrow-right.png";
import arrowLeft from "../../img/arrow-left.png";

class Accueil extends React.Component {
  render() {
    return (
      <Fragment>
        <Introduction />
        <AccrocheN
          class="accrocheN-right"
          img={accrocheCanape}
          titre={[<span className="red">Car</span>, "Elec, ou comment faire entretenir et réparer votre voiture... ", <span className="red"><br />depuis votre canapé !</span>]}
          contenu="Plus besoin de vous déplacer. Vous êtes chez vous ou au bureau ? Nous prenons en charge votre voiture à partir d'un point de RDV de votre choix et nous vous laissons une de nos merveilleuses voitures de courtoisie."
          bg={accrocheCanapeBg}
          arrow={arrowRight}
        />
        <AccrocheN
          class="accrocheN-left"
          img={accrocheSuivi}
          titre={["Plus de surprise, ", <span className="red"><br />suivez en direct ce qu’il se passe !</span>]}
          contenu="Suivez à tout moment l’avancement des travaux sur votre véhicule. En effet, vous avez la possibilité de voir ce que notre mécanicien fait sur votre voiture depuis sa caméra... un peu comme si vous étiez avec lui."
          bg={accrocheSuiviBg}
          arrow={arrowLeft}
        />
        <AccrocheN
          class="accrocheN-right"
          img={accrocheDevis}
          titre={["Etablissement systématique d'un devis ", <span className="red">clair et transparent.</span>]}
          contenu="Avant tout engagement, vous pouvez éditer gratuitement un devis afin de choisir les travaux que vous souhaitez effectuer et ainsi maîtriser vos dépenses... sans mauvaise surprise."
          bg={null}
        />

        <Confiance />
      </Fragment >
    )
  }
}

export default Accueil;
