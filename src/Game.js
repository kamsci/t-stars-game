import React, { Component } from 'react';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';

//////////////////////////////////////////////

class Game extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Stars />
          <Button />
          <Answer />
        </div>
        <Numbers />
      </div>
    );
  }
}

export default Game;