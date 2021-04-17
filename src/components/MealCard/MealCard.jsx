import React from 'react';
import PropTypes from 'prop-types';
import '../meals.css';
import { useTranslation } from 'react-i18next';

export default function MealCard({ img, title, organization }) {
  const { t } = useTranslation();

  return (
    <div className="card">
      <div className="image-section">
        <img src={img} className="card-img" alt="food" />
      </div>
      <div className="card-body">
        <h5 className="card-title ">{title}</h5>
        <span className="card-text">{organization}</span>
      </div>
      <button type="button" className="button w-100">
        {t('AvailableMealsComponent.button')}
      </button>
    </div>
  );
}
MealCard.propTypes = {
  img: PropTypes.any,
  title: PropTypes.any,
  organization: PropTypes.any,
};
