import { UPDATE_SUBMITTED_TIME } from '../actions';

const initialState = {
  minutes: '',
  seconds: ''
};

const reducer = (state=initialState, action) => {
  if (action.type === UPDATE_SUBMITTED_TIME) {
    return Object.assign({}, state, {
      minutes: action.minutes,
      seconds: action.seconds
    });
  }
};

export default reducer;