import React from 'react';

// start a countdown
// store it in state
// display state to UI
// when user clicks stop, the time is saved somewhere

export default function Timer() {
  return (
    <form action="">
      <input type="text" />
      <input type="text" />
      <input type="submit" value='submit' />
    </form>
  );
}

// user enters minutes
//    new Date(year, month, date, hours, minutes, seconds), only need minutes, everything else 0 or null?
// count down those minutes
//    make user Date object
//    at the same time, make an incrementing Date object
//    check for the difference at the incrementor keeps increasing, until that difference is the amount that the user inputted

const startTime = new Date().getTime();

const callback = () => {
  document.title = Math.floor( ( new Date().getTime() - startTime ) / 1000 );
};

window.setInterval(callback, 1000);