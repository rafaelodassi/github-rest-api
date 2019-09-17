import { takeLatest, put, call, debounce } from 'redux-saga/effects';

import { Types as UserTypes } from '../../store/ducks/repo';

import Http from '../../shared/services/base';

/*GET REPOS BY LOGIN*/
function getReposByLoginApi(reposUrl) {
	return Http.get(reposUrl);
}

function* getReposByLogin(action) {
    try {
		const response = yield call(getReposByLoginApi.bind(this, action.repos_url));

        yield put({
            type: UserTypes.SUCCESS_GET_REPOS_BY_LOGIN,
            response: {
				...response.data
			}
        });
    }
    catch (err) {
        yield put({
            type: UserTypes.ERROR_GET_REPOS_BY_LOGIN,
            err
        });
    }
}

export function* getReposByLoginSaga() {
	yield takeLatest(UserTypes.API_GET_REPOS_BY_LOGIN, getReposByLogin);
}