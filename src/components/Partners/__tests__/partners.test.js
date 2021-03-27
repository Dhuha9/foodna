import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Partners from '../Partners';
it('renders apply now correctly', () => {
  const tree = renderer.create(<Partners />).toJSON();
  expect(tree).toMatchSnapshot();
});
