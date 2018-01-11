import { SUBMIT_EMAIL_SUCCESS, SUBMIT_EMAIL_FAIL } from '../actions/types';

export default function(state = false, action) {
  switch (action.type) {
    case SUBMIT_EMAIL_SUCCESS:
      return Object.assign(...state, true);
    case SUBMIT_EMAIL_FAIL:
      return Object.assign(...state, false);
    default:
      return state;
  }
}
