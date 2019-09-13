import React from 'react';

import './loader.scss';

const Loader = ({ label, height }) => {
	return (
		<div className='loader' style={{ height: height }}>
			<div className="spinner">
				<span>{label || 'Carregando...'}</span>
			</div>
		</div>
	)
}

export default Loader;
