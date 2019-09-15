import 'react-app-polyfill/ie11';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store/configureStore';

import UserList from './pages/userList/userList';
import UserDetails from './pages/userDetails/userDetails';

import './index.scss';

const store = configureStore({
	/*initial reducer*/
});

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
      		<>
				<Switch>
					<Route exact path="/" render={props => <UserList match={props.match} />} />
					<Route path="/user/:login" render={props => <UserDetails match={props.match} />} />
					<Route render={props => (<div>404</div>)} />
				</Switch>
      		</>
    	</ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);