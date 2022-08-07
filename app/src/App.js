import Introduction from "./Component/Introduction/Introduction";
import AccrocheN from "./Component/Accoches/AccrocheN";
import Confiance from "./Component/Confiance/Confiance";

import accrocheCanape from "./img/accroche-canape.png";
import accrocheCanapeBg from "./img/bg-accroche-canape.png";
import accrocheSuivi from "./img/accroche-suvi.png";
import accrocheSuiviBg from "./img/bg-accroche-suivi.png";
import accrocheDevis from "./img/accroche-devis.png";
import arrowRight from "./img/arrow-right.png";
import arrowLeft from "./img/arrow-left.png";

function App() {
  return (
    <div>
      <Introduction />
      <AccrocheN
        class="accrocheN-right"
        img={accrocheCanape}
        titre={["Entretenir ou faire réparer sa voiture, ", <span className="red">depuis son canapé !</span>]}
        contenu="Plus besoin de se déplacer, que vous soyez chez vous ou au bureau, on récupère votre voiture, et on vous laisse une de nos merveilleuse voiture de courtoisie..."
        bg={accrocheCanapeBg}
        arrow={arrowRight}
      />
      <AccrocheN
        class="accrocheN-left"
        img={accrocheSuivi}
        titre={["Plus aucune surprise", <span className="red"><br />suivez en directe  ce qu’il se passe !</span>]}
        contenu="Suivez à tout moment l’avancement de ce qu’il se passe sur votre véhicule, en jettant un coup d’oeil sur ce que le mécanicien est entrain de réaliser sur votre voiture depuis sa caméra... un peu comme si vous etiez avec lui."
        bg={accrocheSuiviBg}
        arrow={arrowLeft}
      />
      <AccrocheN
        class="accrocheN-right"
        img={accrocheDevis}
        titre={["Voyez par vous-même qu’un devis, ", <span className="red">peut-être tellement clair ...</span>]}
        contenu="Avant tout engagement, vous pourrez éditer un devis afin de contrôler que nous allons effectivement réaliser ce que vous souhaitez ... et pas une chose en plus !"
        bg={null}
      />

      <Confiance />
    </div>
  );
}

export default App;
