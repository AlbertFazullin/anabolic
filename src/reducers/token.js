/**
 * Crafted by x22a on 24.03.17.
 */
import actionTypes from '../actions/actionTypes';

const { SIGN_IN_SUCCESS, LOGOUT } = actionTypes;

const token = (state = {}, { type, payload }) => {
  switch (type){
  case SIGN_IN_SUCCESS:
    return payload.token;
  case LOGOUT:
    return {};
  default:
    return state;
  }
};

export default { token };
