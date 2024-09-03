import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { _smartHome } from 'src/_mock';

import Iconify from 'src/components/iconify';

import { ISmartHomeProps } from 'src/types/smart-home';

// ----------------------------------------------------------------------

type Props = {
  plan: ISmartHomeProps;
};

export default function SmartHomePricingContentDesktop({ plan }: Props) {
  const startLicense = plan.license === 'Premium';

  const proLicense = plan.license === 'Gold';

  const businessLicense = plan.license === 'Platinum';

  const subscribeLink = startLicense
    ? _smartHome[0].buy
    : proLicense
      ? _smartHome[1].buy
      : _smartHome[2].buy;

  return (
    <Box>
      {plan.options.map((option) => (
        <Stack
          key={option.title}
          alignItems="center"
          justifyContent="center"
          sx={{
            height: 72,
            color: 'text.secondary',
            borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
            ...(proLicense && {
              bgcolor: 'background.neutral',
            }),
          }}
        >
          {option.disabled ? (
            '-'
          ) : (
            <Iconify
              icon="carbon:checkmark"
              sx={{ width: 24, height: 24, color: 'primary.main' }}
            />
          )}
        </Stack>
      ))}

      <Stack
        sx={{
          py: 5,
          ...(proLicense && {
            bgcolor: 'background.neutral',
            borderRadius: '0 0 16px 16px',
          }),
        }}
      >
        <Button
          size="large"
          variant={startLicense ? 'contained' : 'outlined'}
          color="inherit"
          sx={{ mx: 'auto' }}
          href={subscribeLink}
          target="_blank"
          rel="noopener"
        >
          {startLicense && 'Start Premium Plan'}
          {proLicense && 'Start Gold Plan'}
          {businessLicense && 'Start Platinum Plan'}
        </Button>
      </Stack>
    </Box>
  );
}
