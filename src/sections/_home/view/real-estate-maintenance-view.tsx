'use client';

import { _caseStudies, _testimonials } from 'src/_mock';

import HomeCaseStudies from '../landing/home-case-studies';
import HomeTestimonial from '../testimonial/home-testimonial';
import RealEstateMaintenance from '../real-estate-maintenance/real-estate-maintenance';
import RealEstateMaintenanceCost from '../real-estate-maintenance/real-estate-maintenance-cost';
import RealEstateMaintenanceFAQs from '../real-estate-maintenance/real-estate-maintenance-faqs';
import RealEstateMaintenanceForm from '../real-estate-maintenance/real-estate-maintenance-form';
import RealEstateMaintenanceProcess from '../real-estate-maintenance/real-estate-maintenance-process';
import RealEstateMaintenanceHowItWork from '../real-estate-maintenance/real-estate-maintenance-how-it-work';
import RealEstateMaintenanceResponsibility from '../real-estate-maintenance/real-estate-maintenance-responsibility';

// ----------------------------------------------------------------------

const caseStudies = _caseStudies.slice(0, 6);

export default function RealEstateMaintenanceView() {
  return (
    <>
      <RealEstateMaintenance />

      <RealEstateMaintenanceForm formId="07b5414f-78ce-419f-b143-fdf43fb1bdb9" />

      <RealEstateMaintenanceHowItWork />

      <RealEstateMaintenanceFAQs />

      <RealEstateMaintenanceResponsibility />

      <RealEstateMaintenanceCost />

      <RealEstateMaintenanceProcess />

      <HomeCaseStudies caseStudies={caseStudies} />

      <HomeTestimonial testimonials={_testimonials} />
    </>
  );
}
