import { combineReducers } from 'redux';
import SignupReducer from './signup.R';

const rootReducer = combineReducers({
  emailSubmitted: SignupReducer,
});

export default rootReducer;
