import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Sponsors.scss';
import Sponsor from './Sponsor';
import data from './data.json';
import recodedLogo from '../../dist/img/ReCodedLogo.jpg';

const imgMap = { recodedLogo: recodedLogo };

function Sponsors() {
  return (
    <>
      <h1 className="heading text-center mb-4">Sponsors</h1>
      <p className="subheading  text-center mb-4">
        This project is generously sponsored by:
      </p>
      <Container>
        <Row className="justify-content-center" noGutters={true}>
          {data.map((sponsorsData, index) => (
            <Sponsor
              {...sponsorsData}
              key={index}
              imageLogo={imgMap[sponsorsData.imageLogo]}
            />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Sponsors;
