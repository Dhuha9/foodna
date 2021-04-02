import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import contactus from '../../contactus.png';

export default function ContactUs() {
  return (
    <Row>
      <Col>
        <ContactForm />
      </Col>
      <Col>
        <img src={contactus} alt="" className="img-fluid" />
      </Col>
    </Row>
  );
}
