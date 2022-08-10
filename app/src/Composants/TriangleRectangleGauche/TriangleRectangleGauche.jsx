import React from 'react';

import './TriangleRectangleGauche.css'

class TriangleRectangleGauche extends React.Component {
  render() {
    return (
      <div className={
        "triangleRectangleGaucheDefault " +
        (this.props.classPerso ? this.props.classPerso : "")
      }>
        <img src={this.props.img} alt={this.props.alt}/>
      </div>
    )
  }
}

export default TriangleRectangleGauche;