import React from 'react';
import Hero from '../../components/HeroComponent/HeroComponent';
import InfoComponent from '../../components/InfoComponent/InfoComponent';
import Testimonials from '../../components/Testimonials/Testimonials';
import Partners from '../../components/Partners/Partners';

export default function About() {
  return (
    <div>
      <Hero />
      <Partners />
      <InfoComponent color={'gray'} />
      <InfoComponent color={'green'} />
      <InfoComponent color={'white'} />
      <Testimonials bgColor={'bg-light'} />
    </div>
  );
}
