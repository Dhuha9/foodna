/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class MealCard extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.img} className="card-img" alt="food" />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <span className="card-text">{this.props.organization}</span>
          <Button className="Button">Get This Meal</Button>
        </div>
      </div>
    );
  }
}
