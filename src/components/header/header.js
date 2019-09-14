import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import logo from '../../assets/img/logo.png';
import { ReactComponent as IconSearch } from '../../assets/icons/search.svg';
import { ReactComponent as IconClose } from '../../assets/icons/close.svg';

import { UserActions } from '../../store';

import './header.scss';

const Header = ({ apiSearchUsers }) => {
	const [valueSearch, setValueSearch] = useState("");

	// useEffect(() => {
	// 	if (valueSearch.length >= 3)
	// 		apiSearchUsers({ q: valueSearch });
	// 	else if (valueSearch.length === 0)
	// 		apiSearchUsers();
	// }, [valueSearch]);

	const changeValueSearch = (e) => {
		const value = e.target.value || "";
		setValueSearch(value);
	}

	const clearValueSearch = () => {
		setValueSearch("");
	}

	return (
		<header className="header">
			<img title="eSapiens" alt="eSapiens" src={logo} />
			<div className="container-search-input">
				<input type="text" placeholder="Pesquisar usuários do GitHub" autoFocus value={valueSearch} onChange={changeValueSearch} />

				<IconSearch className="icon-search" />

				{valueSearch &&
					<IconClose className="icon-close" onClick={clearValueSearch} />
				}
			</div>
			aas
		</header>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);