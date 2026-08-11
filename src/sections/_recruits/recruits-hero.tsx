'use client';

import { useTranslations } from 'next-intl';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { HEADER } from 'src/layouts/config-layout';

// ----------------------------------------------------------------------

export default function RecruitsHero() {
  const t = useTranslations('recruits.hero');
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        pt: { xs: `${HEADER.H_MOBILE + 32}px`, md: `${HEADER.H_DESKTOP + 40}px` },
        pb: { xs: 6, md: 10 },
        background: `linear-gradient(180deg, ${alpha(theme.palette.primary.lighter, 0.32)} 0%, transparent 100%)`,
      }}
    >
      <Container>
        <Stack spacing={2.5} sx={{ maxWidth: 720, mx: 'auto', textAlign: 'center' }}>
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: 1.4 }}>
            {t('eyebrow')}
          </Typography>

          <Typography variant="h1" sx={{ fontSize: { xs: '2.25rem', md: '3.5rem' } }}>
            {t('title')}
          </Typography>

          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {t('body1')}
          </Typography>

          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {t('body2')}
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {t('tagline')}
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            sx={{ pt: 1.5, justifyContent: 'center' }}
          >
            <Button size="large" variant="contained" color="primary" href="#roles">
              {t('ctaRoles')}
            </Button>
            <Button size="large" variant="outlined" color="inherit" href="#apply">
              {t('ctaApply')}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
