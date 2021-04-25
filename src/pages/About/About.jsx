import React from 'react';
import Testimonials from '../../components/Testimonials/Testimonials';
import Partners from '../../components/Partners/Partners';
import InfoComponents from '../../components/InfoComponent/InfoComponents';
import { withTranslation } from 'react-i18next';

export default function About() {
  const TranslatedPartners = withTranslation()(Partners);

  return (
    <div>
      <InfoComponents />
      <TranslatedPartners />
      <Testimonials bgColor={'bg-light'} />
    </div>
  );
}
