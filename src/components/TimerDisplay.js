import React from 'react';
import { connect } from 'react-redux';

export function TimerDisplay(props) {
  return (
    <div>
      {props.seconds}
    </div>
  );
}

const mapStateToProps = state => ({
  minutes: state.minutes,
  seconds: state.seconds
});

export default connect(mapStateToProps)(TimerDisplay);