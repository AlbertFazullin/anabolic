/**
 * Crafted by x22a on 24.03.17.
 */
import { put, takeEvery } from "redux-saga/effects";
import type from "../actions/actionTypes";
import actions from "../actions/userActions";

const { signUpSuccess } = actions;

function* signUpSaga() {
  yield takeEvery(type.SIGN_UP_REQUEST, signUp);
}

function* signUp(action) {
  yield put(signUpSuccess(action.payload.id));
}

export default signUpSaga;
