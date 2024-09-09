import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

type Props = {
  formId: string;
};

export default function HomeContactForm({ formId }: Props) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/shell.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      // @ts-ignore
      if (window.hbspt) {
        // @ts-ignore
        window.hbspt.forms.create({
          portalId: '143729222',
          formId,
          target: '#hubspot-form-wrapper',
        });
      }
    });
  }, [formId]);

  return (
    <Card>
      <Stack spacing={3} sx={{ p: 3 }}>
        <Typography variant="h4">Yhteystiedot</Typography>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Box id="hubspot-form-wrapper" />
      </Stack>
    </Card>
  );
}
