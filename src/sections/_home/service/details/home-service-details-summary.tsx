import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { HOME_SERVICE_OPTIONS } from 'src/_mock';

import Iconify from 'src/components/iconify';

import { IServiceProps } from 'src/types/service';

// ----------------------------------------------------------------------

type Props = {
  service: IServiceProps;
};

export default function HomeServiceDetailsSummary({ service }: Props) {
  const {
    services,
    description,
    highlights1,
    highlights2,
    highlights3,
    reasons1,
    reasons2,
    reasons3,
  } = service;

  return (
    <Stack spacing={5}>
      <Stack spacing={2}>
        <Typography variant="h5">Kuvaus</Typography>
        <Typography>{description}</Typography>
      </Stack>

      <Stack spacing={2}>
        <Typography variant="h5">Palvelumme sisältävät</Typography>
        <ul>
          <li>{highlights1}</li>
          <li>{highlights2}</li>
          <li>{highlights3}</li>
        </ul>
      </Stack>

      <Stack spacing={2}>
        <Typography variant="h5">Miksi valita Hero24?</Typography>
        <ul>
          <li>{reasons1}</li>
          <li>{reasons2}</li>
          <li>{reasons3}</li>
        </ul>
      </Stack>

      <Stack spacing={2}>
        <Typography variant="h6">Muita palveluita</Typography>

        <Box
          rowGap={2}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          {HOME_SERVICE_OPTIONS.map((service) => (
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
    </Stack>
  );
}
