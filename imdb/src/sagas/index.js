import { call, all, takeLatest } from "redux-saga/effects";
import tvShowsSaga from "./tvShowsSaga";

export default function* rootSaga() {
  yield all([tvShowsSaga()]);
}
