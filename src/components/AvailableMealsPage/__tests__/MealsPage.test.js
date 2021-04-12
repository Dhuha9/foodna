import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MealsPage from '../MealsPage';
it('renders apply now correctly', () => {
  const tree = renderer.create(<MealsPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
