import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import { fShortenNumber } from 'src/utils/format-number';

import { _mock } from 'src/_mock';

import Image from 'src/components/image';
import CountUp from 'src/components/count-up';

// ----------------------------------------------------------------------

const IMAGES = [...Array(4)].map((_, index) => _mock.image.service(index + 16));

const SUMMARY = [
  { name: 'Asiakkaita', number: 50000 },
  { name: 'Tilauksia', number: 200000 },
  { name: 'Sankareita', number: 500 },
];

// ----------------------------------------------------------------------

export default function RealEstateMaintenance() {
  const smUp = useResponsive('up', 'sm');

  return (
    <Container
      sx={{
        overflow: 'hidden',
        py: { xs: 5, md: 10 },
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
            maxWidth: 900,
            textAlign: 'center',
          }}
        >
          <Typography variant="h2">
            Hero24 – Kattavat ja Luotettavat Palvelut Asunto-Osakeyhtiöille
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Hero24 tarjoaa täydelliset huolto- ja ylläpitopalvelut asunto-osakeyhtiöille, jotta
            kiinteistön hallinta olisi mahdollisimman vaivatonta ja tehokasta. Tarjoamme
            kokonaisratkaisun, joka kattaa kaikki kiinteistöhallinnan tarpeet 24/7.
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Hero24 on luotettava kumppani asunto-osakeyhtiöille kiinteistönhuollon kaikissa
            tarpeissa. Tarjoamme säännöllistä huoltoa, kiireellisiä korjauksia sekä suuria
            remonttiprojekteja Uudellamaalla, Varsinais-Suomessa, Pirkanmaalla, Keski-Suomessa ja
            Päijät-Hämeessä. Ammattitaitoinen henkilökuntamme varmistaa, että kiinteistöt pysyvät
            turvallisina ja viihtyisinä ympäri vuoden. Joustava palvelumme kattaa kaiken, mitä
            taloyhtiösi tarvitsee toimivaan arkeen.
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Ota yhteyttä ja pyydä tarjous, niin suunnitellaan tarpeisiisi sopiva palveluratkaisu!
          </Typography>
        </Stack>
      </Box>

      <Grid container spacing={3}>
        {(smUp ? IMAGES : IMAGES.slice(0, 1)).map((img, index) => (
          <Grid key={img} xs={12} sm={6} md={index === 0 ? 6 : 2}>
            <Image alt={img} src={img} sx={{ height: 350, borderRadius: 2, width: 1 }} />
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
    </Container>
  );
}
