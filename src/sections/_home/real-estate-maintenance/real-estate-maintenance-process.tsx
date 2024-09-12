import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'success'] as const;

const STEPS = [
  {
    name: 'Vähennysoikeus',
    description:
      ' Vähennysoikeus kattaa osan huoltopalveluiden työosuudesta, ja vuonna 2024 maksimimäärä on 3 500 € per henkilö vuodessa.',
    icon: '/assets/icons/ic_money.svg',
  },
  {
    name: 'Vähennys',
    description:
      'Vähennys on jopa 60 % työn osuudesta, mikä voi merkittävästi pienentää kustannuksia.',
    icon: '/assets/icons/ic_report.svg',
  },
];

// ----------------------------------------------------------------------

export default function RealEstateMaintenanceProcess({ sx, ...other }: BoxProps) {
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
      <Container>
        <Stack
          spacing={3}
          sx={{
            mb: 5,
            maxWidth: 900,
            mx: { xs: 'auto', md: 'unset' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Typography variant="h2">Kotitalousvähennys Kiinteistön Huollossa</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Hyödynnä kotitalousvähennys kiinteistön huoltokustannuksista.
          </Typography>
        </Stack>

        <Box
          gap={4}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          sx={{ alignItems: 'flex-end' }}
        >
          {STEPS.map((item, index) => (
            <ServiceItem key={item.name} item={item} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type ServiceItemProps = {
  index: number;
  item: {
    name: string;
    icon: string;
    description: string;
  };
};

function ServiceItem({ item, index }: ServiceItemProps) {
  return (
    <Card
      sx={(theme) => ({
        p: 2,
        color: theme.palette[COLORS[index]].darker,
        bgcolor: theme.palette[COLORS[index]].light,
        ...(index > 0 && {
          mb: { md: index * 2.5 },
        }),
      })}
    >
      <SvgColor
        src={item.icon}
        sx={{
          width: 64,
          height: 64,
          mx: 'auto',
        }}
      />

      <Typography component="h6" variant="h5" sx={{ mt: 3, textAlign: 'right' }}>
        {item.name}
      </Typography>
      <Typography sx={{ mt: 3, textAlign: 'left' }}>{item.description}</Typography>
    </Card>
  );
}
