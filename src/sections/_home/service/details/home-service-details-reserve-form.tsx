import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { useHubspotForm } from 'src/hooks/use-hubspot-form';

// ----------------------------------------------------------------------

type Props = {
  formId: string;
};

export default function HomeServiceDetailsReserveForm({ formId }: Props) {
  const uniqueFormId = useHubspotForm(formId);

  return (
    <Card>
      <Stack spacing={3} sx={{ p: 3 }}>
        <Typography variant="h4">Pyydä tarjous, vapaita aikoja vaikka samalle päivälle!</Typography>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Box id={uniqueFormId} />
      </Stack>
    </Card>
  );
}
