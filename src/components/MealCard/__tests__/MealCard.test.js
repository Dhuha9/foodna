import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MealCard from '../MealCard';
it('renders apply now correctly', () => {
  const tree = renderer.create(<MealCard />).toJSON();
  expect(tree).toMatchSnapshot();
});