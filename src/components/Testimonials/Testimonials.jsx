import React from 'react';
import Testimonial from './Testimonial';
import data from './data.json';
import { Carousel } from 'react-bootstrap';
import TA from '../../dist/img/TA.jpg';
import TA1 from '../../dist/img/TA1.jpg';

const imgMap = { TA: TA, TA1: TA1 };

function Testimonials() {
  return (
    <div className="w-50 m-auto">
      <Carousel>
        {data.map((testimonialsData, index) => (
          <Carousel.Item key={index} className="mt-3">
            <Testimonial
              {...testimonialsData}
              personImage={imgMap[testimonialsData.personImage]}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Testimonials;
