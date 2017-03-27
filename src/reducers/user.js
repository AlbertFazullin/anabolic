/**
 * Crafted by x22a on 27.03.17.
 */

import actionTypes from '../actions/actionTypes';

const users = (state = {}, { type, payload }) => {
  if ( type === actionTypes.GET_USERS_SUCCESS ) {
    return payload.users;
  }
  return state;
};

export default { users };
