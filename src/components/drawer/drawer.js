import React from 'react';

import './drawer.scss';

const Drawer = ({ label, height }) => {
	return (
		<div class="drawer">
			<div class="drawer-mask" onclick="closeDrawer()"></div>
			<div class="drawer-wrapper">
				<div class="drawer-content">
					<div class="drawer-body">
						<div class="drawer-content-header">
							<span class="title">Mais informações</span>
							<i class="material-icons" onclick="closeDrawer()">close</i>
						</div>
						<div class="drawer-content-body">
							<div class="container-info">
								<span class="title">Descrição Tipo Anotação</span>
								<span class="text">PESSOA EXPOSTA NA MÍDIA</span>
							</div>
							<div class="container-info">
								<span class="title">Descrição Origem Info</span>
								<span class="text">Interna</span>
							</div>
							<div class="container-info">
								<span class="title">Data Hora Anotação</span>
								<span class="text">02h 19m 53s 26/09/2018</span>
							</div>
							<div class="container-info">
								<span class="title">Data Hora Ocorrência</span>
								<span class="text">02h 19m 53s 26/09/2018</span>
							</div>
							<div class="container-info">
								<span class="title">PAC</span>
								<span class="text">37</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Drawer;
