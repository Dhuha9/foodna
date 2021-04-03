  
import React from 'react';
import renderer from 'react-test-renderer';

import CtaButton from './CtaButton';

it ("renders when there are is no CtaButton", () => {
    const tree = renderer.create(
        <CtaButton />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});