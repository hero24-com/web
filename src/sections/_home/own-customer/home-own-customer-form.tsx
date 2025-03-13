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
  /**
   * Custom subject line for the form submission
   * @default "Asiakastiedot - Oma asiakas"
   */
  subject?: string;
};

export default function HomeOwnCustomerForm({
  formId,
  subject = 'Asiakastiedot - Oma asiakas',
}: Props) {
  const uniqueFormId = useHubspotForm(formId, {
    subject,
  });

  return (
    <Container
      sx={{
        overflow: 'hidden',
        pt: { xs: 5, md: 10 },
      }}
    >
      <Card>
        <Stack spacing={3} sx={{ p: 3 }}>
          <Typography variant="h4">Täytä seuraavat tiedot:</Typography>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack spacing={3} sx={{ p: 3 }}>
          <Box id={uniqueFormId} />
        </Stack>
      </Card>
    </Container>
  );
}
