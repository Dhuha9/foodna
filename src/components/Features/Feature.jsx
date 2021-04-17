import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Feature({ index, image, title, description }) {
  console.log(index);
  return (
    <>
      <Row className="no-gutters">
        <Col
          xs={{ span: 6, order: index % 2 === 0 ? 1 : 3 }}
          md={6}
          className="d-none d-sm-block vh-100"
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
        ></Col>
        <Col
          xs={{ span: 5, order: index % 2 === 0 ? 3 : 1 }}
          md={6}
          className="text-left justify-items-center align-items-center vh-100 px-5  w-50"
        >
          <div className="d-flex justify-content-center align-items-center py-5 px-5 vh-100 ">
            <div className="py-5 px-5">
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
