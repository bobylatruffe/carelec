import React from 'react';
import "./GetImmat.css";

class GetImmat extends React.Component {
  state = {
    inputValue: '',
    infosVehicule: {
      identifier: false,
      infos: {

      }
    }
  }

  inputChange = (e) => {
    this.setState({
      inputValue: e.target.value.toLowerCase(),
    })
  }



  submitGetImmat = () => {
    // rediriger vers la page pour checker plaque d'immat
    // avant d'envoyer il faut analyser la donnée pour reformater :
    // si XX-XXX-XX => XXXXXX
    // si n => entier , l => [a-z] vérifier : llnnnll
    // https://fr.wikipedia.org/wiki/Plaque_d%27immatriculation_fran%C3%A7aise
  }

  render() {
    // si aucun véhicule n'a été identifer avec sa plaque, ou la 1er fois qu'on affiche ce composant 
    if (!this.state.infosVehicule.identifier) {
      return (
        <div className={this.props.class}>
          <input
            className="GetImmat"
            type="text"
            placeholder="CL-644-CZ"
            onChange={this.inputChange}>
          </input>
          <button className='GetImmatButton' onClick={this.submitGetImmat}>OK</button>
        </div>
      )
    }
    // sinon on affiche les informations du véhicule  
    else {
      return (
        <h1></h1>
      )
    }
  }
}

export default GetImmat;