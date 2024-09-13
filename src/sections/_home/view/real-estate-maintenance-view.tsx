'use client';

import { _testimonials } from 'src/_mock';

import HomeTestimonial from '../testimonial/home-testimonial';
import RealEstateMaintenance from '../real-estate-maintenance/real-estate-maintenance';
import RealEstateMaintenanceCost from '../real-estate-maintenance/real-estate-maintenance-cost';
import RealEstateMaintenanceFAQs from '../real-estate-maintenance/real-estate-maintenance-faqs';
import RealEstateMaintenanceForm from '../real-estate-maintenance/real-estate-maintenance-form';
import RealEstateMaintenanceProcess from '../real-estate-maintenance/real-estate-maintenance-process';
import RealEstateMaintenanceHowItWork from '../real-estate-maintenance/real-estate-maintenance-how-it-work';
import RealEstateMaintenanceResponsibility from '../real-estate-maintenance/real-estate-maintenance-responsibility';

// ----------------------------------------------------------------------

export default function RealEstateMaintenanceView() {
  return (
    <>
      <RealEstateMaintenance />

      <RealEstateMaintenanceForm formId="bab64ad0-fe75-4655-a616-4df7539bd794" />

      <RealEstateMaintenanceHowItWork />

      <RealEstateMaintenanceFAQs />

      <RealEstateMaintenanceResponsibility />

      <RealEstateMaintenanceCost />

      <RealEstateMaintenanceProcess />

      <HomeTestimonial testimonials={_testimonials} />
    </>
  );
}
