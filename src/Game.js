import React, { Component } from 'react';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';

//////////////////////////////////////////////

class Game extends Component {
  state = {
    numberOfStars: 1 + Math.floor(Math.random()*9),
    selectedNumbers: []
  };

  selectNumber = (input) => {
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(input)
    }))
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Stars numberOfStars={this.state.numberOfStars} />
          <Button />
          <Answer selectedNumbers={this.state.selectedNumbers} />
        </div>
        <Numbers onClickNumber={this.selectNumber} />
      </div>
    );
  }
}

export default Game;