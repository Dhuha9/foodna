import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MealCarousel from '../MealCarousel';
it('renders apply now correctly', () => {
  const tree = renderer.create(<MealCarousel />).toJSON();
  expect(tree).toMatchSnapshot();
});
