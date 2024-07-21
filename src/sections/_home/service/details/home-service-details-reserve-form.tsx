import { useEffect } from 'react';
import { useHubspotForm } from 'next-hubspot';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';

// ----------------------------------------------------------------------

type Props = {
  formId: string;
};

export default function HomeServiceDetailsReserveForm({ formId }: Props) {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: '143729222',
    formId: formId,
    target: '#hubspot-form-wrapper',
  });

  useEffect(() => {
    if (loaded && formCreated) {
      try {
        console.log('Hubspot form created');
      } catch (e) {
        console.warn('Failed to create hubspot form:');
        console.error(e);
      }
    }
  }, [loaded, formCreated]);

  return (
    <Card>
      <Stack spacing={3} sx={{ p: 3 }}>
        <Box id="hubspot-form-wrapper"></Box>
      </Stack>
    </Card>
  );
}
