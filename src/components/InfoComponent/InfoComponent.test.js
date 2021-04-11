import React from 'react';
import renderer from 'react-test-renderer';
import InfoComponent from './InfoComponent';

it ("renders when there are is no gray InfoComponent", () => {
    const tree = renderer.create(
        <InfoComponent color='gray'/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it ("renders when there are is no green InfoComponent" , () => {
    const tree = renderer.create(
        <InfoComponent color='green'/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it ("renders when there are is no white InfoComponent", () => {
    const tree = renderer.create(
        <InfoComponent color='white'/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});