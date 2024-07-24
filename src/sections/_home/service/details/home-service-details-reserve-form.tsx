import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// ----------------------------------------------------------------------

type Props = {
  formId: string;
};

export default function HomeServiceDetailsReserveForm({ formId }: Props) {
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
          formId: formId,
          target: '#hubspot-form-wrapper',
        });
      }
    });
  }, []);

  return (
    <Grid>
      <Typography variant="h4" component="h1" sx={{ mt: 1, mb: 6 }}>
        Pyydä tarjous, vapaita aikoja vaikka samalle päivälle!
      </Typography>
      <Box id="hubspot-form-wrapper"></Box>
    </Grid>
  );
}
