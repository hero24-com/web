import { useTranslations } from 'next-intl';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import { fShortenNumber } from 'src/utils/format-number';

import { _mock } from 'src/_mock';

import Image from 'src/components/image';
import CountUp from 'src/components/count-up';

// ----------------------------------------------------------------------

const IMAGES = [...Array(4)].map((_, index) => _mock.image.service(index + 16));

const SUMMARY_KEYS = [
  'realEstate.summary.customers',
  'realEstate.summary.orders',
  'realEstate.summary.heroes',
] as const;

// ----------------------------------------------------------------------

export default function RealEstateMaintenance() {
  const smUp = useResponsive('up', 'sm');
  const t = useTranslations();

  return (
    <Container
      sx={{
        overflow: 'hidden',
        py: { xs: 5, md: 10 },
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          pb: { xs: 5, md: 10 },
        }}
      >
        <Stack
          spacing={3}
          sx={{
            mx: 'auto',
            maxWidth: 900,
            textAlign: 'center',
          }}
        >
          <Typography variant="h2">{t('realEstate.hero.title')}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>{t('realEstate.hero.p1')}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>{t('realEstate.hero.p2')}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>{t('realEstate.hero.p3')}</Typography>
        </Stack>
      </Box>

      <Grid container spacing={3}>
        {(smUp ? IMAGES : IMAGES.slice(0, 1)).map((img, index) => (
          <Grid key={img} xs={12} sm={6} md={index === 0 ? 6 : 2}>
            <Image alt={img} src={img} sx={{ height: 350, borderRadius: 2, width: 1 }} />
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          rowGap: 5,
          columnGap: 3,
          display: 'grid',
          textAlign: 'center',
          gridTemplateColumns: {
            xs: 'repeat(3, 1fr)',
          },
          pt: { xs: 5, md: 10 },
        }}
      >
        {[50000, 200000, 500].map((number, idx) => (
          <Stack key={SUMMARY_KEYS[idx]} spacing={1}>
            <Typography variant="h2">
              <CountUp
                start={number / 5}
                end={number}
                formattingFn={(newValue: number) => fShortenNumber(newValue)}
              />

              <Typography
                variant="h4"
                component="span"
                sx={{ verticalAlign: 'top', ml: 0.5, color: 'primary.main' }}
              >
                +
              </Typography>
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {t(SUMMARY_KEYS[idx])}
            </Typography>
          </Stack>
        ))}
      </Box>
    </Container>
  );
}
