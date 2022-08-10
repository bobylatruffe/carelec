import React from 'react';

import './MyButton.css'

class MyButton extends React.Component {
  render() {
    return (
      <button
        type="button"
        className={
          "MyButtonDefault " +
          (this.props.classPerso ? this.props.classPerso : "")
        }
        onClick={this.props.click}
      >
        {this.props.content}</button>
    )
  }
}

export default MyButton;