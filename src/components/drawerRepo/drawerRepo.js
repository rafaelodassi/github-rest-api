import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import moment from 'moment';
import 'moment/locale/pt-br';

import { RepoActions } from '../../store';

import { ReactComponent as IconClose } from '../../assets/icons/close.svg';
import { ReactComponent as IconOpenInNew } from '../../assets/icons/open_in_new.svg';

import './drawerRepo.scss';

moment.locale("pt-br");

const DrawerRepo = ({ drawerRepoDetails, toggleDrawerRepo }) => {
	const getRepoLength = () => {
		return Object.keys(drawerRepoDetails || {}).length;
	}

	useEffect(() => {
		if (getRepoLength(drawerRepoDetails)) {
			document.body.style.overflowY = "hidden";
			document.body.style.width = "calc(100% - 17px)";
		}
		else {
			document.body.style.overflowY = "";
			document.body.style.width = "";
		}
	}, [drawerRepoDetails]);

	const openExternalRepo = () => {
		window.open(drawerRepoDetails.html_url, '_blank');
	}

	return (
		<div className="drawerRepo" style={{ "display": getRepoLength(drawerRepoDetails) ? "block" : "none" }}>
			<div className="drawer-mask fadeOut" onClick={() => toggleDrawerRepo({})}></div>
			<div className="drawer-wrapper slideLeft">
				<div className="drawer-content">
					<div className="drawer-body">
						<div className="drawer-content-header">
							<span className="title">Mais informações</span>
							<IconClose onClick={() => toggleDrawerRepo({})} />
						</div>
						<div className="drawer-content-body">
							<div className="container-info">
								<span className="title">Nome</span>
								<span className="text">{drawerRepoDetails.name}</span>
							</div>
							{drawerRepoDetails.description &&
								<div className="container-info">
									<span className="title">Descrição</span>
									<span className="text">{drawerRepoDetails.description}</span>
								</div>
							}
							<div className="container-info">
								<span className="title">Linguagem</span>
								<span className="text">{drawerRepoDetails.language}</span>
							</div>
							<div className="container-info">
								<span className="title">Estrelas</span>
								<span className="text">{drawerRepoDetails.stargazers_count}</span>
							</div>
							<div className="container-info">
								<span className="title">Forks</span>
								<span className="text">{drawerRepoDetails.forks_count}</span>
							</div>
							{drawerRepoDetails.license &&
								<div className="container-info">
									<span className="title">Licensa</span>
									<span className="text">{drawerRepoDetails.license.name}</span>
								</div>
							}
							<div className="container-info">
								<span className="title">Problemas abertos</span>
								<span className="text">{drawerRepoDetails.open_issues_count}</span>
							</div>
							<div className="container-info">
								<span className="title">Criado em</span>
								<span className="text">{moment(drawerRepoDetails.created_at || "").format('llll')}</span>
							</div>
							<div className="container-info">
								<span className="title open" onClick={openExternalRepo}>Abrir repositório no GitHub<IconOpenInNew /></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	const { repo } = state;

	return {
		drawerRepoDetails: repo.drawerRepoDetails
	};
};

const mapDispatchToProps = dispatch => bindActionCreators(RepoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DrawerRepo);
