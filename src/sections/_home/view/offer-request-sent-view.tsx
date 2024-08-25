'use client';

import Script from 'next/script';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { _testimonials } from 'src/_mock';

import { varBounce, MotionContainer } from 'src/components/animate';
import HomeService from '../landing/home-service';
import HomeTestimonial from '../testimonial/home-testimonial';

// ----------------------------------------------------------------------

export default function OfferRequestSentView() {
  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
          gtag('event', 'conversion', {
            'send_to': 'AW-16588215507/ka3dCLi1mLUZENOp8OU9',
            'value': 1.0,
            'currency': 'EUR'
          });
        `,
        }}
      ></Script>
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

          <Typography sx={{ color: 'text.secondary' }}>
            Sinuun ollaan pian yhteydessä.
          </Typography>
        </Stack>

        <HomeService />

        <HomeTestimonial testimonials={_testimonials} />
      </Container>
    </>
  );
}
