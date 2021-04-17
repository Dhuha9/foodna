import React from 'react';
import Hero from '../../components/HeroComponent/HeroComponent';
import Sponsors from '../../components/Sponsors/Sponsors';
import Testimonials from '../../components/Testimonials/Testimonials';
import NarrowCta from '../../components/NarrowCta/NarrowCta';
import Features from '../../components/Features/Features';
import MealCarousel from '../../components/MealCarouselComponent/MealCarousel';
import { withTranslation } from 'react-i18next';

export default function Main() {
  const TranslatedMealCarousel = withTranslation()(MealCarousel);

  return (
    <div>
      <Hero />
      <Sponsors />
      <Features />
      <TranslatedMealCarousel />
      <Testimonials bgColor={'bg-white'} />
      <NarrowCta />
    </div>
  );
}
