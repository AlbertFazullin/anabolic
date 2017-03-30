/**
 * Crafted by x22a on 24.03.17.
 */
import { signUpSaga, signInSaga, logoutSaga, getUsersSaga } from './userSagas';
import fetchGhUserSaga from './gitHubSaga';

export default function* rootSaga() {
  yield [
    signUpSaga(),
    signInSaga(),
    logoutSaga(),
    getUsersSaga(),
    fetchGhUserSaga(),
  ];
}
