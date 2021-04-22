import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Sponsors.scss';
import Sponsor from './Sponsor';
import { useTranslation } from 'react-i18next';
import sponsor1 from '../../dist/img/sponsor1.png';
import sponsor2 from '../../dist/img/sponsor2.png';
import sponsor3 from '../../dist/img/sponsor3.png';
import sponsor4 from '../../dist/img/sponsor4.png';
import sponsor5 from '../../dist/img/sponsor5.png';

const data = [
  {
    name: 'Re:coded',
    websiteUrl: 'https://www.re-coded.com/',
    imagePath: sponsor1,
  },
  {
    name: 'Re:coded',
    websiteUrl: 'https://www.re-coded.com/',
    imagePath: sponsor2,
  },
  {
    name: 'Re:coded',
    websiteUrl: 'https://www.re-coded.com/',
    imagePath: sponsor3,
  },
  {
    name: 'Re:coded',
    websiteUrl: 'https://www.re-coded.com/',
    imagePath: sponsor4,
  },
  {
    name: 'Re:coded',
    websiteUrl: 'https://www.re-coded.com/',
    imagePath: sponsor5,
  },
];
function Sponsors() {
  const { t } = useTranslation();

  return (
    <div className="pb-5 pt-5 bg-light">
      <h1 className="heading text-center mb-4">
        {t('SponsorsComponent.headline')}
      </h1>
      <p className="subheading  text-center mb-4 px-4">
        {t('SponsorsComponent.paragraph')}
      </p>
      <Container>
        <Row className="justify-content-center" noGutters={true}>
          {data.map((sponsorsData, index) => (
            <Sponsor
              {...sponsorsData}
              key={index}
              imageLogo={sponsorsData.imagePath}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Sponsors;
