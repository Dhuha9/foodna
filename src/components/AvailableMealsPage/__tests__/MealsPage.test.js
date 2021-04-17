import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MealsPage from '../MealsPage';
import { withTranslation } from 'react-i18next';

it('renders apply now correctly', () => {
  const TranslatedMealsPage = withTranslation()(MealsPage);

  const tree = renderer.create(<TranslatedMealsPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
