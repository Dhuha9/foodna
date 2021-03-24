/* eslint react/prop-types: 0 */
// eslint-disable-next-line react/jsx-no-bind
import React, { Component } from 'react';
import '../../meals.css'
import { Button } from 'react-bootstrap';


export default class MealCard extends Component {
  render() {
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
}
