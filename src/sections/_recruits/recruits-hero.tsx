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
      sx={{
        pt: { xs: `${HEADER.H_MOBILE + 40}px`, md: `${HEADER.H_DESKTOP + 40}px` },
        pb: { xs: 8, md: 12 },
        background: `linear-gradient(180deg, ${alpha(theme.palette.primary.lighter, 0.32)} 0%, transparent 100%)`,
      }}
    >
      <Container>
        <Stack spacing={3} sx={{ maxWidth: 760, mx: 'auto', textAlign: 'center' }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', letterSpacing: 1.4 }}
          >
            {t('eyebrow')}
          </Typography>

          <Typography variant="h1">{t('title')}</Typography>

          <Typography variant="h5" sx={{ color: 'text.secondary', fontWeight: 400 }}>
            {t('subtitle')}
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 2, justifyContent: 'center' }}>
            <Button size="large" variant="contained" color="primary" href="#apply">
              {t('ctaApply')}
            </Button>
            <Button size="large" variant="outlined" color="inherit" href="#roles">
              {t('ctaRoles')}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
