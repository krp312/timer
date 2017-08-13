const HMStoMilliseconds = (hours, minutes, seconds) => {
  const hoursToMinutes = hours * 60;
  const minutesToSeconds = (hoursToMinutes + minutes) * 60;
  const milliseconds = (minutesToSeconds + seconds) * 1000;
  return milliseconds;
};

const millisecondsToHMS = milliseconds => {
  // 1- Convert to seconds:
  let seconds = milliseconds / 1000;

  // 2- Extract hours:
  let hours = parseInt(seconds / 3600, 10); // 3,600 seconds in 1 hour
  seconds = seconds % 3600; // seconds remaining after extracting hours

  // 3- Extract minutes:
  let minutes = parseInt(seconds / 60, 10); // 60 seconds in 1 minute

  // 4- Keep only seconds not extracted to minutes:
  seconds = Math.round(seconds % 60);

  seconds = seconds < 10 ? '0' + seconds : seconds;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  hours = hours < 10 ? '0' + hours : hours;

  return `${hours}:${minutes}:${seconds}`;
};

const userInput;
const startTime = new Date().getTime();
let clock;

const countdownTimer = () => {
  ticker();
  clock = setInterval(ticker, 1000);
};

const ticker = () => {
  const currentTime = new Date().getTime();

  if (currentTime - startTime >= userInput) {
    console.log('timer done');
    clearInterval(clock);
  }

  const milliseconds = startTime + userInput - currentTime;

  console.log(millisecondsToHMS(milliseconds));
};