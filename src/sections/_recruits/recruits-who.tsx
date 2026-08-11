'use client';

import { useTranslations } from 'next-intl';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function RecruitsWho() {
  const t = useTranslations('recruits.who');

  return (
    <Container component="section" sx={{ pb: { xs: 6, md: 10 } }}>
      <Stack spacing={2.5} sx={{ maxWidth: 760, mx: 'auto' }}>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
          {t('title')}
        </Typography>

        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          {t('p1')}
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {t('p2')}
        </Typography>

        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          {t('p3')}
        </Typography>
      </Stack>
    </Container>
  );
}
