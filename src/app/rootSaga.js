import { all } from "redux-saga/effects";
import { reposSaga } from "../Portfolio/reposSaga";

export default function* rootSaga() {
    yield all([
        reposSaga()
    ])
}