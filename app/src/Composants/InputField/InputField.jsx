import React from 'react';

import './InputField.css'

class InputField extends React.Component {
  render() {
    return (
      <input
        className={
          "InputFieldDefault " +
          (this.props.classPerso ? this.props.classPerso : "")
        }
        type='text'
        placeholder={this.props.placeHolder ? this.props.placeHolder : ""}
        onChange={this.props.change}
      />
    )
  }
}

export default InputField;