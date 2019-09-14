import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store/configureStore';

import Header from './components/header/header';
import UserList from './components/userList/userList';

import './index.scss';

const store = configureStore({
	/*initial reducer*/
});

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
      		<>
			  	<Header />
				<UserList />
				<Switch>
					<Route exact path="/" render={() => (<div>Match</div>)} />
					<Route render={() => (<div>Miss</div>)} />
				</Switch>
      		</>
    	</ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);