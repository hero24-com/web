'use client';

import { useTranslations } from 'next-intl';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function RecruitsBuild() {
  const t = useTranslations('recruits.build');

  const items = t.raw('items') as string[];

  return (
    <Container component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={3} sx={{ maxWidth: 760, mx: 'auto' }}>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
          {t('title')}
        </Typography>

        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          {t('intro')}
        </Typography>

        <Typography variant="subtitle1">{t('listLabel')}</Typography>

        <Stack spacing={1.5} component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
          {items.map((item) => (
            <Stack
              key={item}
              component="li"
              direction="row"
              spacing={1.5}
              sx={{ alignItems: 'flex-start' }}
            >
              <Iconify
                icon="solar:check-circle-bold"
                width={20}
                sx={{ color: 'primary.main', flexShrink: 0, mt: 0.3 }}
              />
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {item}
              </Typography>
            </Stack>
          ))}
        </Stack>

        <Box sx={{ p: 2.5, borderRadius: 1.5, bgcolor: 'background.neutral' }}>
          <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
            {t('importantLabel')}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {t('important')}
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}
