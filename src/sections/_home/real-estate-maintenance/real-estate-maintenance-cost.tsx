'use client';

import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SERVICE_ICONS = [
  '/assets/icons/ic_search.svg',
  '/assets/icons/ic_agreement.svg',
  '/assets/icons/ic_optimization.svg',
];

// ----------------------------------------------------------------------

export default function RealEstateMaintenanceCost({ sx, ...other }: BoxProps) {
  const t = useTranslations();
  const SERVICES = [0, 1, 2].map((i) => ({
    name: t(`realEstate.cost.items.${i}.name`),
    icon: SERVICE_ICONS[i],
    content1: t(`realEstate.cost.items.${i}.content1`),
    content2: t(`realEstate.cost.items.${i}.content2`),
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
          <Typography variant="h2">{t('realEstate.cost.title')}</Typography>

          <Typography sx={{ color: 'text.secondary' }}>{t('realEstate.cost.intro')}</Typography>
        </Stack>

        <Box
          gap={4}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
          sx={{ alignItems: 'center' }}
        >
          {SERVICES.map((item, index) => (
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
    content1: string;
    content2?: string;
  };
};

function ServiceItem({ item, index }: ServiceItemProps) {
  return (
    <Paper
      variant="outlined"
      sx={(theme) => ({
        px: 4,
        py: 5,
        borderRadius: 2,
        textAlign: 'center',
        bgcolor: 'transparent',
        boxShadow: theme.customShadows.card,
        minHeight: 500,
      })}
    >
      <SvgColor
        src={item.icon}
        color="info"
        sx={{
          width: 64,
          height: 64,
          mx: 'auto',
          bgcolor: 'primary.main',
        }}
      />

      <Box sx={{ my: 5 }}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          {item.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.content1}
        </Typography>
        <br />
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.content2}
        </Typography>
      </Box>
    </Paper>
  );
}
