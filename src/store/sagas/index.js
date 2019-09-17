import { all, fork } from "redux-saga/effects";

import * as userSagas from "./user";

const getValuesInObject = obj => Object.keys(obj).map(value => obj[value]);

export default function* rootSaga() {
    yield all([
		...getValuesInObject(userSagas),
    ].map(fork));
}