import React from 'react';
import { connect } from 'react-redux';
import { updateSubmittedTime } from '../actions';
import { TimerDisplay } from './TimerDisplay';

export class TimeSubmitter extends React.Component {
  updateTimes(event) {
    event.preventDefault();
    this.props.dispatch(updateSubmittedTime(this.minutes.value, this.seconds.value));
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.updateTimes(event)}>
          <input type="text" ref={input => this.minutes = input} />
          <input type="text" ref={input => this.seconds = input} />
          <input type="submit" value="submit" />
        </form>
        <TimerDisplay />
      </div>
    );
  }
}

export default connect()(TimeSubmitter);