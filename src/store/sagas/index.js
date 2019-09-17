import { all, fork } from "redux-saga/effects";

import * as userSagas from "./user";

export default function* rootSaga() {
    yield all([
		...Object.values(userSagas),
    ].map(fork));
}