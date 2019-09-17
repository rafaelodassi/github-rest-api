import { takeLatest, put, call, debounce } from 'redux-saga/effects';

import { Types as UserTypes } from '../../store/ducks/user';

import Http from '../../shared/services/base';
import { serialize } from '../../shared/utils/serialize';

/*SEARCH USERS*/
function searchUsersApi(params) {
	if (params)
		return Http.get(`/search/users?${serialize(params)}`);
	else
		return Http.get(`/users?per_page=100`);
}

function* searchUsers(action) {
    try {
        const response = yield call(searchUsersApi.bind(this, action.params));

        yield put({
            type: UserTypes.SUCCESS_SEARCH_USERS,
            response: response.data
        });
    }
    catch (err) {
        yield put({
            type: UserTypes.ERROR_SEARCH_USERS,
            err
        });
    }
}

export function* searchUsersSaga() {
	yield debounce(300, UserTypes.API_SEARCH_USERS, searchUsers);
	// yield takeLatest(UserTypes.API_SEARCH_USERS, searchUsers);
}

/*GET USER BY LOGIN*/
function getUserByLoginApi(login) {
	return Http.get(`/users/${login}`);
}

/*GET REPOS BY LOGIN*/
function getReposByLoginApi(reposUrl) {
	return Http.get(`${reposUrl}?per_page=100`);
}

function* getUserByLogin(action) {
    try {
		const responseUser = yield call(getUserByLoginApi.bind(this, action.login));
		const responseRepos = yield call(getReposByLoginApi.bind(this, responseUser.data.repos_url));

        yield put({
            type: UserTypes.SUCCESS_GET_USER_BY_LOGIN,
            response: {
				...responseUser.data,
				repos: responseRepos.data || []
			}
        });
    }
    catch (err) {
        yield put({
            type: UserTypes.ERROR_GET_USER_BY_LOGIN,
            err
        });
    }
}

export function* getUserByLoginSaga() {
	yield takeLatest(UserTypes.API_GET_USER_BY_LOGIN, getUserByLogin);
}