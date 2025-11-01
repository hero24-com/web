'use client';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';

import { _services } from 'src/_mock';

import HomeServiceList from '../service/list/home-service-list';

// ----------------------------------------------------------------------

export default function HomeService() {
  const t = useTranslations('home.services');

  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack spacing={3} sx={{ textAlign: 'center', py: { xs: 5, md: 10 } }}>
        <Typography variant="h3">{t('title')}</Typography>

        <Typography sx={{ color: 'text.secondary' }}>{t('subtitle')}</Typography>
      </Stack>

      <HomeServiceList services={_services} />
    </Container>
  );
}
