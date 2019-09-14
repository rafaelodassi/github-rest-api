import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';

import { UserActions } from '../../store';

import TemplateState from '../../components/templateState/templateState';
import Loader from '../../components/loader/loader';

import notFoundState from '../../assets/img/not_found_state.svg';

import './userDetails.scss';

const UserDetails = ({ match, apiGetUserByLogin, resetDataUserDetails, goBack, dataUserDetails, loading, error }) => {
	useEffect(() => {
		apiGetUserByLogin(match.params.login);

		return () => resetDataUserDetails();
	}, []);

	// if (error)
	// 	return <TemplateState text={error} type="error" />;

	// if (loading || !data)
	// 	return <Loader />;

	// if (data.length === 0)
	// 	return <TemplateState img={notFoundState} text={"Não encontramos ninguém por aqui com o nome xxx"} />;

	return (
		<div className="userDetails">
			<h2 onClick={() => { goBack() }}>go back</h2>
		</div>
	);
}

const mapStateToProps = state => {
	const { user } = state;

	return {
		dataUserDetails: user.dataUserDetails,
		loading: user.loading,
		error: user.error
	};
};

const mapDispatchToProps = dispatch => bindActionCreators({ ...UserActions, goBack }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);