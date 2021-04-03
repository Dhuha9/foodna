import React from 'react';
import PropTypes from 'prop-types';
import '../../meals.css'

export default function MealCard({img, title, organization}) {
  return (
    <div className="card">
      <div className="image-section">
        <img src={img} className="card-img" alt="food" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <span className="card-text">{organization}</span>
        <button type="button" className="button">Get This Meal</button>      </div>
    </div>
  );
}
MealCard.propTypes = {
  img: PropTypes.any,
  title: PropTypes.any,
  organization: PropTypes.any,
};
