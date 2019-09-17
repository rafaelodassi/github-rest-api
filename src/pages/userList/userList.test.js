import React from 'react';
import renderer from 'react-test-renderer';
import UserList from './userList';

it('Renderizando o UserList corretamente', () => {
	const tree = renderer
		.create(<UserList />)
		.toJSON();

	expect(tree).toMatchSnapshot();
});