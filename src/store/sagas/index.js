import { all, fork } from "redux-saga/effects";

import * as userSagas from "./user";
import * as repoSagas from "./repo";

export default function* rootSaga() {
    yield all([
		...Object.values(userSagas),
		...Object.values(repoSagas)
    ].map(fork));
}