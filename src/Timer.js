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

const userInput = 3000;
const startTime = new Date().getTime();

const callback = () => {
  let currentTime = new Date().getTime();

  if (currentTime - startTime > userInput) {
    console.log('done');
  }

  document.title = (currentTime - startTime) / 1000;
};

window.setInterval(callback, 1000);