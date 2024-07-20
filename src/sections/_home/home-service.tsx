import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { IServiceProps } from 'src/types/service';

import HomeServiceItem from './home-service-item';

// ----------------------------------------------------------------------

type Props = {
  services: IServiceProps[];
};

export default function HomeService({ services }: Props) {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack spacing={3} sx={{ textAlign: 'center' }}>
        <Typography variant="h3">Palvelut kotiin, kiinteistöille ja yrityksille</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          {`Hero24in kautta kodin kaikki palvelut helposti ympäri Suomea!`}
        </Typography>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          my: { xs: 8, md: 10 },
          gap: { xs: 4, md: 3 },
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {services.map((service) => (
          <HomeServiceItem key={service.id} service={service} />
        ))}
      </Box>
    </Container>
  );
}
