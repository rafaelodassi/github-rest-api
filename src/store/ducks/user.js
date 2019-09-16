import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
	apiSearchUsers: ['params'],
	successSearchUsers: [],
	errorSearchUsers: [],
	resetDataUserList: [],

	apiGetUserByLogin: ['login'],
	successGetUserByLogin: [],
	errorGetUserByLogin: [],
	changeOrderReposByStars: [],
	resetDataUserDetails: [],

	toggleDrawerRepo: ['repo']
});

const initialState = {
	dataUserList: null,
	dataUserDetails: null,
	loading: false,
	error: false,
	orderReposByStars: 'DESC',
	drawerRepoDetails: {}
};

/*SEARCH USERS*/
const apiSearchUsers = (state = initialState, action) => {
	return {
		...state,
		dataUserList: null,
		loading: true,
		error: false
	}
};

const successSearchUsers = (state = initialState, action) => ({
	...state,
	dataUserList: action.response.items || action.response,
	loading: false,
	error: false
});

const errorSearchUsers = (state = initialState, action) => ({
	...state,
	dataUserList: null,
	loading: false,
	error: action.err
});

/*RESET DATA USER LIST*/
const resetDataUserList = (state = initialState, action) => ({
	...state,
	dataUserList: null
});

/*GET USER BY LOGIN*/
const apiGetUserByLogin = (state = initialState, action) => {
	return {
		...state,
		dataUserDetails: null,
		loading: true,
		error: false
	}
};

const successGetUserByLogin = (state = initialState, action) => ({
	...state,
	dataUserDetails: action.response,
	loading: false,
	error: false
});

const errorGetUserByLogin = (state = initialState, action) => ({
	...state,
	dataUserDetails: null,
	loading: false,
	error: action.err
});

/*CHANGE ORDER REPOS BY STARS*/
const changeOrderReposByStars = (state = initialState, action) => ({
	...state,
	orderReposByStars: state.orderReposByStars === "ASC" ? "DESC" : "ASC"
});

/*RESET DATA USER DETAILS*/
const resetDataUserDetails = (state = initialState, action) => ({
	...state,
	dataUserDetails: null,
	orderReposByStars: "DESC"
});

/*RESET DATA USER DETAILS*/
const toggleDrawerRepo = (state = initialState, action) => ({
	...state,
	drawerRepoDetails: action.repo
});

export default createReducer(initialState, {
	[Types.API_SEARCH_USERS]: apiSearchUsers,
	[Types.SUCCESS_SEARCH_USERS]: successSearchUsers,
	[Types.ERROR_SEARCH_USERS]: errorSearchUsers,
	[Types.RESET_DATA_USER_LIST]: resetDataUserList,

	[Types.API_GET_USER_BY_LOGIN]: apiGetUserByLogin,
	[Types.SUCCESS_GET_USER_BY_LOGIN]: successGetUserByLogin,
	[Types.ERROR_GET_USER_BY_LOGIN]: errorGetUserByLogin,
	[Types.CHANGE_ORDER_REPOS_BY_STARS]: changeOrderReposByStars,
	[Types.RESET_DATA_USER_DETAILS]: resetDataUserDetails,

	[Types.TOGGLE_DRAWER_REPO]: toggleDrawerRepo
});