import React from 'react';
import renderer from 'react-test-renderer';
import Login from './Login';
import Logout from './Logout';

it ("renders when there is no Login button", () => {
    const tree = renderer.create(
        <Login />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it ("renders when there is no Logout button", () => {
    const tree = renderer.create(
        <Logout />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});