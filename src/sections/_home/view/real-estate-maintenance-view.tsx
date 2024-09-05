'use client';

import { _testimonials } from 'src/_mock';

import RealEstateMaintenance from '../real-estate-maintenance/real-estate-maintenance';
import RealEstateMaintenanceResponsibility from '../real-estate-maintenance/real-estate-maintenance-responsibility';
import RealEstateMaintenanceCost from '../real-estate-maintenance/real-estate-maintenance-cost';
import RealEstateMaintenanceProcess from '../real-estate-maintenance/real-estate-maintenance-process';
import RealEstateMaintenanceHowItWork from '../real-estate-maintenance/real-estate-maintenance-how-it-work';
import RealEstateMaintenanceFAQs from '../real-estate-maintenance/real-estate-maintenance-faqs';
import RealEstateMaintenanceForm from '../real-estate-maintenance/real-estate-maintenance-form';
import HomeTestimonial from '../testimonial/home-testimonial';

// ----------------------------------------------------------------------

export default function RealEstateMaintenanceView() {
  return (
    <>
      <RealEstateMaintenance />

      <RealEstateMaintenanceResponsibility />

      <RealEstateMaintenanceCost />

      <RealEstateMaintenanceProcess />

      <RealEstateMaintenanceHowItWork />

      <RealEstateMaintenanceFAQs />

      <RealEstateMaintenanceForm formId="3faf4020-8d54-4856-98f1-0cc29c21461e" />

      <HomeTestimonial testimonials={_testimonials} />
    </>
  );
}
