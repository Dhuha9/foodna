import React from 'react';
import renderer from 'react-test-renderer';
import CtaButton from './CtaButton';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders when there is no CtaButton', () => {
  const tree = renderer
    .create(
      <Router>
        <CtaButton />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
