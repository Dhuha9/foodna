import React from 'react';
import '../../meals.css';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function MealCard() {
  return (
    <div className="card">
      <div className="image-section">
        <img src={this.props.img} className="card-img" alt="food" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{this.props.title}</h5>
        <span className="card-text">{this.props.organization}</span>
        <Button className="Button">Get This Meal</Button>
      </div>
    </div>
  );
}

MealCard.PropTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
};
