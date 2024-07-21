import { useCallback } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { fCurrency } from 'src/utils/format-number';

import { ITourProps } from 'src/types/tour';

// ----------------------------------------------------------------------

type Props = {
  tour: ITourProps;
};

export default function TravelTourDetailsReserveForm({ tour }: Props) {
  const router = useRouter();

  const { price, priceSale } = tour;


  const handleClickReserve = useCallback(() => {
    router.push(paths.travel.checkout);
  }, [router]);

  return (
    <Card>
      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack spacing={1} direction="row" alignItems="center" sx={{ typography: 'h4' }}>
          {priceSale > 0 && (
            <Box sx={{ color: 'grey.500', textDecoration: 'line-through', mr: 1 }}>
              {fCurrency(priceSale)}
            </Box>
          )}

          {fCurrency(price)}
          <Typography variant="body2" component="span" sx={{ color: 'text.disabled', ml: 1 }}>
            /Tour
          </Typography>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            Service charge
          </Typography>
          <Typography variant="body2">{fCurrency(priceSale) || '-'}</Typography>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            Discount
          </Typography>
          <Typography variant="body2"> - </Typography>
        </Stack>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h5">Total</Typography>
          <Typography variant="h5">{fCurrency(priceSale)}</Typography>
        </Stack>

        <Button size="large" variant="contained" color="inherit" onClick={handleClickReserve}>
          Reserve
        </Button>
      </Stack>
    </Card>
  );
}
