'use client';

import { useScroll } from 'framer-motion';

import { _services, _testimonials } from 'src/_mock';

import ScrollProgress from 'src/components/scroll-progress';

import HomeHero from '../home-hero';
import HomeOrderStep from '../home-order-step';
import HomeService from '../home-service';
import HomeFAQs from '../home-faqs';
import HomeDownloadApp from '../home-download-app';
import HomeTestimonial from '../testimonial/home-testimonial';


// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      <HomeService services={_services} />

      <HomeOrderStep />

      <HomeFAQs />

      <HomeTestimonial testimonials={_testimonials} />

      <HomeDownloadApp />
    </>
  );
}
