/**
 * Crafted by x22a on 24.03.17.
 */
import { registerUser, loginUser } from './api';
import { browserHistory } from 'react-router';
import { put, takeLatest, call } from "redux-saga/effects";
import type from "../actions/actionTypes";
import actions from "../actions/userActions";

const { signUpSuccess, signUpFailure, signInSuccess, signInFailure } = actions;

export function* signUpSaga() {
  yield takeLatest(type.SIGN_UP_REQUEST, signUp);
}

function* signUp(action) {
  try {
    yield call(registerUser, action.payload);
    yield put(signUpSuccess());
    browserHistory.push('/sign-in');
  } catch (e) {
    yield put(signUpFailure(e));
  }
}

export function* signInSaga() {
  yield takeLatest(type.SIGN_IN_REQUEST, signIn);
}

function* signIn(action) {
  try {
    const res = yield call(loginUser, action.payload);
    yield put(signInSuccess(res.body.token));
    browserHistory.push('/');
  } catch (e) {
    yield put(signInFailure(e));
  }
}
