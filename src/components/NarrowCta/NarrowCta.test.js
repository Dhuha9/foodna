import React from 'react';
import renderer from 'react-test-renderer';

import NarrowCta from './NarrowCta';

it ("renders when there is no NarrowCta", () => {
    const tree = renderer.create(
        <NarrowCta />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});