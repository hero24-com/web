'use client';

import { _testimonials } from 'src/_mock';

import HomeTestimonial from '../testimonial/home-testimonial';
import SmartHomePricing from '../smart-home/smart-home-pricing';
import SmartHomeInclude from '../smart-home/smart-home-include';
import SmartHomeBenefits from '../smart-home/smart-home-benefits';
import SmartHomeHowItWork from '../smart-home/smart-home-how-it-work';

// ----------------------------------------------------------------------

export default function SmartHomeView() {
  return (
    <>
      <SmartHomePricing />

      <SmartHomeInclude />

      <SmartHomeHowItWork />

      <SmartHomeBenefits />

      <HomeTestimonial testimonials={_testimonials} />
    </>
  );
}
