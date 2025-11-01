'use client';

import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';

import { AppStoreButton } from 'src/layouts/main/footer';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function HomeDownloadApp() {
  const t = useTranslations('home.downloadApp');

  return (
    <Container sx={{ py: { xs: 8, md: 10 } }}>
      <Grid container spacing={3} justifyContent={{ lg: 'space-between' }}>
        <Grid xs={12} md={6} lg={6}>
          <Stack
            sx={{
              textAlign: { xs: 'center', md: 'unset' },
            }}
          >
            <Typography variant="h2"> {t('title')} </Typography>

            <Typography sx={{ color: 'text.secondary', mt: 3, mb: 8 }}>{t('subtitle')}</Typography>
          </Stack>

          <Stack
            alignItems="center"
            sx={{
              py: 5,
              borderRadius: 2,
              mb: { xs: 8, md: 0 },
              px: { xs: 3, md: 5 },
              border: (theme) => `solid 1px ${theme.palette.divider}`,
            }}
          >
            <Stack spacing={3} direction="row" alignItems="center">
              <Image
                src="/assets/icons/apple_qr_code.png"
                sx={{
                  width: 120,
                  height: 120,
                  flexShrink: 0,
                  borderRadius: 1.5,
                  bgcolor: 'background.neutral',
                }}
              />
              <Typography variant="h6">{t('qrCodeText')}</Typography>
            </Stack>

            <Divider sx={{ my: 5, width: 1, borderStyle: 'dashed' }} />

            <AppStoreButton />
          </Stack>
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Image
            alt="mobile app"
            src="/assets/images/home/home_hero_new.png"
            sx={{
              maxWidth: 384,
              marginLeft: { xs: '8%', md: '35%' },
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
