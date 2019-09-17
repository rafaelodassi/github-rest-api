import React from 'react';
import renderer from 'react-test-renderer';
import DrawerRepo from './drawerRepo';

it('Renderizando o DrawerRepo corretamente', () => {
	const tree = renderer
		.create(<DrawerRepo />)
		.toJSON();

	expect(tree).toMatchSnapshot();
});