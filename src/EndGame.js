import React from 'react';

//////////////////////////

const EndGame = (props) => {
  const playAgainButton = () => {
    return (
      <button className="btn btn-default again"
            onClick={props.clickPlayAgain}>Play Again</button>
    )
  }

  let message;

  switch(props.win) {
    case true: 
      message =
        <div>
          <i className="fa fa-trophy"></i>
          <p>You win!</p>
          {playAgainButton()}
        </div>
      break;
    case false:
      message =
        <div>
          <p>Better luck next time.</p>
          {playAgainButton()}
        </div>
      break;
    default:
    break;
  }

  return (
    <div className="endGame">
      {message}
    </div>
  );
}

export default EndGame;