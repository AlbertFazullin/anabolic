/**
 * Crafted by x22a on 26.03.17.
 */

import actionTypes from '../actions/actionTypes';

const ghUser = (state = {}, { type, payload }) => {
  if ( type === actionTypes.FETCH_GH_USER_SUCCESS ) {
    return payload.user;
  }
  return state;
};

export default { ghUser };
