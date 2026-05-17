'use client';

import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { useTranslations } from 'next-intl';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import Image from 'src/components/image';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const HIGHLIGHT_FEATURES_1_BASE = [
  { icon: '/assets/images/service/service_21.webp', link: '/pihatyot' },
  { icon: '/assets/images/service/service_17.webp', link: '/kiinteistohuolto' },
  { icon: '/assets/images/service/service_20.webp', link: '/piha-rakentaminen' },
];

const HIGHLIGHT_FEATURES_2_BASE = [
  { icon: '/assets/images/service/service_1.webp', link: '/ilmastointityot' },
  { icon: '/assets/images/service/service_19.webp', link: '/remontti' },
  { icon: '/assets/images/service/service_10.webp', link: '/sahkoasennukset' },
  { icon: '/assets/images/service/service_16.webp', link: '/putkityot' },
  { icon: '/assets/images/service/service_12.webp', link: '/kodinkonehuolto' },
  { icon: '/assets/images/service/service_2.webp', link: '/asbestikartoitus' },
];

const HIGHLIGHT_FEATURES_3_BASE = [
  { icon: '/assets/images/service/service_15.webp', link: '/muutto' },
  { icon: '/assets/images/service/service_14.webp', link: '/kantoapu' },
  { icon: '/assets/images/service/service_8.webp', link: '/kuljetuspalvelut' },
];

const HIGHLIGHT_FEATURES_4_BASE = [
  { icon: '/assets/images/service/service_3.webp', link: '/kotisiivous' },
  { icon: '/assets/images/service/service_5.webp', link: '/toimistosiivous' },
  { icon: '/assets/images/service/service_4.webp', link: '/muuttosiivous' },
  { icon: '/assets/images/service/service_6.webp', link: '/remonttisiivous' },
  { icon: '/assets/images/service/service_7.webp', link: '/ikkunanpesu' },
  { icon: '/assets/images/service/service_9.webp', link: '/kotiapu' },
];

const HIGHLIGHT_FEATURES_5_BASE = [
  { icon: '/assets/images/service/service_13.webp', link: '/kodinkonehuolto' },
  { icon: '/assets/images/service/service_11.webp', link: '/elektroniikkahuolto' },
  { icon: '/assets/images/service/service_18.webp', link: '/kylmalaitteiden-asennus' },
];

// ----------------------------------------------------------------------

function AnimatedDiv({ children }: { children: React.ReactNode }) {
  const variants = varFade({ distance: 24 }).inUp;
  return <m.div variants={variants}>{children}</m.div>;
}

