import React from 'react';
import renderer from 'react-test-renderer';
import Features from './Features';

it('Features snapshot', () => {
  const tree = renderer.create(<Features />).toJSON();
  expect(tree).toMatchSnapshot();
});
