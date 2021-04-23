import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

export default class Partner extends Component {
  render() {
    return (
      <Col>
        <img className="partner-image" src={this.props.img} alt="sponsor" />
      </Col>
    );
  }
}
