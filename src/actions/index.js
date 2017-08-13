export const UPDATE_SUBMITTED_TIME = 'UPDATE_SUBMITTED_TIME';
export const updateSubmittedTime = (minutes, seconds) => ({
  type: UPDATE_SUBMITTED_TIME,
  minutes,
  seconds
});