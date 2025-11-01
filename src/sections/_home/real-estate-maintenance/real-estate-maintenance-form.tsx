'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';

import { useHubspotForm } from 'src/hooks/use-hubspot-form';

// ----------------------------------------------------------------------

type Props = {
  formId: string;
};

export default function RealEstateMaintenanceForm({ formId }: Props) {
  const t = useTranslations();
  const uniqueFormId = useHubspotForm(formId, {
    subject: t('realEstate.form.subject'),
  });

  return (
    <Container
      sx={{
        overflow: 'hidden',
        pb: { xs: 10, md: 15 },
      }}
    >
      <Card>
        <Stack spacing={3} sx={{ p: 3 }}>
          <Typography variant="h4">{t('realEstate.form.title')}</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            {t('realEstate.form.description')}
          </Typography>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack spacing={3} sx={{ p: 3 }}>
          <Box id={uniqueFormId} />
        </Stack>
      </Card>
    </Container>
  );
}
