import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const HIGHLIGHT_FEATURES_1 = [
  {
    label: 'Pihatyöt: Nurmikon hoito, istutukset ja kausihuollot',
    icon: '/assets/images/service/service_21.webp',
  },
  {
    label: 'Kiinteistöhuolto ja Isännöinti: Ylläpito ja hallinta',
    icon: '/assets/images/service/service_17.webp',
  },
  {
    label: 'Pihan Muutos- ja Rakennustyöt: Rakennelmat ja parannukset',
    icon: '/assets/images/service/service_20.webp',
  },
];

const HIGHLIGHT_FEATURES_2 = [
  {
    label: 'Ilmastointipalvelut: Asennus ja huolto',
    icon: '/assets/images/service/service_1.webp',
  },
  {
    label: 'Remontit ja Rakentaminen: Laajat ja pienet projektit',
    icon: '/assets/images/service/service_19.webp',
  },
  {
    label: 'Sähkötyöt: Asennukset ja korjaukset',
    icon: '/assets/images/service/service_10.webp',
  },
  {
    label: 'Putkityöt: Korjaukset ja huollot',
    icon: '/assets/images/service/service_16.webp',
  },
  {
    label: 'Nikkarointi: Puutyöt ja pienet korjaukset',
    icon: '/assets/images/service/service_12.webp',
  },
  {
    label: 'Asbestikartoitukset: Terveys- ja turvallisuuskartoitus',
    icon: '/assets/images/service/service_2.webp',
  },
];

const HIGHLIGHT_FEATURES_3 = [
  {
    label: 'Muuttopalvelu: Sujuva muuttoapua',
    icon: '/assets/images/service/service_15.webp',
  },
  {
    label: 'Kantoapu: Huonekalujen kantaminen',
    icon: '/assets/images/service/service_14.webp',
  },
  {
    label: 'Kuljetusapu: Tavaroiden kuljetus',
    icon: '/assets/images/service/service_8.webp',
  },
];

const HIGHLIGHT_FEATURES_4 = [
  {
    label: 'Kotisiivous: Säännöllinen ja erikoissiivous',
    icon: '/assets/images/service/service_3.webp',
  },
  {
    label: 'Toimistosiivous: Liike- ja toimistotilojen siivous',
    icon: '/assets/images/service/service_5.webp',
  },
  {
    label: 'Muuttosiivous: Siivous ennen ja jälkeen muuton',
    icon: '/assets/images/service/service_4.webp',
  },
  {
    label: 'Remonttisiivous: Rakennus- ja remonttisiivous',
    icon: '/assets/images/service/service_6.webp',
  },
  {
    label: 'Ikkunanpesu: Ikkunoiden puhdistus',
    icon: '/assets/images/service/service_7.webp',
  },
  {
    label: 'Kotiapu: Yleinen kotiapu ja avustaminen',
    icon: '/assets/images/service/service_9.webp',
  },
];

const HIGHLIGHT_FEATURES_5 = [
  {
    label: 'Kodinkonehuolto: Koneiden korjaus ja huolto',
    icon: '/assets/images/service/service_13.webp',
  },
  {
    label: 'Elektroniikkahuolto: Elektronisten laitteiden korjaus',
    icon: '/assets/images/service/service_11.webp',
  },
  {
    label: 'Kylmälaitteet: Jäähdytys- ja pakastinlaitteiden huolto',
    icon: '/assets/images/service/service_18.webp',
  },
];

// ----------------------------------------------------------------------

function AnimatedDiv({ children }: { children: React.ReactNode }) {
  const variants = varFade({ distance: 24 }).inUp;
  return <m.div variants={variants}>{children}</m.div>;
}

export default function SmartHomeHighlights({ sx, ...other }: BoxProps) {
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
          Palvelut
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
                Pihat ja Kiinteistönhuollot
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
                    <Image
                      alt={feature.icon}
                      src={feature.icon}
                      sx={{ borderRadius: 2, maxHeight: 115, objectFit: 'cover' }}
                    />
                    {feature.label}
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
                    <Image
                      alt={feature.icon}
                      src={feature.icon}
                      sx={{ borderRadius: 2, maxHeight: 115, objectFit: 'cover' }}
                    />
                    {feature.label}
                  </Box>
                </AnimatedDiv>
              ))}
            </Box>
          </Grid>

          <Grid xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <AnimatedDiv>
              <Typography variant="h2" sx={{ my: 3 }}>
                Remontointi ja LVIS
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
                Muuttopalvelu ja Kantoapu
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
                    <Image
                      alt={feature.icon}
                      src={feature.icon}
                      sx={{ borderRadius: 2, maxHeight: 115, objectFit: 'cover' }}
                    />
                    {feature.label}
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
                    <Image
                      alt={feature.icon}
                      src={feature.icon}
                      sx={{ borderRadius: 2, maxHeight: 115, objectFit: 'cover' }}
                    />
                    {feature.label}
                  </Box>
                </AnimatedDiv>
              ))}
            </Box>
          </Grid>

          <Grid xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <AnimatedDiv>
              <Typography variant="h2" sx={{ my: 3 }}>
                Siivous ja Kotiapu
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
                Kodinkoneet ja Laitteet
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
                    <Image
                      alt={feature.icon}
                      src={feature.icon}
                      sx={{ borderRadius: 2, maxHeight: 115, objectFit: 'cover' }}
                    />
                    {feature.label}
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
