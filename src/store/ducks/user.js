import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
	apiGetUsers: ['params'],
	successGetUsers: [],
	errorGetUsers: []
});

const initialState = {
	data: [],
	loading: false,
	error: false
};

/*GET USERS*/
const apiGetUsers = (state = initialState, action) => {
	return {
		...state,
		loading: true,
		error: false
	}
};

const successGetUsers = (state = initialState, action) => ({
	...state,
	data: action.response,
	loading: false,
	error: false
});

const errorGetUsers = (state = initialState, action) => ({
	...state,
	data: [],
	loading: false,
	error: action.err
});

export default createReducer(initialState, {
	[Types.API_GET_USERS]: apiGetUsers,
	[Types.SUCCESS_GET_USERS]: successGetUsers,
	[Types.ERROR_GET_USERS]: errorGetUsers
});