import { SUBMIT_EMAIL_SUCCESS, SUBMIT_EMAIL_FAIL } from './types';
import db from '../startup/db_init';

// Add user email to the mailingList collection
const submitEmailToMailingList = email => {
  let trimmedEmail = email.toLowerCase().trim();

  return dispatch => {
    const emailValidate = /\S+@\S+\.\S+/;
    if (!emailValidate.test(email)) {
      throw new Error('Please enter a valid email');
    }

    db
      .collection('mailingList')
      .doc(trimmedEmail)
      .set({
        email: trimmedEmail,
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
        return error;
      });
  };
};

export { submitEmailToMailingList };
