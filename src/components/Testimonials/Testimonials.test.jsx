import React from 'react';
import renderer from 'react-test-renderer';
import Testimonials from './Testimonials';

it('Testimonials snapshot', () => {
  const tree = renderer.create(<Testimonials />).toJSON();
  expect(tree).toMatchSnapshot();
});
