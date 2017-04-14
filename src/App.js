import React, { Component } from 'react';
import _ from 'lodash';

import './App.css';

import logo from './logo.svg';
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
        <div className="App-intro">
          <p><strong>Instructions: </strong>Count starts using the number options in the box. The goal is to use all numbers, but each numbers can only be used once. You have 5 chances for a redraw.</p>
          <p>Think you have the answer? Click the blue = to check your answer, then click the green <i className="fa fa-check"></i> to submit your final answer!</p>
        </div>
        <div>
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
