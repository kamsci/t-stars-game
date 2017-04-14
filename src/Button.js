import React from 'react';

//////////////////////////

const Button = (props) => {
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
    let refreshClass;

    if(props.refreshCount === 0) {
      refreshClass = 'btn btn-danger'
    } else {
      refreshClass = 'btn btn-warning'
    }
    return refreshClass
  }

  return (
    <div className="col-sm-2">
      <div>
        {button}
      </div>
      <div>
        <button className={addRefreshClass()}
                onClick={props.onClickRefresh}
                disabled={props.win === true || props.win === false}><i className="fa fa-refresh"></i> {props.refreshCount}</button>
      </div>
    </div>
  );
}

export default Button;