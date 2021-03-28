import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import foodnaLogo from '../../foodnaLogo.png';
import { Link } from 'react-router-dom';

const footerItems = [
  {
    title: 'Products',
    items: [
      { title: 'feature', path: '/' },
      { title: 'feature', path: '/' },
      { title: 'feature', path: '/' },
    ],
  },
  {
    title: 'Products',
    items: [
      { title: 'feature', path: '/' },
      { title: 'feature', path: '/' },
      { title: 'feature', path: '/' },
    ],
  },
  {
    title: 'Products',
    items: [
      { title: 'feature', path: '/' },
      { title: 'feature', path: '/' },
      { title: 'feature', path: '/' },
    ],
  },
];

export default function Footer() {
  return (
    <div>
      <Container className="p-4">
        <Row>
          <Col>
            <Link to="/" className="d-block text-dark">
              <img alt="" src={foodnaLogo} width="150" height="50" />
            </Link>
            <div className="mt-2">
              <i>&#169;</i> 2021 - present
            </div>
            <Link to="/" className="d-block text-dark">
              privacy and terms
            </Link>
          </Col>
          {footerItems.map((column, indx) => (
            <Col key={indx + 'col'}>
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
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
