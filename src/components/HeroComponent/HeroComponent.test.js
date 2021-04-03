  
import React from 'react';
import renderer from 'react-test-renderer';

import HeroComponent from './HeroComponent';

it ("renders when there are is no HeroComponent", () => {
    const tree = renderer.create(
        <HeroComponent />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});