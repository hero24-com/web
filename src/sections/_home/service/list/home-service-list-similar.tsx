import type { IServiceProps } from 'src/types/service';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import HomeServiceItem from './home-service-item';

// ----------------------------------------------------------------------

type Props = {
  services: IServiceProps[];
};

export default function HomeServiceListSimilar({ services }: Props) {
  return (
    <Box sx={{ bgcolor: 'background.neutral' }}>
      <Container
        sx={{
          py: { xs: 10, md: 15 },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{
            mb: { xs: 8, md: 10 },
          }}
        >
          <Typography variant="h3">Suositellut palvelut</Typography>
        </Stack>

        <Box
          sx={{
            display: 'grid',
            gap: { xs: 4, md: 3 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
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
    </Box>
  );
}
