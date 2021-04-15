import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Feature({ index, image, title, description }) {
  return (
    <>
      <Row className="no-gutters feature-img">
        <Col
          xs={{ span: 6, order: index % 2 === 0 ? 1 : 3 }}
          className="d-none d-sm-block side-div h-vh"
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
        ></Col>
        <Col xs={{ span: 1, order: 2 }} className="d-none d-sm-block"></Col>
        <Col
          xs={{ span: 5, order: index % 2 === 0 ? 3 : 1 }}
          className="feature-text"
        >
          <div className="py-5">
            <div className="py-5">
              <h1 className="pt-4 mb-4">{title}</h1>
              <p className="my-4">{description}</p>
              <Button className="mb-4" variant="outline-success">
                Learn more
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Feature;

Feature.propTypes = {
  index: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
