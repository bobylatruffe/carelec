import React from "react";

import './AccrocheN.css';

class AccrocheN extends React.Component {
  render() {
    return (
      <div className={this.props.class}>
        <img className="illustration-accroche" src={this.props.img}></img>
        <h1>{this.props.titre}</h1>
        <p>{this.props.contenu}</p>
        <img className="bg-accroche" src={this.props.bg}></img>
        <img className="arrow" src={this.props.arrow}></img>
      </div>
    )
  }
}

export default AccrocheN;