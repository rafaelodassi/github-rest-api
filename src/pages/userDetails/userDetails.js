import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { UserActions } from '../../store';

import TemplateState from '../../components/templateState/templateState';
import Loader from '../../components/loader/loader';

import notFoundState from '../../assets/img/not_found_state.svg';

import './userDetails.scss';

const UserDetails = ({ apiSearchUsers, data, loading, error }) => {
	useEffect(() => {
		// apiSearchUsers();
	}, []);

	useEffect(() => {
		// console.log(data, loading, error);
	});

	if (error)
		return <TemplateState text={error} type="error" />;

	if (loading || !data)
		return <Loader />;

	if (data.length === 0)
		return <TemplateState img={notFoundState} text={"Não encontramos ninguém por aqui com o nome xxx"} />;

	return (
		<div className="userDetails">
			aaaa
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

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);