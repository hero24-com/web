'use client';

import { useScroll } from 'framer-motion';

import { _caseStudies, _testimonials } from 'src/_mock';

import ScrollProgress from 'src/components/scroll-progress';

import HomeHero from '../landing/home-hero';
import HomeService from '../landing/home-service';
import HomeOrderStep from '../landing/home-order-step';
import HomeDownloadApp from '../landing/home-download-app';
import HomeCaseStudies from '../landing/home-case-studies';
import HomeTestimonial from '../testimonial/home-testimonial';


// ----------------------------------------------------------------------

const caseStudies = _caseStudies.slice(0, 6);

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      <HomeService />

      <HomeOrderStep />

      <HomeCaseStudies caseStudies={caseStudies} />

      <HomeTestimonial testimonials={_testimonials} />

      <HomeDownloadApp />
    </>
  );
}
