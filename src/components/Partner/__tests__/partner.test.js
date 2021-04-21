import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Partner from '../Partner';

it('renders apply now correctly', () => {
  const tree = renderer.create(<Partner />).toJSON();
  expect(tree).toMatchSnapshot();
});
