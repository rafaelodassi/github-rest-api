import React from 'react';

import './errorState.scss';

const ErrorState = ({ text }) => {
	return (
		<div className='errorState'>
			<img title={text || 'Erro - Tente novamente mais tarde'} alt={text || 'Erro - Tente novamente mais tarde'} src={`img/error_state.svg`} />
			<span>{text || 'Erro - Tente novamente mais tarde'}</span>
		</div>
	)
}

export default ErrorState;
