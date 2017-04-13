import React from 'react';

//////////////////////////

const Button = (props) => {
  
  return (
    <div className="col-sm-2">
      <button className="btn btn-success" disabled={props.selectedNumbers.length === 0}>=</button>
    </div>
  );
}

export default Button;