// Use those lines when importing this component in app.js

// <InfoComponent color={'gray'}/>
// <InfoComponent color={'green'}/>
// <InfoComponent color={'white'}/>

import React from 'react';
import InfoComponent from '../../components/InfoComponent/InfoComponent';
import { useTranslation } from 'react-i18next';

const themes = [
  {
    class: 'gray-theme',
    img: 'img/info1.jpg',
  },
  {
    class: 'green-theme',
    img: 'img/info2.jpg',
  },
  {
    class: 'white-theme',
    img: 'img/info3.jpg',
  },
];

export default function InfoComponents() {
  const { t } = useTranslation();

  return (
    <div>
      {themes.map((theme, index) => (
        <InfoComponent
          theme={theme}
          key={index}
          title={t(`InfoComponent.Info${index}.title`)}
          content={t(`InfoComponent.Info${index}.content`)}
          subTitle={t(`InfoComponent.Info${index}.subTitle`)}
        />
      ))}
    </div>
  );
}
