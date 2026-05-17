'use client';

import { useTranslations } from 'next-intl';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

// items moved to i18n

// ----------------------------------------------------------------------

export default function RealEstateMaintenanceResponsibility() {
  const t = useTranslations();
  const SERVICES_FOR_SHAREHOLDER = [0, 1, 2, 3, 4, 5].map((i) => ({
    number: String(i + 1),
    title: t(`realEstate.responsibility.shareholder.items.${i}.title`),
    description: t(`realEstate.responsibility.shareholder.items.${i}.description`),
  }));
  const SERVICES_FOR_COMPANY = [0, 1, 2, 3, 4, 5].map((i) => ({
    number: String(i + 1),
    title: t(`realEstate.responsibility.company.items.${i}.title`),
    description: t(`realEstate.responsibility.company.items.${i}.description`),
  }));
  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          mb: { xs: 8, md: 10 },
        }}
      >
        {t('realEstate.responsibility.title')}
      </Typography>

      <Typography
        variant="h3"
        sx={{
          my: { xs: 8, md: 10 },
          color: 'text.secondary',
        }}
      >
        {t('realEstate.responsibility.shareholderTitle')}
      </Typography>

      <Box
        sx={{
          rowGap: 8,
          columnGap: 10,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {SERVICES_FOR_SHAREHOLDER.map((value) => (
          <div key={value.title}>
            <Typography variant="h2">{value.number}</Typography>

            <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
              {value.title}
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
          </div>
        ))}
      </Box>

      <Typography
        variant="h3"
        sx={{
          my: { xs: 8, md: 10 },
          color: 'text.secondary',
        }}
      >
        {t('realEstate.responsibility.companyTitle')}
      </Typography>

      <Box
        sx={{
          rowGap: 8,
          columnGap: 10,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {SERVICES_FOR_COMPANY.map((value) => (
          <div key={value.title}>
            <Typography variant="h2">{value.number}</Typography>

            <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
              {value.title}
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
          </div>
        ))}
      </Box>
    </Container>
  );
}
