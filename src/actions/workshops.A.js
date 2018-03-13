import { GET_WORKSHOPS_SUCCESS, GET_WORKSHOPS_FAIL } from './types';
import db from '../startup/db_init';

const getWorkshops = () => {
  return dispatch => {
    let dateNow = new Date(Date.now()).getTime();

    // UTC sort is end time + 12 hours to ensure event doesn't clear until it's over
    db
      .collection('workshops')
      .where('UTCSort', '>', dateNow)
      .orderBy('UTCSort')
      .get()
      .then(function(querySnapshot) {
        let workshopsArray = [];

        querySnapshot.forEach(function(doc) {
          workshopsArray = [...workshopsArray, doc.data()];
        });
        dispatch({ type: GET_WORKSHOPS_SUCCESS, payload: workshopsArray });
      })
      .catch(function(error) {
        dispatch({ type: GET_WORKSHOPS_FAIL });
        return error;
      });
  };
};

export { getWorkshops };
