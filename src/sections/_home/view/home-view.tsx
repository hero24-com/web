'use client';

import { useScroll } from 'framer-motion';

import { _services, _testimonials } from 'src/_mock';

import ScrollProgress from 'src/components/scroll-progress';

import HomeHero from '../landing/home-hero';
import HomeOrderStep from '../landing/home-order-step';
import HomeService from '../landing/home-service';
import HomeFAQs from '../landing/home-faqs';
import HomeDownloadApp from '../landing/home-download-app';
import HomeTestimonial from '../testimonial/home-testimonial';


// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      <HomeService />

      <HomeOrderStep />

      <HomeFAQs />

      <HomeTestimonial testimonials={_testimonials} />

      <HomeDownloadApp />
    </>
  );
}
