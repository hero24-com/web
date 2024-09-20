'use client';

import { _caseStudies, _testimonials } from 'src/_mock';

import HomeCaseStudies from '../landing/home-case-studies';
import HomeTestimonial from '../testimonial/home-testimonial';
import SmartHomePricing from '../smart-home/smart-home-pricing';
import SmartHomeInclude from '../smart-home/smart-home-include';
import SmartHomeBenefits from '../smart-home/smart-home-benefits';
import SmartHomeHighlights from '../smart-home/smart-home-highlights';
import SmartHomeHowItWork from '../smart-home/smart-home-how-it-work';

// ----------------------------------------------------------------------

const caseStudies = _caseStudies.slice(0, 6);

export default function SmartHomeView() {
  return (
    <>
      <SmartHomePricing />

      <SmartHomeInclude />

      <SmartHomeHighlights />

      <SmartHomeHowItWork />

      <SmartHomeBenefits />

      <HomeCaseStudies caseStudies={caseStudies} />

      <HomeTestimonial testimonials={_testimonials} />
    </>
  );
}
