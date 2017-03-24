/**
 * Crafted by x22a on 24.03.17.
 */
import { signUpSaga, signInSaga } from "./userSagas";

export default function* rootSaga() {
  yield [
    signUpSaga(),
    signInSaga(),
  ];
}
