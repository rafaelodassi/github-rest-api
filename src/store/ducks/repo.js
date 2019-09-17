import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
	apiGetReposByLogin: ['login'],
	successGetReposByLogin: [],
	errorGetReposByLogin: [],

	changeOrderReposByStars: [],
	toggleDrawerRepo: ['repo'],
	resetOrderReposByStar: []
});

const initialState = {
	repos: null,
	loading: false,
	error: false,
	orderReposByStars: 'DESC',
	drawerRepoDetails: {}
};

/*GET REPOS BY LOGIN*/
const apiGetReposByLogin = (state = initialState, action) => {
	return {
		...state,
		repos: null,
		loading: true,
		error: false
	}
};

const successGetReposByLogin = (state = initialState, action) => ({
	...state,
	repos: action.response,
	loading: false,
	error: false
});

const errorGetReposByLogin = (state = initialState, action) => ({
	...state,
	repos: null,
	loading: false,
	error: action.err
});

/*CHANGE ORDER REPOS BY STARS*/
const changeOrderReposByStars = (state = initialState, action) => ({
	...state,
	orderReposByStars: state.orderReposByStars === "ASC" ? "DESC" : "ASC"
});

/*TOGGLE DRAWER REPO*/
const toggleDrawerRepo = (state = initialState, action) => ({
	...state,
	drawerRepoDetails: action.repo
});

/*RESET ORDER REPOS BY STAR*/
const resetOrderReposByStar = (state = initialState, action) => ({
	...state,
	orderReposByStars: "DESC"
});

export default createReducer(initialState, {
	[Types.API_GET_REPOS_BY_LOGIN]: apiGetReposByLogin,
	[Types.SUCCESS_GET_REPOS_BY_LOGIN]: successGetReposByLogin,
	[Types.ERROR_GET_REPOS_BY_LOGIN]: errorGetReposByLogin,
	[Types.CHANGE_ORDER_REPOS_BY_STARS]: changeOrderReposByStars,
	[Types.TOGGLE_DRAWER_REPO]: toggleDrawerRepo,
	[Types.RESET_ORDER_REPOS_BY_STAR]: resetOrderReposByStar
});