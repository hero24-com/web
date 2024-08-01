'use client';

import { _testimonials } from 'src/_mock';

import HomeOwnCustomer from '../own-customer/home-own-customer';
import HomeOwnCustomerInclude from '../own-customer/home-own-customer-include';
import HomeOwnCustomerFees from '../own-customer/home-own-customer-fees';
import HomeOwnCustomerHowItWork from '../own-customer/home-own-customer-how-it-work';
import HomeOwnCustomerForm from '../own-customer/home-own-customer-form';
import HomeTestimonial from '../testimonial/home-testimonial';

// ----------------------------------------------------------------------

export default function HomeOwnCustomerView() {
  return (
    <>
      <HomeOwnCustomer />

      <HomeOwnCustomerInclude />

      <HomeOwnCustomerFees />

      <HomeOwnCustomerHowItWork />

      <HomeOwnCustomerForm formId="e050bc45-bb41-4735-b8f6-54acace87a07" />

      <HomeTestimonial testimonials={_testimonials} />
    </>
  );
}
