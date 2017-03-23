/**
 * Crafted by x22a on 24.03.17.
 */
import signUpSaga from "./userSagas";

export default function* rootSaga() {
  yield [
    signUpSaga(),
  ];
}
