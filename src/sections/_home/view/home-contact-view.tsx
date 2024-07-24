'use client';

import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

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
          <Typography variant="h3" sx={{ mb: 5 }}>
            Yhteystiedot
          </Typography>

          <HomeContactForm formId="07b5414f-78ce-419f-b143-fdf43fb1bdb9" />
        </Grid>
      </Grid>
    </Container>
  );
}
