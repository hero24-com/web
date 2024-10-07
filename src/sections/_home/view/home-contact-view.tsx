'use client';

import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import HomeContactInfo from '../contact/home-contact-info';
import HomeContactForm from '../contact/home-contact-form';

// ----------------------------------------------------------------------

export default function HomeContactView() {
  return (
    <Container
      sx={{
        overflow: 'hidden',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Grid
        container
        spacing={{ xs: 5, md: 3 }}
        justifyContent="space-between"
        direction={{ xs: 'column-reverse', md: 'row' }}
      >
        <Grid xs={12} md={6} lg={5}>
          <HomeContactInfo />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <HomeContactForm formId="52d15246-e113-4771-9f9a-faef9f6c4187" />
        </Grid>
      </Grid>
    </Container>
  );
}
