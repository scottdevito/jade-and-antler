import { combineReducers } from 'redux';
import SignupReducer from './signup.R';
import PodcastReducer from './podcast.R';
import WorkshopsReducer from './workshops.R';

const rootReducer = combineReducers({
  emailSubmitted: SignupReducer,
  podcastEpisodes: PodcastReducer,
  workshops: WorkshopsReducer,
});

export default rootReducer;
