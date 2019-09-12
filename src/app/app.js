import React from 'react';

import Header from '../components/header/header';
import UserList from '../components/userList/userList';

import './app.scss';

const App = () => {
	return (
		<div className="app">
			<Header />
			<UserList />
		</div>
	);
}

export default App;