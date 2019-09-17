import React from 'react';
import renderer from 'react-test-renderer';
import TemplateState from './templateState';

it('Renderizando o TemplateState corretamente', () => {
	const tree = renderer
		.create(<TemplateState />)
		.toJSON();

	expect(tree).toMatchSnapshot();
});