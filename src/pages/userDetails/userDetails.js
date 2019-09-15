import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';

import { UserActions } from '../../store';

import TemplateState from '../../components/templateState/templateState';
import Loader from '../../components/loader/loader';

import logo from '../../assets/img/logo.png';
import { ReactComponent as IconStar } from '../../assets/icons/star.svg';

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

	const { avatar_url, name, bio, email, followers, following, repos } = dataUserDetails;

	const openMoreInfoRepo = (repo) => {
		console.log(repo);
	}

	return (
		<div className="userDetails">
			<div className="container-header-section">
				<div className="container-avatar">
					<div className="avatar" style={{ backgroundImage: `url(${avatar_url})` }}></div>
				</div>
				<span className="name">{name}</span>

				<div className="container-email-follow">
					<span className="email">{email || 'E-mail privado'}</span>
					<span className="followers">Seguidores: {followers || 0}</span>
					<span className="following">Seguindo: {following || 0}</span>
				</div>

				<span className="bio">{bio || <><strong>{name}</strong> ainda não escreveu nada sobre ele :(</>}</span>
			</div>

			{/* <h2 onClick={() => { goBack() }}>go back</h2> */}

			<h1>Repositórios</h1>

			<div className="container-repos">
				{repos.map((repo, index) => {
					return (
						<div key={index} className="card-container">
							<div className={`card slideUp ${repo.language ? `language-${repo.language.toLowerCase()}` : ""}`} onClick={() => openMoreInfoRepo(repo)}>
								<span className="name">{repo.name}</span>
								<span className="description">{repo.description}</span>

								<div className="container-info">
									{repo.language && <span className="language">{repo.language}</span>}
									<span className="star">
										<IconStar />
										{repo.stargazers_count || 0}
									</span>
								</div>
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
		dataUserDetails: user.dataUserDetails,
		loading: user.loading,
		error: user.error
	};
};

const mapDispatchToProps = dispatch => bindActionCreators({ ...UserActions, goBack }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);