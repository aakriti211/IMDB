import { call, takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* fetchTvShows() {
  try {
    const response = yield call(() => axios.get("/tvShows/all"));
    yield put({
      type: "UPDATE_TVSHOWS",
      payload: response.data
    });
  } catch (e) {
    console.log(e);
  }
}

export default function* gameSaga() {
  yield takeEvery("FETCH_TVSHOWS", fetchTvShows);
}
