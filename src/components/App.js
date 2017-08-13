import React from 'react';
// import '../styles/App.css';
import TimeSubmitter from './TimeSubmitter';
import TimerDisplay from './TimerDisplay';

class App extends React.Component {
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