import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Sponsors.scss';
import Sponsor from './Sponsor';
import recodedLogo from '../../dist/img/ReCodedLogos.png';

function Sponsors() {
  const sponsors = [
    {
      name: 'Re:coded',
      websiteUrl: 'https://www.re-coded.com/',
      imageLogo: recodedLogo,
    },
    {
      name: 'Re:coded',
      websiteUrl: 'https://www.re-coded.com/',
      imageLogo: recodedLogo,
    },
    {
      name: 'Re:coded',
      websiteUrl: 'https://www.re-coded.com/',
      imageLogo: recodedLogo,
    },
    {
      name: 'Re:coded',
      websiteUrl: 'https://www.re-coded.com/',
      imageLogo: recodedLogo,
    },
    {
      name: 'Re:coded',
      websiteUrl: 'https://www.re-coded.com/',
      imageLogo: recodedLogo,
    },
  ];
  return (
    <div>
      <h1 className="mb-4">Sponsors</h1>
      <p className="mb-4">This project is generously sponsored by:</p>
      <Container>
        <Row className="justify-content-center" noGutters={true}>
          {sponsors.map((e, index) => (
            <Sponsor
              key={index}
              websiteUrl={e.websiteUrl}
              imageLogo={e.imageLogo}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Sponsors;
