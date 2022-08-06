import Introduction from "./Component/Introduction/Introduction";
import AccrocheN from "./Component/Accoches/AccrocheN";

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
        titre="Entretenir ou faire réparer sa voiture, depuis son canapé !"
        contenu="Plus besoin de se déplacer, que vous soyez chez vous ou au bureau, on récupère votre voiture, et on vous laisse une de nos merveilleuse voiture de courtoisie..."
        bg={accrocheCanapeBg}
        arrow={arrowRight}
      />
      <AccrocheN
        class="accrocheN-left"
        img={accrocheSuivi}
        titre="Plus aucune surprise, suivez en directe  ce qu’il se passe !"
        contenu="Suivez à tout moment l’avancement de ce qu’il se passe sur votre véhicule, en jettant un coup d’oeil sur ce que le mécanicien est entrain de réaliser sur votre voiture depuis sa caméra... un peu comme si vous etiez avec lui."
        bg={accrocheSuiviBg}
        arrow={arrowLeft}
      />
      <AccrocheN
        class="accrocheN-right"
        img={accrocheDevis}
        titre="Plus aucune surprise, suivez en directe  ce qu’il se passe !"
        contenu="Suivez à tout moment l’avancement de ce qu’il se passe sur votre véhicule, en jettant un coup d’oeil sur ce que le mécanicien est entrain de réaliser sur votre voiture depuis sa caméra... un peu comme si vous etiez avec lui."
        bg={null}
      />
    </div>
  );
}

export default App;
