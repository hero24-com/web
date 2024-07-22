import { useEffect } from 'react';
import { useHubspotForm } from 'next-hubspot';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

// ----------------------------------------------------------------------

type Props = {
  formId: string;
};

export default function HomeContactForm({ formId }: Props) {
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
    <Stack spacing={2.5} alignItems="flex-start">
      <Box id="hubspot-form-wrapper"></Box>
    </Stack>
  );
}
