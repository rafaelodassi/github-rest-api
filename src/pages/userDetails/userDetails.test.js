import React from 'react';
import renderer from 'react-test-renderer';
import UserDetails from './userDetails';

it('Renderizando o UserDetails corretamente', () => {
	const tree = renderer
		.create(<UserDetails />)
		.toJSON();

	expect(tree).toMatchSnapshot();
});