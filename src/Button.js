import React from 'react';

//////////////////////////

const Button = (props) => {
  console.log("Answer", props.answerCorrect)
  let button;

  switch(props.answerCorrect) {
    case true:
      button = 
        <button className="btn btn-success"
                onClick={props.onClickButtonSuccess}>
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

  const addRefreshClass = () => {
    if(props.refreshCount === 0) {
      let refreshClass = 'btn btn-danger'
      return refreshClass
    } else {
      return 'btn btn-warning'
    }
  }

  return (
    <div className="col-sm-2">
      <div>
        {button}
      </div>
      <div>
        <button className={addRefreshClass()}
                onClick={props.onClickRefresh}><i className="fa fa-refresh"></i> {props.refreshCount}</button>
      </div>
    </div>
  );
}

export default Button;