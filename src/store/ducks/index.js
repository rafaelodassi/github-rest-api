import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import user from './user';
import repo from './repo';

const createRootReducer = history => combineReducers({
	router: connectRouter(history),
	user,
	repo
});

export default createRootReducer;
