import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { UserActions } from '../../store';

import TemplateState from '../../components/templateState/templateState';
import Loader from '../../components/loader/loader';

import notFoundState from '../../assets/img/not_found_state.svg';

import './itemList.scss';

const ItemList = ({ push, resetDataUserList, dataUserList, loading, error }) => {
	useEffect(() => {
		return () => resetDataUserList();
	}, []);

	const goToUserDetails = (userLogin) => {
		push(`/user/${userLogin}`);
	}

	if (error)
		return <TemplateState text={error} type="error" />;

	if (loading || !dataUserList)
		return <Loader />;

	if (dataUserList.length === 0)
		return <TemplateState img={notFoundState} text={"Não encontramos ninguém por aqui com essa busca"} />;

	return (
		<div className="itemList">
			{dataUserList.map((user, index) => {
				return (
					<div key={index} className="card-container">
						<div className="card slideUp" onClick={() => goToUserDetails(user.login)}>
							<div className="container-avatar">
								<div className="avatar" style={{ backgroundImage: `url(${user.avatar_url})` }}></div>
							</div>
							<div className="container-info">
								<span>{user.login}</span>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	);
}

const mapStateToProps = state => {
	const { user } = state;

	return {
		dataUserList: user.dataUserList,
		loading: user.loading,
		error: user.error
	};
};

const mapDispatchToProps = dispatch => bindActionCreators({ ...UserActions, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);