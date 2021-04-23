import React from 'react';
import CtaButton from '../CtaButton/CtaButton';
import './HeroComponent.css';
import { useTranslation } from 'react-i18next';

export default function HeroComponent() {
  const { t } = useTranslation();

  return (
    <div className="HeroComponentStyle">
      <div className="bg">
        <h1 className="m-2 d-block">{t('HeroComponent.headline')}</h1>
        <p>{t('HeroComponent.paragraph')}</p>
        <CtaButton />
        <div className="side-crop">
          <img className="hero-pic" src="img/apple.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
