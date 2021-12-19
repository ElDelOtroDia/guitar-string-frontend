import { all } from "redux-saga/effects";
import { userSaga } from "./user/saga";

export function* rootSaga() {
  yield all([userSaga()]);
}
