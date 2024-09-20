'use client';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { _services, _caseStudies, _testimonials } from 'src/_mock';

import HomeCaseStudies from '../landing/home-case-studies';
import HomeTestimonial from '../testimonial/home-testimonial';
import HomeServiceList from '../service/list/home-service-list';

// ----------------------------------------------------------------------

const caseStudies = _caseStudies.slice(0, 6);

export default function HomeServiceView() {
  return (
    <>
      <Container
        sx={{
          py: { xs: 5, md: 10 },
        }}
      >
        <Stack spacing={3} sx={{ textAlign: 'center', pb: { xs: 5, md: 10 } }}>
          <Typography variant="h2">Palvelut kotiin, kiinteistöille ja yrityksille</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Hero24 kautta kaikki kodin ja kiinteistön palvelut helposti ympäri Suomea!
          </Typography>
        </Stack>

        <HomeServiceList services={_services} />
      </Container>
      <HomeCaseStudies caseStudies={caseStudies} />
      <HomeTestimonial testimonials={_testimonials} />
    </>
  );
}
