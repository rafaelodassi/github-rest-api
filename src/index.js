import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store/configureStore';

import Header from './components/header/header';
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
			  	<Header />
				<Switch>
					<Route exact path="/" render={() => <UserList />} />
					<Route path="/user/:id" render={() => <UserDetails />} />
					<Route render={() => (<div>404</div>)} />
				</Switch>
      		</>
    	</ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);