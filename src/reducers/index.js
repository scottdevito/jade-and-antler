import { combineReducers } from 'redux';
import SignupReducer from './signup.R';
import PodcastReducer from './podcast.R';

const rootReducer = combineReducers({
  emailSubmitted: SignupReducer,
  podcastEpisodes: PodcastReducer,
});

export default rootReducer;
