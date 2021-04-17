import React from 'react';
import Testimonial from './Testimonial';
import data from './data.json';
import { Carousel } from 'react-bootstrap';
import TA from '../../dist/img/TA.jpg';
import TA1 from '../../dist/img/TA1.jpg';

const imgMap = { TA: TA, TA1: TA1 };

function Testimonials({ bgColor }) {
  return (
    <Carousel className={bgColor}>
      {data.map((testimonialsData, index) => (
        <Carousel.Item key={index} className="mt-3">
          <Testimonial
            {...testimonialsData}
            personImage={imgMap[testimonialsData.personImage]}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Testimonials;
