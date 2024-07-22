import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

type Props = {
  formId: string;
};

export default function HomeJoinForm({ formId }: Props) {
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
    <Container
      sx={{
        overflow: 'hidden',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Grid xs={12} md={6} lg={6}>
        <Typography variant="h3" sx={{ mb: 5 }}>
          Tule mukaan luomaan parempaa tulevaisuutta!
        </Typography>

        <Box id="hubspot-form-wrapper"></Box>
      </Grid>
    </Container>
  );
}
