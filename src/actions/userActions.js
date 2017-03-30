/**
 * Crafted by x22a on 24.03.17.
 */

import { actionCreator } from 'redux-action-creator';
import type from './actionTypes';

export default {
  signInRequest: actionCreator(type.SIGN_IN_REQUEST, 'username', 'password'),
  signInSuccess: actionCreator(type.SIGN_IN_SUCCESS, 'token'),
  signInFailure: actionCreator(type.SIGN_IN_FAILURE, 'error'),

  signUpRequest: actionCreator(type.SIGN_UP_REQUEST, 'username', 'password'),
  signUpSuccess: actionCreator(type.SIGN_UP_SUCCESS),
  signUpFailure: actionCreator(type.SIGN_UP_FAILURE, 'error'),

  getUsersRequest: actionCreator(type.GET_USERS_REQUEST),
  getUsersSuccess: actionCreator(type.GET_USERS_SUCCESS, 'users'),
  getUsersFailure: actionCreator(type.GET_USERS_FAILURE, 'error'),

  logout: actionCreator(type.LOGOUT),
};
