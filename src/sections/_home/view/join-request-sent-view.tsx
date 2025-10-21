'use client';

import Script from 'next/script';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { _caseStudies, _testimonials } from 'src/_mock';

import { varBounce, MotionContainer } from 'src/components/animate';

import HomeService from '../landing/home-service';
import HomeCaseStudies from '../landing/home-case-studies';
import HomeTestimonial from '../testimonial/home-testimonial';

// ----------------------------------------------------------------------

const caseStudies = _caseStudies.slice(0, 6);

export default function JoinRequestSentView() {
  return (
    <>
      {/* Google Ads Conversion Tracking */}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof gtag !== 'undefined') {
              // Hero24 / Taltek old ads account - verified
              gtag('event', 'conversion', {
                'send_to': 'AW-16588215507/ka3dCLi1mLUZENOp8OU9',
                'value': 1.0,
                'currency': 'EUR'
              });
              
              // Hero24 / Taltek new ads account - not verified
              gtag('event', 'conversion', {
                'send_to': 'AW-16739198440/Q5VPCLHP9twZEOjL760-',
                'value': 1.0,
                'currency': 'EUR'
              });
              
              // Hero24 / Craftly ads account - track join hero24 event
              gtag('event', 'conversion', {
                'send_to': 'AW-11557325623/DYVVCKuIgYQaELeW-4Yr',
                'value': 1.0,
                'currency': 'EUR'
              });
            } else {
              console.warn('gtag is not available - Google Analytics may not be loaded');
            }
          `,
        }}
      />
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
          <Typography variant="h3">Pyyntösi liittyä Hero24:ään on lähetetty</Typography>

          <Typography sx={{ color: 'text.secondary' }}>Sinuun ollaan pian yhteydessä.</Typography>
        </Stack>

        <HomeService />

        <HomeCaseStudies caseStudies={caseStudies} />

        <HomeTestimonial testimonials={_testimonials} />
      </Container>
    </>
  );
}
