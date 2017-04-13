import React, { Component } from 'react';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';

//////////////////////////////////////////////

class Game extends Component {
  state = {
    numberOfStars: 1 + Math.floor(Math.random() * 9),
    selectedNumbers: []
  };

  selectNumber = (numberClicked) => {
    if(this.state.selectedNumbers.indexOf(numberClicked) >= 0) { return; }

    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(numberClicked)
    }));
  };

  unselectNumber = (numberClicked) => {
    this.setState(prevState => ({
    selectedNumbers: prevState.selectedNumbers.filter(number => number !== numberClicked)
    }));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Stars numberOfStars={this.state.numberOfStars} />
          <Button />
          <Answer selectedNumbers={this.state.selectedNumbers}
                  onClickNumber={this.unselectNumber} />
        </div>
        <Numbers selectedNumbers={this.state.selectedNumbers}
                 onClickNumber={this.selectNumber} />
      </div>
    );
  }
}

export default Game;