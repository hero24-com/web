'use client';

import { _testimonials } from 'src/_mock';

import HomeOwnCustomer from '../own-customer/home-own-customer';
import HomeOwnCustomerInclude from '../own-customer/home-own-customer-include';
import HomeOwnCustomerFees from '../own-customer/home-own-customer-fees';
import HomeOwnCustomerHowItWork from '../own-customer/home-own-customer-how-it-work';
import HomeOwnCustomerFormCombined from '../own-customer/home-own-customer-form-combined';
import HomeOwnCustomerJoinOurMission from '../own-customer/home-own-customer-join-our-mission';
import HomeTestimonial from '../testimonial/home-testimonial';

// ----------------------------------------------------------------------

export default function HomeOwnCustomerView() {
  return (
    <>
      <HomeOwnCustomer />

      <HomeOwnCustomerInclude />

      <HomeOwnCustomerFees />

      <HomeOwnCustomerHowItWork />

      <HomeOwnCustomerFormCombined />

      <HomeOwnCustomerJoinOurMission />

      <HomeTestimonial testimonials={_testimonials} />
    </>
  );
}
