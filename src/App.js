import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';

//////////////////////////////////////////////

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo pull-left" alt="logo" />
          <h2>Play Nine</h2>
        </div>
        <p className="App-intro">
          Instructions on how to play game.
        </p>
        <div>
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
