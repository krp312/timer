import React, { Component } from 'react';
import './App.css';
import TimeSubmitter from './TimeSubmitter';
import TimerDisplay from './TimerDisplay';

class App extends Component {
  render() {
    return (
      <div>
        <TimeSubmitter />
        <TimerDisplay />
      </div>
    );
  }
}

export default App;