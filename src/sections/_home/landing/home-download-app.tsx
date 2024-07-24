import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

import Image from 'src/components/image';
import SvgColor from 'src/components/svg-color';

import { AppStoreButton } from 'src/layouts/main/footer';

// ----------------------------------------------------------------------

export default function HomeDownloadApp() {
  return (
    <Container sx={{ py: { xs: 8, md: 15 } }}>
      <Grid container spacing={3} justifyContent={{ lg: 'space-between' }}>
        <Grid xs={12} md={6} lg={6}>
          <Stack
            sx={{
              textAlign: { xs: 'center', md: 'unset' },
            }}
          >
            <Typography variant="h2"> Lataa sovellus </Typography>

            <Typography sx={{ color: 'text.secondary', mt: 3, mb: 8 }}>
              Lataa Hero24-sovellus nyt ja löydä omat palvelusankarisi – tai
              liity sankareihimme – jo tänään!
            </Typography>
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
              <Typography variant="h6">
                Scan QR code to
                <br /> install on your device
              </Typography>
            </Stack>

            <Divider sx={{ my: 5, width: 1, borderStyle: 'dashed' }} />

            <AppStoreButton direction={{ xs: 'column', sm: 'row' }} />
          </Stack>
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Image
            alt="mobile app"
            src="/assets/images/home/home_hero_new.png"
            sx={{
              maxWidth: 384,
              marginLeft: '20%',
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
