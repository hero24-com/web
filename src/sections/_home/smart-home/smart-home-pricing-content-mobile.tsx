import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';

import { useBoolean } from 'src/hooks/use-boolean';

import { _smartHome } from 'src/_mock';

import Iconify from 'src/components/iconify';

import { ISmartHomeProps } from 'src/types/smart-home';

// ----------------------------------------------------------------------

type Props = {
  plan: ISmartHomeProps;
};

export default function SmartHomePricingContentMobile({ plan }: Props) {
  const contentOpen = useBoolean();

  const startLicense = plan.license === 'Premium';

  const proLicense = plan.license === 'Gold';

  const businessLicense = plan.license === 'Platinum';

  const subscribeLink = startLicense
    ? _smartHome[0].buy
    : proLicense
      ? _smartHome[1].buy
      : _smartHome[2].buy;

  return (
    <Stack spacing={5} sx={{ px: 3, pb: 5 }}>
      <div>
        <Link
          variant="subtitle2"
          color={contentOpen.value ? 'primary' : 'inherit'}
          onClick={contentOpen.onToggle}
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          {contentOpen.value ? 'Hide' : 'Show'} kaikki ominaisuus
          <Iconify
            icon={
              contentOpen.value ? 'carbon:chevron-up' : 'carbon:chevron-down'
            }
            sx={{ ml: 1 }}
          />
        </Link>

        <Collapse unmountOnExit in={contentOpen.value}>
          <Stack spacing={2} sx={{ pt: 3 }}>
            {plan.options.map((option) => (
              <Stack
                key={option.title}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  variant="body2"
                  sx={{
                    ...(option.disabled && {
                      color: 'text.disabled',
                    }),
                  }}
                >
                  {option.title}
                </Typography>

                <Iconify
                  icon={
                    option.disabled
                      ? 'carbon:close-outline'
                      : 'carbon:checkmark'
                  }
                  sx={{
                    color: 'primary.main',
                    ...(option.disabled && {
                      color: 'text.disabled',
                    }),
                  }}
                />
              </Stack>
            ))}
          </Stack>
        </Collapse>
      </div>

      <Button
        fullWidth
        size="large"
        variant={startLicense ? 'contained' : 'outlined'}
        color="inherit"
        href={subscribeLink}
        target="_blank"
        rel="noopener"
      >
        {startLicense && 'Tilaa huoleton asuminen'}
        {proLicense && 'Tilaa huoleton asuminen'}
        {businessLicense && 'Tilaa huoleton asuminen'}
      </Button>
    </Stack>
  );
}
