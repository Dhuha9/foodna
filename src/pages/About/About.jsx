import React from 'react';
import Hero from '../../components/HeroComponent/HeroComponent';
import Testimonials from '../../components/Testimonials/Testimonials';
import Partners from '../../components/Partners/Partners';
import InfoComponents from '../../components/InfoComponent/InfoComponents';
import { withTranslation } from 'react-i18next';

export default function About() {
  const TranslatedPartners = withTranslation()(Partners);

  return (
    <div>
      <Hero />
      <TranslatedPartners />
      <InfoComponents />
      <Testimonials bgColor={'bg-light'} />
    </div>
  );
}
