import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { UserActions } from '../../store';

import ItemList from '../../components/itemList/itemList';

import logo from '../../assets/img/logo.png';
import { ReactComponent as IconClose } from '../../assets/icons/close.svg';

import './userList.scss';

const UserList = ({ apiSearchUsers, resetDataUserList }) => {
	const [valueSearch, setValueSearch] = useState("");
	let inputSearch = null;

	useEffect(() => {
		if (valueSearch.length >= 3)
			apiSearchUsers({ q: valueSearch });
		else if (valueSearch.length === 0)
			apiSearchUsers();
	}, [valueSearch]);

	const changeValueSearch = (e) => {
		const value = e.target.value || "";
		setValueSearch(value);
	}

	const clearValueSearch = () => {
		setValueSearch("");

		if (inputSearch)
			inputSearch.focus();
	}

	const setInputSearchRef = element => {
		inputSearch = element;
	};

	return (
		<div className="userList">
			<div className="container-header-section">
				<img title="eSapiens" alt="eSapiens" src={logo} />
				<span className="title">Listagem de usuários</span>
				<span className="sub-title">Faça uma busca mais específica no campo abaixo (digite no mínimo 3 caracteres)</span>

				<div className="container-search-input">
					<input type="text" placeholder="Buscar usuários do GitHub..." autoFocus value={valueSearch} onChange={changeValueSearch} ref={setInputSearchRef} />

					{valueSearch &&
						<IconClose onClick={clearValueSearch} />
					}
				</div>
			</div>
			<ItemList />
		</div>
	);
}

const mapDispatchToProps = dispatch => bindActionCreators({ ...UserActions, push }, dispatch);

export default connect(null, mapDispatchToProps)(UserList);