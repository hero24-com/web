'use client';

import { _testimonials } from 'src/_mock';

import HomeJoin from '../join/home-join';
import HomeJoinForm from '../join/home-join-form';
import HomeTestimonial from '../testimonial/home-testimonial';
import HomeJoinOurMission from '../join/home-join-our-mission';

// ----------------------------------------------------------------------

export default function HomeJoinView() {
  return (
    <>
      <HomeJoin />

      <HomeJoinOurMission />

      <HomeJoinForm formId="27ee7ed3-9acc-4c8f-ae73-bcff383874bd" />

      <HomeTestimonial testimonials={_testimonials} />
    </>
  );
}
