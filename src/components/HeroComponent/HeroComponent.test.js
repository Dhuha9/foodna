import React from 'react';
import renderer from 'react-test-renderer';
import HeroComponent from './HeroComponent';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders when there are is no HeroComponent', () => {
  const tree = renderer
    .create(
      <Router>
        <HeroComponent />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
