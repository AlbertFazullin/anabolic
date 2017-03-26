/**
 * Crafted by x22a on 26.03.17.
 */

import { actionCreator } from 'redux-action-creator';
import type from './actionTypes';

const { FETCH_GH_USER_REQUEST, FETCH_GH_USER_SUCCESS, FETCH_GH_USER_FAILURE } = type;

export default {
  fetchGhUserRequest: actionCreator(FETCH_GH_USER_REQUEST, 'login'),
  fetchGhUserSuccess: actionCreator(FETCH_GH_USER_SUCCESS, 'user'),
  fetchGhUserFailure: actionCreator(FETCH_GH_USER_FAILURE, 'error'),
};
