import React from 'react';
import renderer from 'react-test-renderer';
import InfoComponent from './InfoComponent';
import { useTranslation } from 'react-i18next';

it('renders when there are is no gray InfoComponent', () => {
  const { t } = jest ? { t: (s) => s } : useTranslation();

  const tree = renderer
    .create(
      <InfoComponent
        theme={{
          class: 'gray-theme',
          img: 'img/info1.jpg',
        }}
        title={t(`InfoComponent.Info1.title`)}
        content={t(`InfoComponent.Info1.content`)}
        subTitle={t(`InfoComponent.Info1.subTitle`)}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// it ("renders when there are is no green InfoComponent" , () => {
//     const tree = renderer.create(
//         <InfoComponent color='green'/>
//     ).toJSON();
//     expect(tree).toMatchSnapshot();
// });

// it ("renders when there are is no white InfoComponent", () => {
//     const tree = renderer.create(
//         <InfoComponent color='white'/>
//     ).toJSON();
//     expect(tree).toMatchSnapshot();
// });
