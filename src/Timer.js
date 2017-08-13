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

const convertHMStoMilliseconds = (hours, minutes, seconds) => {
  const hoursToMinutes = hours * 60;
  const minutesToSeconds = (hoursToMinutes + minutes) * 60;
  const milliseconds = (minutesToSeconds + seconds) * 1000;
  return milliseconds;
};

const convertMillisecondsToHMS = milliseconds => {

};

const userInput = convertHMStoMilliseconds(1, 30, 900);
const startTime = new Date().getTime();
const counter = () => {
  let currentTime = new Date().getTime();

  if (currentTime - startTime >= userInput) {
    console.log('timer done');
    clearInterval(timer);
  }
  
  document.title = ((startTime + userInput) - currentTime); // Math.ceil seems to work well, even when going into negatives
};

const timer = window.setInterval(counter, 1000);

const countdownTimer = () => {
  counter(); // needs to happen to fire first iteration of itself, otherwise there will be a delay that's the second arg of setInterval
  timer;
};

countdownTimer();