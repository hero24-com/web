import type { ISmartHomeProps } from 'src/types/smart-home';

import { useTranslations } from 'next-intl';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Label from 'src/components/label';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

type Props = {
  plan: ISmartHomeProps;
};

export default function SmartHomePricingHeader({ plan }: Props) {
  const proLicense = plan.license === 'Gold';
  const t = useTranslations();

  return (
    <Stack
      spacing={2}
      alignItems={{ xs: 'flex-start', md: 'center' }}
      sx={{
        px: 3,
        py: 5,
        position: 'relative',
        ...(proLicense && {
          bgcolor: { md: 'background.neutral' },
          borderRadius: '16px 16px 0 0',
        }),
      }}
    >
      {proLicense && (
        <Label color="info" sx={{ position: 'absolute', top: 16, right: 16 }}>
          {t('smartHome.pricing.popular')}
        </Label>
      )}

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={0.5}
        sx={{
          ...(proLicense && {
            color: { md: 'primary.main' },
          }),
        }}
      >
        <Typography variant="h4" component="span">
          €
        </Typography>

        <Typography variant="h3" component="span">
          {plan.price}
        </Typography>

        <Typography variant="subtitle2" component="span">
          {t('smartHome.pricing.perMonth')}
        </Typography>
      </Stack>

      <SvgColor
        src={plan.icon}
        sx={{
          width: 64,
          height: 64,
          mx: 'auto',
          bgcolor: 'primary.main',
        }}
      />
    </Stack>
  );
}
