import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

import Iconify from 'src/components/iconify';

import { IServiceProps } from 'src/types/service';

// ----------------------------------------------------------------------

type Props = {
  service: IServiceProps;
};

export default function HomeServiceDetailsHeader({ service }: Props) {
  const { slug } = service;

  return (
    <>
      <Stack
        spacing={3}
        direction={{ xs: 'column', md: 'row' }}
        sx={{
          mb: 3,
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{ flexGrow: 1, pr: { md: 10 } }}
        >
          {slug}
        </Typography>
        <Alert severity="success">Tilaa nyt. Maksa miten haluat.</Alert>
      </Stack>

      <Stack spacing={3} direction={{ xs: 'column', md: 'row' }}>
        <Stack direction="row" alignItems="center" sx={{ typography: 'h6' }}>
          <Fab size="medium" color="primary" sx={{ mr: 1 }}>
            <Iconify width={24} icon="carbon:phone" />
          </Fab>
          09 42452538
        </Stack>

        <Stack direction="row" alignItems="center" sx={{ typography: 'h6' }}>
          <Fab size="medium" color="info" sx={{ mr: 1 }}>
            <Iconify width={24} icon="carbon:email" />
          </Fab>
          support@hero24.com
        </Stack>
      </Stack>
    </>
  );
}
