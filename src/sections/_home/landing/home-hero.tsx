import { useRef } from 'react';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { useResponsive } from 'src/hooks/use-responsive';
import { useBoundingClientRect } from 'src/hooks/use-bounding-client-rect';

import { fShortenNumber } from 'src/utils/format-number';

import { bgGradient } from 'src/theme/css';
import { HEADER } from 'src/layouts/config-layout';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const SUMMARY = [
  { value: 50000, label: 'Asiakkaita', color: 'warning' },
  { value: 200000, label: 'Tilauksia', color: 'error' },
  { value: 500, label: 'Sankareita', color: 'success' },
] as const;

// ----------------------------------------------------------------------

export default function HomeHero() {
  const theme = useTheme();

  const containerRef = useRef<HTMLDivElement>(null);

  const mdUp = useResponsive('up', 'md');

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_1.jpg',
        }),
        overflow: 'hidden',
        position: 'relative',
        height: { md: `calc(100vh - ${HEADER.H_DESKTOP}px)` },
      }}
    >
      <Container sx={{ height: 1 }}>
        <Grid
          container
          columnSpacing={3}
          alignItems="center"
          sx={{ height: 1 }}
        >
          <Grid xs={12} md={5}>
            <Stack
              spacing={5}
              justifyContent="center"
              alignItems={{ xs: 'center', md: 'flex-start' }}
              sx={{
                py: 15,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography variant="h3">
                <Box component="span" sx={{ color: 'primary.main' }}>
                  {`Hero24 `}
                </Box>
                - Yhdistää ammattilaiset ja asiakkaat yhdestä paikasta
              </Typography>

              <Typography variant="h6">
                Valitse huipputason ammattilaisia kaikkiin asumisen ja
                kiinteistöhallinnan tarpeisiin yhdestä paikasta.
              </Typography>

              <Typography variant="h6">
                100% tyytyväisyystakuu ja vakuutettuina – kaikki palvelut
                räätälöitynä juuri sinulle.
              </Typography>

              <Stack spacing={3} sx={{ mb: 5, width: '100%' }}>
                <Button
                  variant="contained"
                  color="inherit"
                  href={paths.services.root}
                  size="large"
                  rel="noopener"
                >
                  Valitse palvelu
                </Button>
              </Stack>

              <Stack
                spacing={3}
                alignItems="center"
                direction={{ xs: 'column', md: 'row' }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{ typography: 'h6' }}
                >
                  <Fab size="medium" color="primary" sx={{ mr: 1 }}>
                    <Iconify width={24} icon="carbon:phone" />
                  </Fab>
                  09 42452538
                </Stack>

                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{ typography: 'h6' }}
                >
                  <Fab size="medium" color="info" sx={{ mr: 1 }}>
                    <Iconify width={24} icon="carbon:email" />
                  </Fab>
                  support@hero24.com
                </Stack>
              </Stack>

              <Divider sx={{ borderStyle: 'dashed' }} />

              <Stack
                direction="row"
                spacing={{ xs: 3, sm: 10 }}
                justifyContent={{ xs: 'center', md: 'unset' }}
              >
                {SUMMARY.map((item) => (
                  <Stack
                    key={item.value}
                    spacing={0.5}
                    sx={{ position: 'relative' }}
                  >
                    <Box
                      sx={{
                        top: 8,
                        left: -4,
                        width: 24,
                        height: 24,
                        opacity: 0.24,
                        borderRadius: '50%',
                        position: 'absolute',
                        bgcolor: `${item.color}.main`,
                      }}
                    />
                    <Typography variant="h3">
                      {fShortenNumber(item.value)}+
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary' }}
                    >
                      {item.label}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid xs={12} md={7}>
            <Box ref={containerRef} />
          </Grid>
        </Grid>
      </Container>

      {mdUp && (
        <Box
          sx={{
            maxWidth: 512,
            position: 'absolute',
            bottom: { md: '20%', lg: '1%' },
            right: { md: -100, xl: 300 },
            width: { md: `calc(100% - ${offsetLeft}px)` },
          }}
        >
          <Image
            visibleByDefault
            disabledEffect
            alt="home hero"
            src="/assets/images/home/home_hero_new.png"
          />
        </Box>
      )}
    </Box>
  );
}