export default function SmartHomeHighlights({ sx, ...other }: BoxProps) {
  const t = useTranslations();

  const HIGHLIGHT_FEATURES_1 = HIGHLIGHT_FEATURES_1_BASE.map((item, i) => ({
    ...item,
    label: t(`smartHome.highlights.group1.${i}`),
  }));
  const HIGHLIGHT_FEATURES_2 = HIGHLIGHT_FEATURES_2_BASE.map((item, i) => ({
    ...item,
    label: t(`smartHome.highlights.group2.${i}`),
  }));
  const HIGHLIGHT_FEATURES_3 = HIGHLIGHT_FEATURES_3_BASE.map((item, i) => ({
    ...item,
    label: t(`smartHome.highlights.group3.${i}`),
  }));
  const HIGHLIGHT_FEATURES_4 = HIGHLIGHT_FEATURES_4_BASE.map((item, i) => ({
    ...item,
    label: t(`smartHome.highlights.group4.${i}`),
  }));
  const HIGHLIGHT_FEATURES_5 = HIGHLIGHT_FEATURES_5_BASE.map((item, i) => ({
    ...item,
    label: t(`smartHome.highlights.group5.${i}`),
  }));

  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Typography variant="h2" sx={{ textAlign: 'center', pb: { xs: 10, md: 15 } }}>
          {t('smartHome.highlights.title')}
        </Typography>
        <Grid
          container
          disableEqualOverflow
          spacing={{ xs: 5, md: 3 }}
          sx={{ py: 8 }}
          justifyContent={{ md: 'space-between' }}
        >
          <Grid xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <AnimatedDiv>
              <Typography variant="h2" sx={{ my: 3 }}>
                {t('smartHome.highlights.groups.yardAndProperty')}
              </Typography>
            </AnimatedDiv>
          </Grid>

          <Grid xs={12} md={7}>
            <Box
              rowGap={5}
              columnGap={3}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
              }}
            >
              {HIGHLIGHT_FEATURES_1.map((feature) => (
                <AnimatedDiv key={feature.label}>
                  <Box
                    sx={{
                      gap: 2,
                      display: 'flex',
                      textAlign: 'center',
                      alignItems: 'center',
                      typography: 'subtitle2',
                      flexDirection: 'column',
                    }}
                  >
                    <Link component={RouterLink} href={feature.link} color="inherit">
                      <Image
                        alt={feature.icon}
                        src={feature.icon}
                        sx={{ borderRadius: 2, maxHeight: 115, objectFit: 'cover' }}
                      />
                    </Link>
                    <Link component={RouterLink} href={feature.link} color="inherit">
                      {feature.label}
                    </Link>
                  </Box>
                </AnimatedDiv>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          disableEqualOverflow
          spacing={{ xs: 5, md: 3 }}
          sx={{ py: 8 }}
          justifyContent={{ md: 'space-between' }}
        >
          <Grid xs={12} md={7}>
            <Box
              rowGap={5}
              columnGap={3}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
              }}
            >
              {HIGHLIGHT_FEATURES_2.map((feature) => (
                <AnimatedDiv key={feature.label}>
                  <Box
                    sx={{
                      gap: 2,
                      display: 'flex',
                      textAlign: 'center',
                      alignItems: 'center',
                      typography: 'subtitle2',
                      flexDirection: 'column',
                    }}
                  >
                    <Link component={RouterLink} href={feature.link} color="inherit">
                      <Image
                        alt={feature.icon}
                        src={feature.icon}
                        sx={{ borderRadius: 2, maxHeight: 115, objectFit: 'cover' }}
                      />
                    </Link>
                    <Link component={RouterLink} href={feature.link} color="inherit">
                      {feature.label}
                    </Link>
                  </Box>
                </AnimatedDiv>
              ))}
            </Box>
          </Grid>

          <Grid xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <AnimatedDiv>
              <Typography variant="h2" sx={{ my: 3 }}>
                {t('smartHome.highlights.groups.renovationAndHVAC')}
              </Typography>
            </AnimatedDiv>
          </Grid>
        </Grid>

        <Grid
          container
          disableEqualOverflow
          spacing={{ xs: 5, md: 3 }}
          sx={{ py: 8 }}
          justifyContent={{ md: 'space-between' }}
        >
          <Grid xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <AnimatedDiv>
              <Typography variant="h2" sx={{ my: 3 }}>
                {t('smartHome.highlights.groups.movingAndLifting')}
              </Typography>
            </AnimatedDiv>
          </Grid>

          <Grid xs={12} md={7}>
            <Box
              rowGap={5}
              columnGap={3}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
              }}
            >
              {HIGHLIGHT_FEATURES_3.map((feature) => (
                <AnimatedDiv key={feature.label}>
                  <Box
                    sx={{
                      gap: 2,
                      display: 'flex',
                      textAlign: 'center',
                      alignItems: 'center',
                      typography: 'subtitle2',
                      flexDirection: 'column',
                    }}
                  >
                    <Link component={RouterLink} href={feature.link} color="inherit">
                      <Image
                        alt={feature.icon}
                        src={feature.icon}
                        sx={{ borderRadius: 2, maxHeight: 115, objectFit: 'cover' }}
                      />
                    </Link>
                    <Link component={RouterLink} href={feature.link} color="inherit">
                      {feature.label}
                    </Link>
                  </Box>
                </AnimatedDiv>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          disableEqualOverflow
          spacing={{ xs: 5, md: 3 }}
          sx={{ py: 8 }}
          justifyContent={{ md: 'space-between' }}
        >
          <Grid xs={12} md={7}>
            <Box
              rowGap={5}
              columnGap={3}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
              }}
            >
              {HIGHLIGHT_FEATURES_4.map((feature) => (
                <AnimatedDiv key={feature.label}>
                  <Box
                    sx={{
                      gap: 2,
                      display: 'flex',
                      textAlign: 'center',
                      alignItems: 'center',
                      typography: 'subtitle2',
                      flexDirection: 'column',
                    }}
                  >
                    <Link component={RouterLink} href={feature.link} color="inherit">
                      <Image
                        alt={feature.icon}
                        src={feature.icon}
                        sx={{ borderRadius: 2, maxHeight: 115, objectFit: 'cover' }}
                      />
                    </Link>
                    <Link component={RouterLink} href={feature.link} color="inherit">
                      {feature.label}
                    </Link>
                  </Box>
                </AnimatedDiv>
              ))}
            </Box>
          </Grid>

          <Grid xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <AnimatedDiv>
              <Typography variant="h2" sx={{ my: 3 }}>
                {t('smartHome.highlights.groups.cleaningAndHomeHelp')}
              </Typography>
            </AnimatedDiv>
          </Grid>
        </Grid>

        <Grid
          container
          disableEqualOverflow
          spacing={{ xs: 5, md: 3 }}
          sx={{ py: 8 }}
          justifyContent={{ md: 'space-between' }}
        >
          <Grid xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <AnimatedDiv>
              <Typography variant="h2" sx={{ my: 3 }}>
                {t('smartHome.highlights.groups.appliancesAndDevices')}
              </Typography>
            </AnimatedDiv>
          </Grid>

          <Grid xs={12} md={7}>
            <Box
              rowGap={5}
              columnGap={3}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
              }}
            >
              {HIGHLIGHT_FEATURES_5.map((feature) => (
                <AnimatedDiv key={feature.label}>
                  <Box
                    sx={{
                      gap: 2,
                      display: 'flex',
                      textAlign: 'center',
                      alignItems: 'center',
                      typography: 'subtitle2',
                      flexDirection: 'column',
                    }}
                  >
                    <Link component={RouterLink} href={feature.link} color="inherit">
                      <Image
                        alt={feature.icon}
                        src={feature.icon}
                        sx={{ borderRadius: 2, maxHeight: 115, objectFit: 'cover' }}
                      />
                    </Link>
                    <Link component={RouterLink} href={feature.link} color="inherit">
                      {feature.label}
                    </Link>
                  </Box>
                </AnimatedDiv>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
