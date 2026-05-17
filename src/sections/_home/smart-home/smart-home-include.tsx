'use client';

import { useTranslations } from 'next-intl';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const ICONS = [
  '/assets/icons/ic_statistics.svg',
  '/assets/icons/ic_social_media.svg',
  '/assets/icons/ic_real_time.svg',
  '/assets/icons/ic_checklist.svg',
];

// ----------------------------------------------------------------------

export default function SmartHomeInclude() {
  const t = useTranslations();
  const SERVICES = [0, 1, 2, 3].map((i) => ({
    title: t(`smartHome.include.items.${i}.title`),
    description: t(`smartHome.include.items.${i}.description`),
    icon: ICONS[i],
  }));
  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h2">{t('smartHome.include.title')}</Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          maxWidth: 900,
          color: 'text.secondary',
          mb: { xs: 8, md: 10 },
        }}
      >
        {t('smartHome.include.subtitle')}
      </Typography>

      <Box
        sx={{
          rowGap: 8,
          columnGap: 10,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          },
        }}
      >
        {SERVICES.map((value) => (
          <div key={value.title}>
            <SvgColor
              src={value.icon}
              color="info"
              sx={{
                width: 64,
                height: 64,
                mx: 'auto',
                bgcolor: 'primary.main',
              }}
            />

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
