/* eslint-disable import/no-cycle */
import React from 'react';
// eslint-disable-next-line quotes
import DigitButton from './DigitButton';
import './App.css';

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  switch(type) {
    case ACTIONS.ADD_DIGIT: 
    return {
      ...state,
      currentOperand: `${currentOperand || ''}${payload.digit}`
    }
  }
}

function App() {

  const [{ currentOperand, previousOperand, operation }, dispatch] = React.useReducer(reducer,{})

  dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit: 1}})
    return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {formatOperand(previousOperand)} {operation}
          </div>
        <div className="current-operand">{formatOperand(currentOperand)}</div>
      </div> 
     <button className="span-two">AC</button>
        <button>DEL</button>
        <button>%</button>
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <button>*</button>
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <button>+</button>
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <button>-</button> 
        <DigitButton digit="." dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
        <button className="span-two">=</button>
      </div>
    )
}

export default App;
