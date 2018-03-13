import { GET_EPISODES_SUCCESS, GET_EPISODES_FAIL } from './types';
import db from '../startup/db_init';

// Add user email to the mailingList collection
const getPodcastEpisodes = () => {
  return dispatch => {
    db
      .collection('podcastEpisodes')
      .orderBy('UTCDate', 'desc')
      .get()
      .then(function(querySnapshot) {
        let podcastEpisodesArray = [];

        querySnapshot.forEach(function(doc) {
          podcastEpisodesArray = [...podcastEpisodesArray, doc.data()];
        });
        dispatch({ type: GET_EPISODES_SUCCESS, payload: podcastEpisodesArray });
      })
      .catch(function(error) {
        dispatch({ type: GET_EPISODES_FAIL });
        return error;
      });
  };
};

export { getPodcastEpisodes };
