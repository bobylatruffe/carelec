import React from 'react';
import MyButton from '../Button/MyButton';
import HandwriteIndication from '../HandwriteIndication/HandwriteIndication';
import InputField from '../InputField/InputField';

import './GetImmat.css'

import arrowDown from '../../img/arrow-down.png'

class GetImmat extends React.Component {
  state = {
    inputValue: '',
  }

  handlerChange = (e) => {
    this.setState({ inputValue: e.target.value.toLowerCase() })
  }

  handlerClick = () => {
    console.log(this.state.inputValue)
  }

  render() {
    return (
      <div className={
        "GetImmatDefault " +
        (this.props.classPerso ? this.props.classPerso : "")
      }>
        <HandwriteIndication img={arrowDown} content="Avant de prendre rdv, utilisez notre outils pour estimer le coût de votre entretien ..." />
        <h1>Estimez le coût de votre entretien</h1>
        <div className='InputField-MyButton-Container'>
          <InputField placeHolder="CL-655-ZS" change={this.handlerChange} />
          <MyButton content="OK" click={this.handlerClick} />
        </div>
      </div>
    )
  }
}

export default GetImmat;