import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { UserActions } from '../../store';

import './userList.scss';

const UserList = ({ apiSearchUsers, data, loading, error }) => {
	useEffect(() => {
		apiSearchUsers();
	}, []);

	useEffect(() => {
		console.log(data, loading, error);
	});

	return (
		<div className="userList">
			asas
		</div>
	);
}

const mapStateToProps = state => {
	const { user } = state;

	return {
		data: user.data,
		loading: user.loading,
		error: user.error
	};
};

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserList);