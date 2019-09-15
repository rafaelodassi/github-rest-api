import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { UserActions } from '../../store';

import TemplateState from '../../components/templateState/templateState';
import Loader from '../../components/loader/loader';

import notFoundState from '../../assets/img/not_found_state.svg';

import './userList.scss';

const UserList = ({ apiSearchUsers, resetDataUserList, push, dataUserList, loading, error }) => {
	useEffect(() => {
		apiSearchUsers();

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
		return <TemplateState img={notFoundState} text={"Não encontramos ninguém por aqui com o nome xxx"} />;

	return (
		<div className="userList">
			<div className="container-user-list">
				{dataUserList.map((user, index) => {
					return (
						<div key={index} className="card-container" onClick={() => goToUserDetails(user.login)}>
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
		dataUserList: user.dataUserList,
		loading: user.loading,
		error: user.error
	};
};

const mapDispatchToProps = dispatch => bindActionCreators({ ...UserActions, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserList);