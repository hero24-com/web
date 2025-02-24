import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useHubspotForm } from 'src/hooks/use-hubspot-form';

// ----------------------------------------------------------------------

type Props = {
  formId: string;
};

export default function RealEstateMaintenanceForm({ formId }: Props) {
  const uniqueFormId = useHubspotForm(formId);

  return (
    <Container
      sx={{
        overflow: 'hidden',
        pb: { xs: 10, md: 15 },
      }}
    >
      <Card>
        <Stack spacing={3} sx={{ p: 3 }}>
          <Typography variant="h4">Yhteydenotto</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Ota yhteyttä, niin räätälöimme teille parhaan mahdollisen ratkaisun kiinteistönhuoltoon.
            Tarjoamme mielellämme lisätietoja ja keskustelemme teidän tarpeistanne tarkemmin.
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
