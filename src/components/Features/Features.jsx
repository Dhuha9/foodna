import React from 'react';
import { Container } from 'react-bootstrap';
import Feature from './Feature';
import './Features.scss';

import M1 from '../../dist/img/Media1.png';
import M2 from '../../dist/img/Media2.png';

import data from './data.json';

const imgMap = { M1: M1, M2: M2 };
function Features() {
  return (
    <Container>
      {data.map((e, index) => (
        <Feature
          key={index}
          index={index}
          image={imgMap[e.image]}
          title={e.title}
          description={e.description}
        />
      ))}
    </Container>
  );
}

export default Features;
