'use client';

import { useTranslations } from 'next-intl';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function RecruitsLookingFor() {
  const tPriority = useTranslations('recruits.priority');
  const t = useTranslations('recruits.lookingFor');
  const theme = useTheme();

  const items = t.raw('items') as string[];
  const launchItems = t.raw('launchItems') as string[];

  return (
    <Box sx={{ bgcolor: 'background.neutral', py: { xs: 8, md: 12 } }}>
      <Container>
        <Stack spacing={6} sx={{ maxWidth: 1000, mx: 'auto' }}>
          <Card sx={{ p: { xs: 3, md: 5 }, bgcolor: alpha(theme.palette.primary.main, 0.06) }}>
            <Stack spacing={2}>
              <Typography variant="h4">{tPriority('title')}</Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {tPriority('body')}
              </Typography>
            </Stack>
          </Card>

          <Stack spacing={3}>
            <Typography variant="h3" sx={{ textAlign: 'center' }}>
              {t('title')}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center' }}>
              {t('intro')}
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 2,
                mt: 2,
              }}
            >
              {items.map((item) => (
                <Stack key={item} direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                  <Iconify
                    icon="solar:check-circle-bold"
                    sx={{ color: 'primary.main', flexShrink: 0, mt: 0.4 }}
                  />
                  <Typography variant="body2">{item}</Typography>
                </Stack>
              ))}
            </Box>
          </Stack>

          <Stack spacing={3}>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              {t('launchIntro')}
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 2,
              }}
            >
              {launchItems.map((item) => (
                <Stack key={item} direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                  <Iconify
                    icon="solar:rocket-bold"
                    sx={{ color: 'warning.main', flexShrink: 0, mt: 0.4 }}
                  />
                  <Typography variant="body2">{item}</Typography>
                </Stack>
              ))}
            </Box>
          </Stack>

          <Typography
            variant="subtitle1"
            sx={{ textAlign: 'center', color: 'text.primary', fontStyle: 'italic' }}
          >
            {t('outro')}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
