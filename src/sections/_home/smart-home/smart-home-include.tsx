import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: 'Helppous ja mukavuus',
    description:
      'Älykäs Huoleton koti tarjoaa kattavan valikoiman palveluita, jotka tekevät kodin hallinnasta vaivatonta ja tehokasta. Huolehdimme kodin kunnostuksesta, huollosta ja ylläpidosta puolestasi, jotta voit keskittyä nauttimaan kodistasi täysin siemauksin. ',
    icon: '/assets/icons/ic_statistics.svg',
  },
  {
    title: 'Ennaltaehkäisy ja proaktiivinen korjaaminen',
    description:
      'Palvelupakettimme eivät ainoastaan reagoi ongelmiin, vaan ne ennakoiden ja ehkäisevät mahdollisia huoltotarpeita ja korjaustarpeita. Näin säästät aikaa, vaivaa ja kustannuksia pitkällä tähtäimellä. ',
    icon: '/assets/icons/ic_social_media.svg',
  },
  {
    title: 'Ammattilaisten osaaminen ja luotettavuus',
    description:
      'Älykkään Huoleton kodin taustalla on joukko kokeneita ammattilaisia, jotka huolehtivat kodistasi niin, että voit luottaa siihen aina. ',
    icon: '/assets/icons/ic_real_time.svg',
  },
  {
    title: 'Lisäksi tarjoamme 24/7',
    description:
      'Käyttöön ammattilaisia aina kun tarvitset, sekä palveluitamme alennetuin hinnoin. Valitsemalla Älykkään Huoleton kodin saat siis paitsi helppoutta ja mukavuutta, myös varmuuden siitä, että kotisi on aina hyvissä käsissä. ',
    icon: '/assets/icons/ic_checklist.svg',
  },
];

// ----------------------------------------------------------------------

export default function SmartHomeInclude() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h2">Miksi valita Älykäs Huoleton koti?</Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          maxWidth: 720,
          color: 'text.secondary',
          mb: { xs: 8, md: 10 },
        }}
      >
        Tervetuloa Älykkään Huoleton kodin maailmaan, missä teknologia ja
        huolenpito yhdistyvät luomaan parempaa ja mukavampaa asumista. Miksi
        valita meidät?
      </Typography>

      <Box
        sx={{
          rowGap: 8,
          columnGap: 10,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {SERVICES.map((value) => (
          <div key={value.title}>
            <SvgColor
              src={value.icon}
              color="info"
              sx={{
                width: 64,
                height: 64,
                mx: 'auto',
                bgcolor: 'primary.main',
              }}
            />

            <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
              {value.title}
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              {' '}
              {value.description}{' '}
            </Typography>
          </div>
        ))}
      </Box>
    </Container>
  );
}
