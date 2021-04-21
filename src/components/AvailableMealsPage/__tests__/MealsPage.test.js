import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MealsPage from '../MealsPage';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

it('renders apply now correctly', () => {
  const tree = renderer.create(<MealsPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
