import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import M from '../../dist/img/Media.png';

function Feature() {
  return (
    <div>
      <Container>
        <Row className="feature">
          <Col>
            <img
              className="feature-img"
              src={M}
              alt="an image from the media"
            />
          </Col>
          <Col className="feature-text">
            <h1 className="mb-4">A feature</h1>
            <p className="my-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard of the industry dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
            <Button variant="outline-success">Learn more</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Feature;
