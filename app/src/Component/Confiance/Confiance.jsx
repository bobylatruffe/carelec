import React from "react"

import "./Confiance.css"

import confianceBg from "../../img/bg-confiance.png"
import confianceArrowLeft from "../../img/confiance-arrow-left.png"
import confianceArrowRight from "../../img/confiance-arrow-right.png"
import confianceQuoteLeft from "../../img/confiance-quote-left.png"
import confianceQuoteRight from "../../img/confiance-quote-right.png"

class Confiance extends React.Component {
  // va contenir les différentes temoignages, 
  // devra être remplit à travers notre api : get-temoignage
  state = {
    current: 0, // celui qui est actuellement affiché
    max: 5, // le nb max de temoignage -> temoignages.length
    temoignages: [
      "Super garage avec mécanicien expérimenté qui donne de bons conseils. J'y vais depuis quelques années pour les réparations de mes voitures. La qualité du service est top avec des prix corrects. L'accueil est agréable et les personnes serviables. Je recommande+++",
      
      "Super travail sur ma carrosserie. Reprise de toute la portière, retroviseur et bas de caisse. Elle était bien amochée et là elle est comme neuve, pour un prix tout à fait correct (bien moins cher qu'ailleurs) et très rapide. Merci!",

      "Très accueillant et très professionnelle, bonne explication sur les travaux effectués ainsi que la preuve des pièces changées. Je recommande fortement.",

      "Prise en charge au top. Personnel aimable et professionnel. Agréablement surprise avec ma voiture rendue toute propre. Je recommande vivement !",

      "Très contente de l'accueil et des réparations faites ici. J'avais fait ma visite annuelle ailleurs, chez mon garagiste habituel qui n'avait pas vu que mes freins étaient usés alors que je commençais a siffler. Résultat je roule encore 5 mois et viens ici les montrer. Changement des disques et plaquettes pour un montant tout a fait raisonnable :-)"
    ]
  }

  previousConfiance = () => {
    let max = this.state.max;
    let current = this.state.current;

    if(current === 0) {
      this.setState({current: max-1});
    } else {
      this.setState({current: --current});
    }
  }

  nextConfiance = () => {
    let max = this.state.max;
    let current = this.state.current;

    if(current === max-1) {
      this.setState({current: 0});
    } else {
      this.setState({current: ++current});
    }
  }

  render() {
    return (
      <div className="confiance">
        <img className="bg-confiance" src={confianceBg}></img>
        <img className="confiance-arrow-left" src={confianceArrowLeft} onClick={this.previousConfiance}></img>
        <h1>Ils nous ont fait confiance</h1>
        <img className="confiance-quote-left" src={confianceQuoteLeft}></img>
        <p>{this.state.temoignages[this.state.current]}</p>
        <img className="confiance-quote-right" src={confianceQuoteRight}></img>
        <img className="confiance-arrow-right" src={confianceArrowRight} onClick={this.nextConfiance}></img>
      </div>
    )
  }
}

export default Confiance;
