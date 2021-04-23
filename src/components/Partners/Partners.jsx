import React, { Component } from 'react';
import Partner from '../Partner/Partner';
import './partners.css';
import { Container, Row } from 'react-bootstrap';

import partners1 from '../../dist/img/sponsor1.png';
import partners2 from '../../dist/img/sponsor2.png';
import partners3 from '../../dist/img/sponsor3.png';
import partners4 from '../../dist/img/sponsor4.png';
import partners5 from '../../dist/img/sponsor5.png';

const partnerData = [
  { img: partners1 },
  { img: partners2 },
  { img: partners3 },
  { img: partners4 },
  { img: partners5 },
];
export default class Partners extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className="partners-section pb-5 ">
        <p className="partners-title">{t('PartnersComponent')}</p>
        <Container>
          <Row className="justify-content-center">
            {partnerData.map((partners, index) => {
              return <Partner key={index} img={partners.img} />;
            })}
          </Row>
        </Container>
      </div>
    );
  }
}
