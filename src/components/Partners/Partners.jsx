import React, { Component } from 'react';
import Partner from '../Partner/Partner';
import partnerData from '../../partner.json';
import './partners.css';
export default class Partners extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className="partners-section pb-5 ">
        <p className="partners-title">{t('PartnersComponent')}</p>
        <div className="partners-grid">
          {partnerData.map((partners, index) => {
            return <Partner key={index} img={partners.img} />;
          })}
        </div>
      </div>
    );
  }
}
