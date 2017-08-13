import React from 'react';

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

const userInput = convertHMStoMilliseconds(0, 0, 3);
const startTime = new Date().getTime();
const counter = () => {
  const currentTime = new Date().getTime();

  if (currentTime - startTime >= userInput) {
    console.log('timer done');
    clearInterval(timer);
  }

  const milliseconds = ((startTime + userInput) - currentTime);
  const date = new Date(null);
  date.setMilliseconds(milliseconds);
  const result = date.toISOString().substring(11, 19);

  document.title = result;
};

const timer = window.setInterval(counter, 1000);

const countdownTimer = () => {
  counter();
  timer;
};

countdownTimer();