import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

const BENEFITS = [
  {
    title: 'Kodin/kiinteistön ylläpitopalvelut',
    iconColor: 'primary',
  },
  {
    title: 'Kodin kunnostustyöt',
    iconColor: 'success',
  },
  {
    title: 'Kodin muutot, kantoapu, tavaroiden kuljetuspalevlut',
    iconColor: 'secondary',
  },
  {
    title: 'Huoltotyöt ja tarkastukset',
    iconColor: 'secondary',
  },
  {
    title: 'Ylläpitotoimenpiteet ja korjaustyöt',
    iconColor: 'success',
  },
  {
    title: 'Proaktiivinen korjaaminen ja huolto',
    iconColor: 'primary',
  },
];

// ----------------------------------------------------------------------

export default function SmartHomeBenefits() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          Mitä palvelupakettimme sisältää?
        </Typography>

        <Typography
          sx={{
            mt: 3,
            mx: 'auto',
            opacity: 0.72,
            maxWidth: 800,
            textAlign: 'center',
            mb: { xs: 8, md: 10 },
          }}
        >
          Valikoimamme Älykäs Huoleton koti -palvelupaketit on suunniteltu
          tarjoamaan kattavaa ja räätälöityä kodin ja kiinteistön kunnostus-,
          huolto- ja ylläpitopalvelua jokaiseen tarpeeseen. Palvelupaketteihimme
          sisältyy kaikki Hero24 palvelut, muun muassa:
        </Typography>

        <Box
          sx={{
            display: 'grid',
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
            gridTemplateColumns: { md: 'repeat(3, 1fr)' },
          }}
        >
          <Stack spacing={{ xs: 4, md: 10 }}>
            {BENEFITS.slice(0, 3).map((benefit, index) => (
              <BenefitItem
                key={benefit.title}
                benefit={benefit}
                index={index}
                reverse
              />
            ))}
          </Stack>

          {mdUp && (
            <Image
              alt="benefits"
              src="/assets/illustrations/illustration_maintenance.svg"
            />
          )}

          <Stack spacing={{ xs: 4, md: 10 }}>
            {BENEFITS.slice(-3).map((benefit, index) => (
              <BenefitItem
                key={benefit.title}
                benefit={benefit}
                index={index}
              />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type BenefitItemProps = {
  index: number;
  reverse?: boolean;
  benefit: {
    title: string;
    iconColor: string;
  };
};

function BenefitItem({ benefit, reverse, index }: BenefitItemProps) {
  const { title, iconColor } = benefit;

  return (
    <Stack
      spacing={1}
      direction={{ xs: 'row', md: reverse ? 'row-reverse' : 'row' }}
      sx={{
        ...(reverse && {
          textAlign: { md: 'right' },
        }),
        ...(index === 1 && {
          pl: { md: 6 },
          ...(reverse && {
            pl: { md: 0 },
            pr: { md: 6 },
          }),
        }),
      }}
    >
      <Box
        sx={{
          m: 1,
          width: 16,
          height: 16,
          flexShrink: 0,
          borderRadius: '50%',
          background: (theme) =>
            `linear-gradient(to bottom, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
          ...(iconColor === 'secondary' && {
            background: (theme) =>
              `linear-gradient(to bottom, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
          }),
          ...(iconColor === 'success' && {
            background: (theme) =>
              `linear-gradient(to bottom, ${theme.palette.success.light}, ${theme.palette.success.main})`,
          }),
        }}
      />

      <Stack spacing={1}>
        <Typography variant="h5">{title}</Typography>
      </Stack>
    </Stack>
  );
}
