import React from 'react';
import renderer from 'react-test-renderer';
import Sponsors from './Sponsors';

it('Sponsors snapshot', () => {
  const tree = renderer.create(<Sponsors />).toJSON();
  expect(tree).toMatchSnapshot();
});
