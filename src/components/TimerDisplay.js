import React from 'react';
import { connect } from 'react-redux';

export function TimerDisplay(props) {
  return (
    <div>
      submission: {props.minutes} minutes, {props.seconds} seconds
    </div>
  );
}

export const mapStateToProps = state => ({
  minutes: state.minutes,
  seconds: state.seconds
});

export default connect(mapStateToProps)(TimerDisplay);