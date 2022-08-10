import React from 'react';

import './Img.css'

class Img extends React.Component {
  render() {
    return (
      <div className={
        "ImgDefault " +
        (this.props.classPerso ? this.props.classPerso : "")
      }>
        <img src={this.props.img} alt={this.props.alt}/>
      </div>
    )
  }
}

export default Img;