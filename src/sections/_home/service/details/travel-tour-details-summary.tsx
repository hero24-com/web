import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { TOUR_SERVICE_OPTIONS } from 'src/_mock';

import Iconify from 'src/components/iconify';

import { ITourProps } from 'src/types/tour';

// ----------------------------------------------------------------------

type Props = {
  tour: ITourProps;
};

export default function TravelTourDetailsSummary({ tour }: Props) {
  const {
    program,
    services,
    highlights,
    description,
  } = tour;

  return (
    <Stack spacing={5}>
      <Stack spacing={2}>
        <Typography variant="h5">Tour Description</Typography>
        <Typography>{description}</Typography>
      </Stack>

      <Stack spacing={2}>
        <Typography variant="h5">Tour Highlights</Typography>

        <ul>
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </Stack>

      <Stack spacing={2}>
        <Typography variant="h6"> Services</Typography>

        <Box
          rowGap={2}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          {TOUR_SERVICE_OPTIONS.map((service) => (
            <Stack
              key={service.label}
              spacing={1}
              direction="row"
              alignItems="center"
              sx={{
                ...(services.includes(service.label) && {
                  color: 'text.disabled',
                }),
              }}
            >
              <Iconify
                icon="carbon:checkmark"
                sx={{
                  color: 'primary.main',
                  ...(services.includes(service.label) && {
                    color: 'text.disabled',
                  }),
                }}
              />
              {service.label}
            </Stack>
          ))}
        </Box>
      </Stack>

      <Stack spacing={2}>
        <Typography variant="h5">Tour Program</Typography>
        {program.map((content) => (
          <HighlightItem key={content.label} label={content.label} text={content.text} />
        ))}
      </Stack>
    </Stack>
  );
}

// ----------------------------------------------------------------------

type HighlightItemProps = {
  label: string;
  text: string;
};

function HighlightItem({ label, text }: HighlightItemProps) {
  return (
    <Stack spacing={1}>
      <Typography
        variant="subtitle1"
        sx={{ color: 'primary.main', display: 'flex', alignItems: 'center' }}
      >
        <Box
          component="span"
          sx={{
            width: 12,
            height: 2,
            borderRadius: 1,
            bgcolor: 'currentColor',
            mr: 1.5,
          }}
        />
        {label}
      </Typography>
      <Typography>{text}</Typography>
    </Stack>
  );
}
