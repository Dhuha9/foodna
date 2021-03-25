import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Meals from '../Meals';
it('renders apply now correctly', () => {
  const tree = renderer.create(<Meals />).toJSON();
  expect(tree).toMatchSnapshot();
});
