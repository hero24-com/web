import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

import { _socials } from 'src/_mock';

import { fCurrency } from 'src/utils/format-number';

import Iconify from 'src/components/iconify';

import { IServiceProps } from 'src/types/service';

// ----------------------------------------------------------------------

type Props = {
  service: IServiceProps;
};

export default function HomeServiceDetailsHeader({ service }: Props) {
  const { slug, ratingNumber, totalReviews, price, priceSale } = service;

  return (
    <>
      <Stack
        spacing={3}
        direction={{ xs: 'column', md: 'row' }}
        sx={{
          mb: 3,
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{ flexGrow: 1, pr: { md: 10 } }}
        >
          {slug}
        </Typography>
      </Stack>

      <Stack spacing={3} direction={{ xs: 'column', md: 'row' }}>
        <Stack spacing={0.5} direction="row" alignItems="center">
          <Iconify icon="carbon:star-filled" sx={{ color: 'warning.main' }} />

          <Box sx={{ typography: 'h6' }}>
            {Number.isInteger(ratingNumber)
              ? `${ratingNumber}.0`
              : ratingNumber}
          </Box>

          <Link variant="body2" sx={{ color: 'text.secondary' }}>
            ({fShortenNumber(totalReviews)} reviews)
          </Link>
        </Stack>

        <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
          <Iconify icon="carbon:money" sx={{ mr: 0.5 }} />
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
    </>
  );
}
