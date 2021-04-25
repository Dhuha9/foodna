import React from 'react';
import Testimonial from './Testimonial';
import { Carousel } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


function Testimonials({ bgColor }) {
  const { t } = useTranslation();

  return (
    <Carousel className={bgColor}>
      <Carousel.Item>
        <Testimonial
          text={t('TestimonialComponent.t1.quote')}
          name={t('TestimonialComponent.t1.personName')}
          profession={t('TestimonialComponent.t1.profession')}
          personImage="img/Abdulazeez.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Testimonial
          text={t('TestimonialComponent.t2.quote')}
          name={t('TestimonialComponent.t2.personName')}
          profession={t('TestimonialComponent.t2.profession')}
          personImage="img/Tabarek.png"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Testimonials;
