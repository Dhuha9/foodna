import React from 'react';
import renderer from 'react-test-renderer';
import ClaimMeal from './ClaimMeal';

it ("renders when there is no Claim Meal component", () => {
    const tree = renderer.create(
        <ClaimMeal />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});