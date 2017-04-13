import React, { Component } from 'react';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';

//////////////////////////////////////////////

class Game extends Component {
  static randomNumber = () => 1 + Math.floor(Math.random() * 9)
  static refreshMax = 5;

  state = {
    numberOfStars: Game.randomNumber(),
    selectedNumbers: [],
    answerCorrect: null,
    usedNumbers: [],
    refreshCount: Game.refreshMax
  };

  selectNumber = (numberClicked) => {
    if(this.state.selectedNumbers.indexOf(numberClicked) >= 0
      || this.state.usedNumbers.indexOf(numberClicked) >= 0) 
      { return; }

    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(numberClicked), 
      answerCorrect: null
    }));
  };

  unselectNumber = (numberClicked) => {
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.filter(number => number !== numberClicked),
      answerCorrect: null
    }));
  };

  checkAnswer = () => {
    this.setState(prevState => ({
      answerCorrect: prevState.selectedNumbers.reduce((sum, val) => sum + val) === prevState.numberOfStars
    }))
  };

  acceptAnswer = () => {
    this.setState(prevState => ({
      usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      numberOfStars: Game.randomNumber(),
      answerCorrect: null
    }));
  }

  refresh = () => {
    if(this.state.refreshCount !== 0) {
      this.setState(prevState => ({
        selectedNumbers: [],
        numberOfStars: Game.randomNumber(),
        answerCorrect: null,
        refreshCount: prevState.refreshCount - 1
      }));
    } else {
      this.setState ({
        numberOfStars: Game.randomNumber(),
        selectedNumbers: [],
        answerCorrect: null,
        usedNumbers: [],
        refreshCount: Game.refreshMax
      });
    }
  }

  render() {
    const {
      numberOfStars,
      selectedNumbers,
      answerCorrect,
      usedNumbers,
      refreshCount
    } = this.state;

    return (
      <div className="container">
        <div className="row">
          <Stars numberOfStars={numberOfStars} />
          <Button selectedNumbers={selectedNumbers}
                  onClickButton={this.checkAnswer}
                  onClickButtonSuccess={this.acceptAnswer}
                  answerCorrect={answerCorrect}
                  refreshCount={refreshCount}
                  onClickRefresh={this.refresh} />
          <Answer selectedNumbers={selectedNumbers}
                  onClickNumber={this.unselectNumber} />
        </div>
        <Numbers selectedNumbers={selectedNumbers}
                 usedNumbers={usedNumbers}
                 onClickNumber={this.selectNumber} />
        <div className="lost">

        </div>
      </div>
    );
  }
}

export default Game;