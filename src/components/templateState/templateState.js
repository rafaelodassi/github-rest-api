import React from 'react';

import errorStateImg from '../../assets/img/error_state.svg';

import './templateState.scss';

const TemplateState = ({ img, text, type }) => {
	const imgState = (type === "error") ? (img || errorStateImg) : img;
	const textState = (type === "error") ? (text || 'Ops! - Algo de ruim aconteceu, volte mais tarde :(') : text;

	return (
		<div className='templateState'>
			<div className="container-state">
				<img title={textState} alt={textState} src={imgState} />
				<span className="title">{textState}</span>
			</div>
		</div>
	)
}

export default TemplateState;
