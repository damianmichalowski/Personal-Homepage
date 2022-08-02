import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";
import {
    fetchRepos,
    fetchReposSuccess,
    fetchError,
} from "./reposSlice";

function* fetchReposHandler() {
    try {
        const reposList = yield axios.get(`https://api.github.com/users/damianmichalowski/repos`);
        yield put(fetchReposSuccess({ repos: reposList.data }));
    } catch (error) {
        yield put(fetchError());
        yield console.error(error);
    }
}

export function* reposSaga() {
    yield takeLatest(fetchRepos.type, fetchReposHandler);
}