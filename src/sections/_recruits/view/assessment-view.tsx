'use client';

import { Suspense } from 'react';

import Box from '@mui/material/Box';

import { HEADER } from 'src/layouts/config-layout';

import AssessmentForm from '../assessment-form';

// ----------------------------------------------------------------------

export default function AssessmentView() {
  return (
    <Box
      sx={{ pt: { xs: `${HEADER.H_MOBILE}px`, md: `${HEADER.H_DESKTOP}px` } }}
    >
      {/* The form reads `?role=` and UTM params via useSearchParams. */}
      <Suspense fallback={null}>
        <AssessmentForm />
      </Suspense>
    </Box>
  );
}
