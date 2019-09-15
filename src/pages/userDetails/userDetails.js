import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';

import { UserActions } from '../../store';

import TemplateState from '../../components/templateState/templateState';
import Loader from '../../components/loader/loader';

import './userDetails.scss';

const UserDetails = ({ match, apiGetUserByLogin, resetDataUserDetails, goBack, dataUserDetails, loading, error }) => {
	useEffect(() => {
		apiGetUserByLogin(match.params.login);

		return () => resetDataUserDetails();
	}, []);

	if (error)
		return <TemplateState text={error} type="error" />;

	if (loading || !dataUserDetails)
		return <Loader />;

	const { avatar_url, bio, email, followers, following, repos } = dataUserDetails;

	const openMoreInfoRepo = (repo) => {
		console.log(repo);
	}

	return (
		<div className="userDetails">
			{/* <h2 onClick={() => { goBack() }}>go back</h2> */}
			<div className="container-user-details">
				<h4>Informações</h4>
				<span>{avatar_url}</span>
				<span>{bio}</span>
				<span>{email || 'sem e-mail'}</span>
				<span>{followers}</span>
				<span>{following}</span>

				<h4>Repos</h4>
				{repos.map((repo, index) => {
					return (
						<span key={index} onClick={() => openMoreInfoRepo(repo)}>{repo.name} - {repo.stargazers_count}</span>
					)
				})}
			</div>

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