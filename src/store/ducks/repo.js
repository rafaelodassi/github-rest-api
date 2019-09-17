import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
	changeOrderReposByStars: [],
	toggleDrawerRepo: ['repo'],
	resetOrderReposByStar: []
});

const initialState = {
	orderReposByStars: 'DESC',
	drawerRepoDetails: {}
};

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
	[Types.CHANGE_ORDER_REPOS_BY_STARS]: changeOrderReposByStars,
	[Types.TOGGLE_DRAWER_REPO]: toggleDrawerRepo,
	[Types.RESET_ORDER_REPOS_BY_STAR]: resetOrderReposByStar
});