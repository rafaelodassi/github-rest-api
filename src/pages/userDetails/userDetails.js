import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';

import { UserActions, RepoActions } from '../../store';

import bgHeader from '../../assets/img/bg-header.jpg';

import TemplateState from '../../components/templateState/templateState';
import Loader from '../../components/loader/loader';
import DrawerRepo from '../../components/drawerRepo/drawerRepo';

import { ReactComponent as IconBack } from '../../assets/icons/back.svg';
import { ReactComponent as IconStar } from '../../assets/icons/star.svg';

import './userDetails.scss';

const UserDetails = (props) => {
	const {
		match,
		apiGetUserByLogin,
		resetDataUserDetails,
		goBack,
		dataUserDetails,
		loading,
		error,
		changeOrderReposByStars,
		orderReposByStars,
		toggleDrawerRepo,
		resetOrderReposByStar
	} = props;

	useEffect(() => {
		apiGetUserByLogin(match.params.login);

		return () => {
			resetDataUserDetails();
			resetOrderReposByStar();
		}
	}, []);

	if (error)
		return <TemplateState text={error} type="error" />;

	if (loading || !dataUserDetails)
		return <Loader />;

	const { avatar_url, name, bio, email, followers, following, repos } = dataUserDetails;

	const getReposOrderned = (reposToOrder) => {
		return reposToOrder.sort((a, b) => {
			if (orderReposByStars === "ASC") {
				if (a.stargazers_count > b.stargazers_count) return 1;
				else if (a.stargazers_count < b.stargazers_count) return -1;
				return 0;
			}
			else {
				if (a.stargazers_count < b.stargazers_count) return 1;
				else if (a.stargazers_count > b.stargazers_count) return -1;
				return 0;
			}
		});
	}

	const getLabelOrder = () => {
		return orderReposByStars === "ASC" ? "Crescente" : "Decrescente";
	}

	return (
		<div className="userDetails">
			<div className="back" onClick={() => goBack()}>
				<IconBack />
				<span>Voltar para a busca</span>
			</div>

			<div className="container-header-section" style={{ backgroundImage: `url(${bgHeader})` }}>
				<div className="section-info">
					<div className="container-avatar">
						<div className="avatar" style={{ backgroundImage: `url(${avatar_url})` }}></div>
					</div>

					<div className="container-info">
						<span className="name">{name || 'Ops! Sem nome'}</span>
						<div className="email"><span>{email || 'E-mail privado'}</span></div>
						<span className="followers">Seguidores: <strong>{followers || 0}</strong></span>
						<span className="following">Seguindo: <strong>{following || 0}</strong></span>
					</div>
				</div>

				<span className="bio">{bio || <><strong>{name}</strong> ainda não escreveu nada sobre ele :(</>}</span>
			</div>

			<div className="container-repos">
				{(repos && repos.length) ? (
					<>
						<div className="header-repos">
							<span className="title">Repositórios</span>
							<div className="order">
								<div className="bt-change-order" onClick={() => changeOrderReposByStars()} title={`Repositórios ordenados por estrelas (${getLabelOrder().toLowerCase()})`}>
									{getLabelOrder()}<IconStar />
								</div>
							</div>
						</div>

						<div className="table-repos">
							<table>
								<thead>
									<tr>
										<th>Nome</th>
										<th>Linguagem</th>
										<th>Estrelas</th>
									</tr>
								</thead>
								<tbody>
									{getReposOrderned(repos).map((repo, index) => {
										return (
											<tr key={index} onClick={() => toggleDrawerRepo(repo)}>
												<td className="name">{repo.name}</td>
												<td className="language">{repo.language}</td>
												<td className="star">
													<IconStar />
													{repo.stargazers_count || 0}
												</td>
											</tr>
										)
									})}
								</tbody>
							</table>
						</div>
					</>
				) : (
					<div className="not-found-repos">
						Que pena! <strong>{name}</strong> ainda não tem repositórios
					</div>
				)}
			</div>

			<DrawerRepo />
		</div>
	);
}

const mapStateToProps = state => {
	const { user, repo } = state;

	return {
		dataUserDetails: user.dataUserDetails,
		loading: user.loading,
		error: user.error,
		orderReposByStars: repo.orderReposByStars
	};
};

const mapDispatchToProps = dispatch => bindActionCreators({ ...UserActions, ...RepoActions, goBack }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);