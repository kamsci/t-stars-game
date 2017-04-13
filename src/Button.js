import React from 'react';

//////////////////////////

const Button = (props) => {
  console.log("Answer", props.answerCorrect)
  let button;

  switch(props.answerCorrect) {
    case true:
      button = 
        <button className="btn btn-success">
          <i className="fa fa-check"></i>
        </button>
      break;
    case false:
      button = 
        <button className="btn btn-danger">
          <i className="fa fa-times"></i>
        </button>
      break;
    default:
      button =
      <button className="btn btn-primary" disabled={props.selectedNumbers.length === 0}
              onClick={props.onClickButton}>=</button>
      break;
  }

  return (
    <div className="col-sm-2">
      {button}
    </div>
  );
}

export default Button;