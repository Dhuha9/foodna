import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './Features.scss';

function Feature({ index, image, title, description }) {
  const { t } = useTranslation();
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
          xs={{ order: index % 2 === 0 ? 3 : 1 }}
          md={6}
          className="text-left justify-items-center align-items-center px-3 px-xl-5 feature-width feature_height  d-flex justify-content-center align-items-center "
        >
          <div className=" px-3 px-xl-5">
            <div className="py-5 px-3 px-lg-5 feature-text  ">
              <h1 className="my-4">{title}</h1>
              <p className="my-4">{description}</p>
              <Button className="mb-4" variant="outline-success" href="/about">
                {t(`FeatureComponent.ButtonTitle`)}
              </Button>
            </div>
            <hr className="d-block d-md-none m-0" />
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
