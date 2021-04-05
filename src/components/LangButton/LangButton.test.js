import React from 'react';
import renderer from 'react-test-renderer';

import LangButton from './LangButton';

it ("renders when there is no LangButton", () => {
    const tree = renderer.create(
        <LangButton />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});