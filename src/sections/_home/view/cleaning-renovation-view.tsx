'use client';

import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { _services, _testimonials } from 'src/_mock';

import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import HomeTestimonial from '../testimonial/home-testimonial';
import HomeServiceListSimilar from '../service/list/home-service-list-similar';
import HomeServiceDetailsHeader from '../service/details/home-service-details-header';
import HomeServiceDetailsSummary from '../service/details/home-service-details-summary';
import HomeServiceDetailsGallery from '../service/details/home-service-details-gallery';
import HomeServiceDetailsReserveForm from '../service/details/home-service-details-reserve-form';

// ----------------------------------------------------------------------

const _mockService = _services[5];

export default function CleaningRenovationView() {
  return (
    <>
      <Container sx={{ overflow: 'hidden' }}>
        <CustomBreadcrumbs
          links={[{ name: 'Home', href: '/' }, { name: _mockService.slug }]}
          sx={{ mt: 3, mb: 5 }}
        />

        <HomeServiceDetailsGallery images={_mockService.gallery6} />

        <Grid
          container
          columnSpacing={8}
          rowSpacing={5}
          direction="row-reverse"
        >
          <Grid xs={12} md={5} lg={5}>
            <HomeServiceDetailsReserveForm formId="c9c251a2-ca6e-477b-9a23-642359d822fb" />
          </Grid>

          <Grid xs={12} md={7} lg={7}>
            <HomeServiceDetailsHeader service={_mockService} />

            <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

            <HomeServiceDetailsSummary service={_mockService} />
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ my: 10 }} />

      <HomeTestimonial testimonials={_testimonials} />

      <HomeServiceListSimilar services={_services.slice(-4)} />
    </>
  );
}
