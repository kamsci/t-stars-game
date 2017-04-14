import React from 'react';

//////////////////////////

const EndGame = (props) => {
  let messege;

  switch(props.win) {
    case true: 
      messege =
        <div>
          <i className="fa fa-trophy"></i>
          <p>You win!</p>
          <button className="btn btn-default again">Play Again</button>
        </div>
      break;
    case false:
      messege =
        <div>
          <p>Better luck next time.</p>
          <button className="btn btn-default again">Play Again</button>
        </div>
      break;
    default:
    break;
  }

  return (
    <div className="endGame">
      {messege}
    </div>
  );
}

export default EndGame;