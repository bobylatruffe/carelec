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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      
      "Très bon service, j'en suis très satisfait",

      "Face à cette plainte pour le moins étonnante, Activision n'a pas tardé à signaler que plusieurs des affirmations concernant la ressemblance des personnages étaient fausses.",

      "Merci !",

      "Une action en justice concernant Call of Duty Infinite Warfare a récemment été rejetée par un juge après qu'il a été établi qu'un avocat chargé de l'affaire n'avait pas réellement joué au jeu."
    ]
  }

  previousConfiance = () => {
    let max = this.state.max;
    let current = this.state.current;

    if(current == 0) {
      this.setState({current: max-1});
    } else {
      this.setState({current: --current});
    }
  }

  nextConfiance = () => {
    let max = this.state.max;
    let current = this.state.current;

    if(current == max-1) {
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