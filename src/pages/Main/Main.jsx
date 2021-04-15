import React from 'react';
import Hero from '../../components/HeroComponent/HeroComponent';
import Sponsors from '../../components/Sponsors/Sponsors';
import Testimonials from '../../components/Testimonials/Testimonials';
import NarrowCta from '../../components/NarrowCta/NarrowCta';
import Features from '../../components/Features/Features';

export default function Main() {
  return (
    <div>
      <Hero />
      <Sponsors />
      <Features />
      <Testimonials />
      <NarrowCta />
    </div>
  );
}
