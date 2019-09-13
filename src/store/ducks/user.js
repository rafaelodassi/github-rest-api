import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
	apiSearchUsers: ['params'],
	successSearchUsers: [],
	errorSearchUsers: []
});

const initialState = {
	data: null,
	loading: false,
	error: false
};

/*SEARCH USERS*/
const apiSearchUsers = (state = initialState, action) => {
	return {
		...state,
		data: null,
		loading: true,
		error: false
	}
};

const successSearchUsers = (state = initialState, action) => ({
	...state,
	data: action.response.items || action.response,
	loading: false,
	error: false
});

const errorSearchUsers = (state = initialState, action) => ({
	...state,
	data: null,
	loading: false,
	error: action.err
});

export default createReducer(initialState, {
	[Types.API_SEARCH_USERS]: apiSearchUsers,
	[Types.SUCCESS_SEARCH_USERS]: successSearchUsers,
	[Types.ERROR_SEARCH_USERS]: errorSearchUsers
});