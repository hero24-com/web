import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

const VISIONS = [
  {
    description:
      'Tarvitaan pelkkä lomake mistä sankari voi lähettää laskun asiakkaalle',
  },
  {
    description: 'Siinä pitää olla ruksit mitä palveluja haluaa',
  },
  {
    description: 'Nyt on tuplana toi 6 ja 8% tossa sivustolla',
  },
  {
    description:
      'Eli käytännössä mitä sankarit tarvii ketä vaan haluaa laskuttaa tai käyttää Hero24 vakuutuksia/palkan laskentaa, niin tarvi simppelin lomakkeen. Toi hubslomake tuolla ilmeisesti, että ilmoittautuu tollaiseksi ketä haluaa käyttää pavlelua. Mutta pää toiminto on se, että muodostaa omille asiakkailleen laskuja, eli meillä pitää olla joku lomake mikä annetaan kaikille käyttöön kun ilmottautunut meille',
  },
];

// ----------------------------------------------------------------------

export default function HomeOwnCustomerJoinOurVision() {
  return (
    <Container
      sx={{
        overflow: 'hidden',
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          maxWidth: 466,
          mb: { xs: 8, md: 5 },
          mx: { xs: 'auto', md: 'unset' },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography variant="h3">Mitä odotamme sinulta?</Typography>
      </Stack>

      <Grid
        container
        spacing={{ xs: 8, md: 3 }}
        justifyContent="space-between"
        alignItems={{ md: 'center' }}
      >
        <Grid xs={12} md={6} lg={4}>
          <Image
            alt="vision"
            src="/assets/illustrations/illustration_benefits.svg"
          />
        </Grid>

        <Grid xs={12} md={6} lg={7}>
          <Stack alignItems={{ md: 'flex-end' }} sx={{ position: 'relative' }}>
            {VISIONS.map((vision, index) => {
              const { description } = vision;

              const firstVision = index === 0;

              const secondVision = index === 1;

              const thirdVision = index === 2;

              const fourthVision = index === 3;

              return (
                <Card
                  key={index}
                  sx={{
                    p: 4,
                    mt: 4,
                    width: { md: 'calc(50% - 16px)' },
                    ...(firstVision && {
                      top: { md: 0 },
                      left: { md: 0 },
                      bottom: { md: 0 },
                      my: { md: 'auto' },
                      boxShadow: { md: 0 },
                      maxHeight: { md: 304 },
                      display: { md: 'flex' },
                      position: { md: 'absolute' },
                      flexDirection: { md: 'column' },
                      justifyContent: { md: 'center' },
                    }),
                    ...(secondVision && {
                      boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
                    }),
                    ...(thirdVision && {
                      boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
                    }),
                    ...(fourthVision && {
                      boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
                    }),
                  }}
                >
                  <Typography
                    variant="h1"
                    component="h2"
                    sx={{ color: 'text.secondary', opacity: 0.24, mb: 3 }}
                  >
                    {`0${index + 1}`}
                  </Typography>

                  <Typography sx={{ color: 'text.primary' }}>
                    {description}
                  </Typography>
                </Card>
              );
            })}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
