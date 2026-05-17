'use client';

import type { IServiceProps } from 'src/types/service';

import { useTranslations } from 'next-intl';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import { RouterLink } from 'src/routes/components';

import { fCurrency } from 'src/utils/format-number';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

type Props = {
  service: IServiceProps;
};

export default function HomeServiceItem({ service }: Props) {
  const t = useTranslations();
  const { slugKey, serviceSlug, price, priceSale, ratingNumber, coverUrl } = service;
  const serviceName = t(slugKey);

  return (
    <Card>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pt: 1.5,
          pl: 2,
          pr: 1.5,
          top: 0,
          width: 1,
          zIndex: 9,
          position: 'absolute',
        }}
      >
        <Stack
          spacing={0.5}
          direction="row"
          sx={{
            px: 1,
            borderRadius: 0.75,
            typography: 'subtitle2',
            bgcolor: 'text.primary',
            color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
          }}
        >
          {priceSale > 0 && (
            <Box
              sx={{
                color: 'grey.500',
                textDecoration: 'line-through',
                mr: 0.5,
              }}
            >
              {fCurrency(priceSale)}*
            </Box>
          )}
          {fCurrency(price)}*
        </Stack>
      </Stack>

      <Link component={RouterLink} href={`/${serviceSlug}`} color="inherit">
        <Image alt={serviceName} src={coverUrl} ratio="1/1" />
      </Link>

      <Stack spacing={0.5} sx={{ p: 2.5 }}>
        <Link component={RouterLink} href={`/${serviceSlug}`} color="inherit">
          <TextMaxLine variant="h4" persistent>
            {serviceName}
          </TextMaxLine>
        </Link>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack direction="row" alignItems="center" sx={{ p: 2.5 }}>
        <Stack
          flexGrow={1}
          direction="row"
          alignItems="center"
          sx={{ typography: 'body2', color: 'text.disabled' }}
        >
          <Button variant="contained" color="inherit" href={`/${serviceSlug}`} rel="noopener">
            {t('services.common.orderNowPayLater')}
          </Button>
        </Stack>

        <Stack spacing={0.5} direction="row" alignItems="center">
          <Iconify icon="carbon:star-filled" sx={{ color: 'warning.main' }} />
          <Box sx={{ typography: 'h6' }}>
            {Number.isInteger(ratingNumber) ? `${ratingNumber}.0` : ratingNumber}
          </Box>
        </Stack>
      </Stack>
    </Card>
  );
}
