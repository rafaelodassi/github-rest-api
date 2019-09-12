import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
	apiSearchUsers: ['params'],
	successSearchUsers: [],
	errorSearchUsers: []
});

const initialState = {
	data: [],
	loading: false,
	error: false
};

/*SEARCH USERS*/
const apiSearchUsers = (state = initialState, action) => {
	return {
		...state,
		loading: true,
		error: false
	}
};

const successSearchUsers = (state = initialState, action) => ({
	...state,
	data: action.response.items,
	loading: false,
	error: false
});

const errorSearchUsers = (state = initialState, action) => ({
	...state,
	data: [],
	loading: false,
	error: action.err
});

export default createReducer(initialState, {
	[Types.API_SEARCH_USERS]: apiSearchUsers,
	[Types.SUCCESS_SEARCH_USERS]: successSearchUsers,
	[Types.ERROR_SEARCH_USERS]: errorSearchUsers
});