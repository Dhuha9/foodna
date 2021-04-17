import React from 'react';
// import { Container } from 'react-bootstrap';
import Feature from './Feature';
import './Features.scss';

import M1 from '../../dist/img/Media1.png';
import M2 from '../../dist/img/Media2.png';
import { useTranslation } from 'react-i18next';

import data from './data.json';

const imgMap = { M1: M1, M2: M2 };
function Features() {
  const { t } = useTranslation();

  return (
    <div className="">
      {data.map((e, index) => (
        <Feature
          key={index}
          index={index}
          image={imgMap[e.image]}
          title={t(`FeatureComponent.Feature${index}.title`)}
          description={t(`FeatureComponent.Feature${index}.content`)}
        />
      ))}
    </div>
  );
}

export default Features;
