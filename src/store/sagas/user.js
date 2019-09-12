import { takeLatest, put, call } from 'redux-saga/effects';

import { Types as UserTypes } from '../../store/ducks/user';

import Http from '../../shared/services/base';

/*GET USERS*/
function getUsersApi(params) {
    return Http.get(`/users/${params.name}`);
}

function* getUsers(action) {
    try {
        const response = yield call(getUsersApi.bind(this, action.params));

        yield put({
            type: UserTypes.SUCCESS_GET_USERS,
            response: response.data
        });
        return "teste"
    }
    catch (err) {
        yield put({
            type: UserTypes.ERROR_GET_USERS,
            err
        });
    }
}

export function* getUsersSaga() {
    yield takeLatest(UserTypes.API_GET_USERS, getUsers);
}