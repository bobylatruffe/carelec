import React from 'react';

import './HandwriteIndication.css'

class HandwriteIndication extends React.Component {
  render() {
    return (
      <div className={
        "HandwriteIndicationDefault " +
        (this.props.classPerso ? this.props.classPerso : "")
      }>
        <img alt={this.props.alt} src={this.props.img} />
        <p>{this.props.content}</p>
      </div>
    )
  }
}

export default HandwriteIndication;