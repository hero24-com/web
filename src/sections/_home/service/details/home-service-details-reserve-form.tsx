import { useHubspotForm } from 'next-hubspot';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';

// ----------------------------------------------------------------------

export default function HomeServiceDetailsReserveForm() {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: '143729222',
    formId: '4531c797-8991-44c8-8a66-728658006f6d',
    target: '#hubspot-form-wrapper',
  });

  return (
    <Card>
      <Stack spacing={3} sx={{ p: 3 }}>
        <Box id="hubspot-form-wrapper"></Box>
      </Stack>
    </Card>
  );
}
