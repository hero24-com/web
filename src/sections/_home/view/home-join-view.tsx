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

      <HomeJoinForm formId="adcc95a6-caf4-4049-aaeb-9bc337d04958" />

      <HomeCaseStudies caseStudies={caseStudies} />

      <HomeTestimonial testimonials={_testimonials} />
    </>
  );
}
