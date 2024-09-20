'use client';

import { _caseStudies, _testimonials } from 'src/_mock';

import HomeJoin from '../join/home-join';
import HomeJoinForm from '../join/home-join-form';
import HomeCaseStudies from '../landing/home-case-studies';
import HomeTestimonial from '../testimonial/home-testimonial';
import HomeJoinOurMission from '../join/home-join-our-mission';

// ----------------------------------------------------------------------

const caseStudies = _caseStudies.slice(0, 6);

export default function HomeJoinView() {
  return (
    <>
      <HomeJoin />

      <HomeJoinOurMission />

      <HomeJoinForm formId="27ee7ed3-9acc-4c8f-ae73-bcff383874bd" />

      <HomeCaseStudies caseStudies={caseStudies} />

      <HomeTestimonial testimonials={_testimonials} />
    </>
  );
}
