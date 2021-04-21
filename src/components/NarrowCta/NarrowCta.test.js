import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NarrowCta from './NarrowCta';

it('renders when there is no NarrowCta', () => {
  const tree = renderer
    .create(
      <Router>
        <NarrowCta />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
