import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const buttonStyle = {
  width: '240px',
  height: '60px',
  left: 'calc(50% - 240px/2 - 1px)',
  top: '256px',
  backgroundColor: '#FFB701',
  borderRadius: '5px',
  border: 'none',
  color: '#000',
  fontSize: '18px',
  fontSamily: 'roboto',
};

export default function CtaButton() {
  const { t } = useTranslation();

  return (
    <Link to="/donate">
      <button className="btn btn-default" style={buttonStyle}>
        {t('CtaButton.title')}
      </button>
    </Link>
  );
}
