'use client';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { _caseStudies, _testimonials } from 'src/_mock';

import { varBounce, MotionContainer } from 'src/components/animate';
import GoogleAdsConversion from 'src/components/google-ads-conversion';
import { CONFIG } from 'src/config-global';

import HomeService from '../landing/home-service';
import HomeCaseStudies from '../landing/home-case-studies';
import HomeTestimonial from '../testimonial/home-testimonial';

// ----------------------------------------------------------------------

const caseStudies = _caseStudies.slice(0, 6);

export default function OfferRequestSentView() {
  return (
    <>
      {/* Google Ads Conversion Tracking */}
      <GoogleAdsConversion conversionIds={CONFIG.googleAdsQuoteConversions} />
      <Container
        component={MotionContainer}
        sx={{
          textAlign: 'center',
          pt: { xs: 5, md: 10 },
          pb: { xs: 10, md: 20 },
        }}
      >
        <m.div variants={varBounce().in}>
          <Box sx={{ fontSize: 128 }}>🎉</Box>
        </m.div>

        <Stack spacing={1} sx={{ my: 5 }}>
          <Typography variant="h3">Tarjouspyyntösi on lähetetty!</Typography>

          <Typography sx={{ color: 'text.secondary' }}>Sinuun ollaan pian yhteydessä.</Typography>
        </Stack>

        <HomeService />

        <HomeCaseStudies caseStudies={caseStudies} />

        <HomeTestimonial testimonials={_testimonials} />
      </Container>
    </>
  );
}
