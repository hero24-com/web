'use client';

import { _testimonials } from 'src/_mock';

import HomeTestimonial from '../testimonial/home-testimonial';
import SmartHomePricing from '../smart-home/smart-home-pricing';
import SmartHomeInclude from '../smart-home/smart-home-include';
import SmartHomeBenefits from '../smart-home/smart-home-benefits';
import SmartHomeHighlights from '../smart-home/smart-home-highlights';
import SmartHomeHowItWork from '../smart-home/smart-home-how-it-work';

// ----------------------------------------------------------------------

export default function SmartHomeView() {
  return (
    <>
      <SmartHomePricing />

      <SmartHomeInclude />

      <SmartHomeHighlights />

      <SmartHomeHowItWork />

      <SmartHomeBenefits />

      <HomeTestimonial testimonials={_testimonials} />
    </>
  );
}
