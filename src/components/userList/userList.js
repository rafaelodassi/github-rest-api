import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { UserActions } from '../../store';

import ErrorState from '../errorState/errorState';
import Loader from '../loader/loader';

import './userList.scss';

const UserList = ({ apiSearchUsers, data, loading, error }) => {
	useEffect(() => {
		apiSearchUsers();
	}, []);

	useEffect(() => {
		console.log(data, loading, error);
	});

	if (error)
		return (<ErrorState text={error} />)

	if (loading)
		return (<Loader />)

	return (
		<div className="userList">
			<div className="container-user-list">
				{data.map((user, index) => {
					return (
						<div key={index} className="card-container">
							<div className="card">
								<div className="avatar" style={{ backgroundImage: `url(${user.avatar_url})` }}></div>
								<span>{user.login}</span>
								<span>{user.login}</span>
							</div>
						</div>
					)
				})}
			</div>
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