import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

// ----------------------------------------------------------------------

type Props = {
  formId: string;
};

export default function RealEstateMaintenanceForm({ formId }: Props) {
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
      <Card>
        <Stack spacing={3} sx={{ p: 3 }}>
          <Typography variant="h4">Yhteydenotto</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Ota yhteyttä, niin räätälöimme teille parhaan mahdollisen ratkaisun
            kiinteistönhuoltoon. Tarjoamme mielellämme lisätietoja ja
            keskustelemme teidän tarpeistanne tarkemmin.
          </Typography>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack spacing={3} sx={{ p: 3 }}>
          <Box id="hubspot-form-wrapper"></Box>
        </Stack>
      </Card>
    </Container>
  );
}
