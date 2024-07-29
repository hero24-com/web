import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import SvgColor from 'src/components/svg-color';

import { useResponsive } from 'src/hooks/use-responsive';

import { fShortenNumber } from 'src/utils/format-number';

import { _mock } from 'src/_mock';

import Image from 'src/components/image';
import CountUp from 'src/components/count-up';

// ----------------------------------------------------------------------

const IMAGES = [...Array(4)].map((_, index) => _mock.image.service(index + 14));

const SUMMARY = [
  { name: 'Asiakkaita', number: 50000 },
  { name: 'Tilauksia', number: 200000 },
  { name: 'Sankareita', number: 500 },
];

const STEPS = [
  {
    title: 'Joustavat asiakkaat',
    description:
      'Saat asiakkaita silloin, kun itse haluat, ja voit valita projekteista, jotka parhaiten vastaavat osaamistasi.',
    icon: '/assets/icons/ic_customer_service.svg',
  },
  {
    title: 'Nopea palkkio',
    description:
      'Palkkiosi maksetaan jopa samana päivänä, jotta voit keskittyä työsi tekemiseen ilman huolta rahavirroista.',
    icon: '/assets/icons/ic_secure_payment.svg',
  },
  {
    title: 'Valitse työskentelytapasi',
    description:
      'Oma yritys tai Hero24laskutuspalvelu, joka tarjoaa verokortilla työkorvauslaskelman ja vastuuvakuutuksen.',
    icon: '/assets/icons/ic_transparency.svg',
  },
  {
    title: 'Joustavat hinnoitteluvaihtoehdot',
    description:
      'Hinnoittele työsi urakkahinnan, tuntihinnan, neliöhinnan tai omalla tavallasi – miten sinulle parhaiten sopii.',
    icon: '/assets/icons/ic_reputation.svg',
  },
];

// ----------------------------------------------------------------------

export default function HomeJoin() {
  const smUp = useResponsive('up', 'sm');

  return (
    <Container
      sx={{
        overflow: 'hidden',
        py: 5,
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          pb: { xs: 5, md: 10 },
        }}
      >
        <Stack
          spacing={3}
          sx={{
            mx: 'auto',
            maxWidth: 560,
            textAlign: 'center',
          }}
        >
          <Typography variant="h1">Liity kumppaniksi</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Liity Hero24 ja vie liiketoimintasi uudelle tasolle! Kun astut
            osaksi Hero24:ää, avautuu sinulle ainutlaatuinen mahdollisuus
            esitellä taitosi, ottaa vastaan uusia haasteita ja tarjota
            asiakkaillemme ensiluokkaista palvelua.
          </Typography>
        </Stack>
      </Box>

      <Grid container spacing={3}>
        {(smUp ? IMAGES : IMAGES.slice(0, 1)).map((img, index) => (
          <Grid key={img} xs={12} sm={6} md={index === 0 ? 6 : 2}>
            <Image
              alt={img}
              src={img}
              sx={{ height: 350, borderRadius: 2, width: 1 }}
            />
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          rowGap: 5,
          columnGap: 3,
          display: 'grid',
          textAlign: 'center',
          gridTemplateColumns: {
            xs: 'repeat(3, 1fr)',
          },
          pt: { xs: 5, md: 10 },
          pb: 10,
        }}
      >
        {SUMMARY.map((value) => (
          <Stack key={value.name} spacing={1}>
            <Typography variant="h2">
              <CountUp
                start={value.number / 5}
                end={value.number}
                formattingFn={(newValue: number) => fShortenNumber(newValue)}
              />

              <Typography
                variant="h4"
                component="span"
                sx={{ verticalAlign: 'top', ml: 0.5, color: 'primary.main' }}
              >
                +
              </Typography>
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {value.name}
            </Typography>
          </Stack>
        ))}
      </Box>

      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Container>
          <Box
            sx={{
              display: 'grid',
              my: { xs: 8, md: 10 },
              gap: { xs: 8, md: 5 },
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                md: 'repeat(4, 1fr)',
              },
            }}
          >
            {STEPS.map((value, index) => (
              <div key={index}>
                <SvgColor
                  src={value.icon}
                  sx={{
                    width: 80,
                    height: 80,
                    mx: 'auto',
                    color: 'primary.main',
                  }}
                />
                <Typography
                  variant="overline"
                  sx={{ mt: 4, display: 'block', color: 'text.disabled' }}
                ></Typography>

                <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
                  {value.title}
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {value.description}
                </Typography>
              </div>
            ))}
          </Box>
        </Container>
      </Box>
    </Container>
  );
}
