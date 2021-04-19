import React from 'react';
import './NarrowCta.css';
import CtaButton from '../CtaButton/CtaButton';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

var buttonStyle = {
  width: '240px',
  height: '60px',
  left: 'calc(50% - 240px/2 - 1px)',
  top: '256px',
  borderRadius: '5px',
  borderColor: '#000',
  fontSize: '18px',
  fontSamily: 'roboto',
  backgroundColor: '#F2F2F2',
};

export default function NarrowCta() {
  const { t } = useTranslation();

  return (
    <div className="NarrowCtaStyle">
      <div className="ctaContainer">
        <div className="content">
          <h4>{t('NarrowCtaComponent.title')}</h4>
          <p>{t('NarrowCtaComponent.title2')}</p>
        </div>

        <div className="buttons">
          <CtaButton />
          <Link to="/contact" style={buttonStyle}>
            <button style={buttonStyle}>
              {t('NarrowCtaComponent.contactUs')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
