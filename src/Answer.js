import React from 'react';

//////////////////////////

const Answer = (props) => {
  return (
    <div className="col-sm-5">
    {props.selectedNumbers.map((number, i) =>
      <span key={i}
            onClick={() => props.onClickNumber(number)}>{number}</span>
    )}
    </div>
  );
}

export default Answer;