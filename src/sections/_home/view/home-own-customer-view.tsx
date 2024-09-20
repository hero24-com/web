'use client';

import { _testimonials, _caseStudies } from 'src/_mock';

import HomeTestimonial from '../testimonial/home-testimonial';
import HomeOwnCustomer from '../own-customer/home-own-customer';
import HomeOwnCustomerInclude from '../own-customer/home-own-customer-include';
import HomeOwnCustomerHowItWork from '../own-customer/home-own-customer-how-it-work';
import HomeOwnCustomerFormCombined from '../own-customer/home-own-customer-form-combined';
import HomeCaseStudies from '../landing/home-case-studies';

// ----------------------------------------------------------------------

const caseStudies = _caseStudies.slice(0, 6);

export default function HomeOwnCustomerView() {
  return (
    <>
      <HomeOwnCustomer />

      <HomeOwnCustomerFormCombined />

      <HomeOwnCustomerInclude />

      <HomeOwnCustomerHowItWork />

      <HomeCaseStudies caseStudies={caseStudies} />

      <HomeTestimonial testimonials={_testimonials} />
    </>
  );
}
