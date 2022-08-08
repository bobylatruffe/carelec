import React from 'react';
import "./GetImmat.css";

class GetImmat extends React.Component {
  state = {
    inputValue: '',
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
    return (
      <div className='GetImmatContainer'>
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
}

export default GetImmat;