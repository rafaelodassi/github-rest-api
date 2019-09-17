import React from 'react';
import renderer from 'react-test-renderer';
import Loader from './loader';

it('Renderizando o Loader corretamente', () => {
	const tree = renderer
		.create(<Loader />)
		.toJSON();

	expect(tree).toMatchSnapshot();
});