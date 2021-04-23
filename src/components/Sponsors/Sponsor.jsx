import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Sponsor({ websiteUrl, imageLogo, name }) {
  return (
    <Col className="p-2">
      <a href={websiteUrl}>
        <img className="sponsor-image" src={imageLogo} alt={name}></img>
      </a>
    </Col>
  );
}

export default Sponsor;
Sponsor.propTypes = {
  websiteUrl: PropTypes.string,
  imageLogo: PropTypes.string,
  name: PropTypes.string,
};
