import { SUBMIT_EMAIL_SUCCESS, SUBMIT_EMAIL_FAIL } from './types';
import db from '../startup/db_init';

// Add user email to the mailingList collection
const submitEmailToMailingList = email => {
  return dispatch => {
    db
      .collection('mailingList')
      .doc(email)
      .set({
        email,
        dateSubmitted: new Date()
          .toJSON()
          .slice(0, 10)
          .replace(/-/g, '/'),
      })
      .then(function(userDocRef) {
        dispatch({ type: SUBMIT_EMAIL_SUCCESS });
      })
      .catch(function(error) {
        dispatch({ type: SUBMIT_EMAIL_FAIL });
        console.error('Error submitting email: ', error);
      });
  };
};

export { submitEmailToMailingList };
