/**
 * Crafted by x22a on 26.03.17.
 */
import { put, takeEvery, call } from 'redux-saga/effects';
import type from '../actions/actionTypes';
import actions from '../actions/gitHubActions';
import { fetchUser } from './api';

const { FETCH_GH_USER_REQUEST } = type;
const { fetchGhUserSuccess, fetchGhUserFailure } = actions;

export default function* fetchGhUserSaga() {
  yield takeEvery(FETCH_GH_USER_REQUEST, fetchGhUser);
}

function* fetchGhUser({ payload }) {
  try {
    const res = yield call(fetchUser, payload.login);
    yield put(fetchGhUserSuccess(res.body));
  } catch (e) {
    yield put(fetchGhUserFailure(e));
  }
}
