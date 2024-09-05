'use client';

import { _testimonials } from 'src/_mock';

import HomeOwnCustomer from '../own-customer/home-own-customer';
import HomeOwnCustomerInclude from '../own-customer/home-own-customer-include';
import HomeOwnCustomerHowItWork from '../own-customer/home-own-customer-how-it-work';
import HomeOwnCustomerFormCombined from '../own-customer/home-own-customer-form-combined';
import HomeTestimonial from '../testimonial/home-testimonial';

// ----------------------------------------------------------------------

export default function HomeOwnCustomerView() {
  return (
    <>
      <HomeOwnCustomer />

      <HomeOwnCustomerFormCombined />

      <HomeOwnCustomerInclude />

      <HomeOwnCustomerHowItWork />

      <HomeTestimonial testimonials={_testimonials} />
    </>
  );
}
