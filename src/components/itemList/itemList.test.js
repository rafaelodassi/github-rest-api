import React from 'react';
import renderer from 'react-test-renderer';
import ItemList from './itemList';

it('Renderizando o ItemList corretamente', () => {
	const tree = renderer
		.create(<ItemList />)
		.toJSON();

	expect(tree).toMatchSnapshot();
});