import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { _services } from 'src/_mock';

import HomeServiceList from '../service/list/home-service-list';

// ----------------------------------------------------------------------

export default function HomeService() {
  return ( 
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack spacing={3} sx={{ textAlign: 'center', py: { xs: 5, md: 10 } }}>
        <Typography variant="h3">Palvelut kotiin, kiinteistöille ja yrityksille</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          {`Hero24in kautta kodin kaikki palvelut helposti ympäri Suomea!`}
        </Typography>
      </Stack>

        <HomeServiceList services={_services} />
    </Container>
  );
}
