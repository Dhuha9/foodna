import React from 'react';
import renderer from 'react-test-renderer';
import Features from './Features';
// import { useTranslation } from 'react-i18next';

it('Features snapshot', () => {
  // const { t } = jest ? { t: (s) => s } : useTranslation();

  const tree = renderer.create(<Features />).toJSON();
  expect(tree).toMatchSnapshot();
});
