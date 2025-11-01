'use client';
import { useTranslations } from 'next-intl';
import type { IServiceProps } from 'src/types/service';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { HOME_SERVICE_OPTIONS } from 'src/_mock';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  service: IServiceProps;
};

export default function HomeServiceDetailsSummary({ service }: Props) {
  const t = useTranslations();
  const {
    services,
    description,
    highlights1,
    highlights2,
    highlights3,
    reasons1,
    reasons2,
    reasons3,
    slugKey,
  } = service;

  const baseKey = slugKey.replace('nav.links.', 'services.pages.');
  const tr = (key: string, fallback: string) => {
    const value = t(key);
    return value === key ? fallback : value;
  };

  return (
    <Stack spacing={5}>
      <Stack spacing={2}>
        <Typography variant="h5">{t('services.details.descriptionTitle')}</Typography>
        <Typography>{tr(`${baseKey}.description`, description)}</Typography>
      </Stack>

      <Stack spacing={2}>
        <Typography variant="h5">{t('services.details.includesTitle')}</Typography>
        <ul>
          <li>{tr(`${baseKey}.includes.0`, highlights1)}</li>
          <li>{tr(`${baseKey}.includes.1`, highlights2)}</li>
          <li>{tr(`${baseKey}.includes.2`, highlights3)}</li>
        </ul>
      </Stack>

      <Stack spacing={2}>
        <Typography variant="h5">{t('services.details.whyTitle')}</Typography>
        <ul>
          <li>{tr(`${baseKey}.reasons.0`, reasons1)}</li>
          <li>{tr(`${baseKey}.reasons.1`, reasons2)}</li>
          <li>{tr(`${baseKey}.reasons.2`, reasons3)}</li>
        </ul>
      </Stack>

      <Stack spacing={2}>
        <Typography variant="h6">{t('services.details.moreServicesTitle')}</Typography>

        <Box
          rowGap={2}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          {HOME_SERVICE_OPTIONS.map((serviceOption) => (
            <Stack
              key={serviceOption.label}
              spacing={1}
              direction="row"
              alignItems="center"
              sx={{
                ...(services.includes(serviceOption.label) && {
                  color: 'text.disabled',
                }),
              }}
            >
              <Iconify
                icon="carbon:checkmark"
                sx={{
                  color: 'primary.main',
                  ...(services.includes(serviceOption.label) && {
                    color: 'text.disabled',
                  }),
                }}
              />
              {t(`nav.links.${serviceOption.label}`)}
            </Stack>
          ))}
        </Box>
      </Stack>
    </Stack>
  );
}
