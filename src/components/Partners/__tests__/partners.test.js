import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Partners from '../Partners';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

it('renders apply now correctly', () => {
  const tree = renderer.create(<Partners />).toJSON();
  expect(tree).toMatchSnapshot();
});
