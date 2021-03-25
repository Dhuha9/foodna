import * as React from 'react';
import * as renderer from 'react-test-renderer';
import getMealForm from '../getMealForm';
it('renders apply now correctly', () => {
  const tree = renderer.create(<getMealForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
