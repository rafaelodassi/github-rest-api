import React from 'react';

import { ReactComponent as IconClose } from '../../assets/icons/close.svg';

import './drawer.scss';

const Drawer = ({ label, height }) => {
	return (
		<div className="drawer">
			<div className="drawer-mask"></div>
			<div className="drawer-wrapper">
				<div className="drawer-content">
					<div className="drawer-body">
						<div className="drawer-content-header">
							<span className="title">Mais informações</span>
							<IconClose />
						</div>
						<div className="drawer-content-body">
							<div className="container-info">
								<span className="title">Descrição Tipo Anotação</span>
								<span className="text">PESSOA EXPOSTA NA MÍDIA</span>
							</div>
							<div className="container-info">
								<span className="title">Descrição Origem Info</span>
								<span className="text">Interna</span>
							</div>
							<div className="container-info">
								<span className="title">Data Hora Anotação</span>
								<span className="text">02h 19m 53s 26/09/2018</span>
							</div>
							<div className="container-info">
								<span className="title">Data Hora Ocorrência</span>
								<span className="text">02h 19m 53s 26/09/2018</span>
							</div>
							<div className="container-info">
								<span className="title">PAC</span>
								<span className="text">37</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Drawer;
