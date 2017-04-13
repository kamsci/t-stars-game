import React, { Component } from 'react';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';

//////////////////////////////////////////////

class Game extends Component {
  state = {
    numberOfStars: 1 + Math.floor(Math.random()*9)
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <Stars numberOfStars={this.state.numberOfStars} />
          <Button />
          <Answer />
        </div>
        <Numbers />
      </div>
    );
  }
}

export default Game;