import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import foodnaLogo from '../../foodnaLogo.png';
import { Link } from 'react-router-dom';

const footerItems = [
  {
    title: 'Feature',
    items: [
      { title: 'Donate Food', path: '/donate' },
      { title: 'Available Meals', path: '/meals' },
    ],
  },
  {
    title: 'Connect',
    items: [
      { title: 'About Us', path: '/about' },
      { title: 'Contact Us', path: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <div>
      <Container className="p-4 w-75 mx-auto">
        <Row className="">
          <Col md={5} className="py-md-4">
            <div className="d-flex justify-content-center">
              <Link to="/" className="text-dark">
                <img alt="" src={foodnaLogo} width="150" height="50" />
              </Link>
              <div className="align-self-end">&#169; 2021</div>
            </div>
            <Link to="/" className="d-block text-dark mt-2 text-center">
              Privacy and Terms
            </Link>
          </Col>
          <Col md={1} lg={2}></Col>
          {footerItems.map((column, indx) => (
            <Col key={indx + 'col'} className="py-4">
              <div className="d-inline-block mx-auto text-left ">
                <div className="font-weight-bold mb-2">{column.title}</div>
                {column.items.map((rowItem, indx) => (
                  <Link
                    to={rowItem.path}
                    key={indx + 'row'}
                    className="d-block text-dark"
                  >
                    {rowItem.title}
                  </Link>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
