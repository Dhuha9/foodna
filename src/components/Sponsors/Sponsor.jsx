import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Sponsor({ websiteUrl, imageLogo }) {
  return (
    <Col>
      <a href={websiteUrl}>
        <img className="sponsor-image" src={imageLogo} alt="sponsor"></img>
      </a>
    </Col>
  );
}

export default Sponsor;
Sponsor.propTypes = {
  websiteUrl: PropTypes.string,
  imageLogo: PropTypes.string,
};
