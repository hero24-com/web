import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: 'Helppo laskutus',
    description:
      'Laskuta palvelusi suoraan Hero24-alustalla ilman ylimääräistä hallinnollista vaivannäköä. ',
    icon: '/assets/icons/ic_statistics.svg',
  },
  {
    title: 'Vakuutukset',
    description:
      'Tarjoamme mahdollisuuden liittää vakuutuksen palveluusi, jotta asiakkaasi voivat olla huoletta. Valitse, haluatko vakuutuksen mukaan vai et. ',
    icon: '/assets/icons/ic_social_media.svg',
  },
  {
    title: 'Nopea maksaminen',
    description: 'Rahat tililläsi jopa samana päivänä. ',
    icon: '/assets/icons/ic_real_time.svg',
  },
  {
    title: 'Monipuoliset maksutavat',
    description:
      'Asiakkaasi voivat maksaa palveluistasi kortilla, verkkolaskulla, laskulla, osamaksulla tai mobiilimaksulla. ',
    icon: '/assets/icons/ic_checklist.svg',
  },
  {
    title: 'Y-tunnus ja tilaajavastuu',
    description:
      'Saat käyttöösi Y-tunnuksen, joka sisältää vakuutukset työlle ja tilaajavastuu -raportin. Voit käyttää näitä tietoja asiakkaan pyytäessä esimerkiksi isännöitsijälle, jotta on selvää, kuka hoitaa remontin vastuut ja laskutuksen. ',
    icon: '/assets/icons/ic_banking.svg',
  },
];

// ----------------------------------------------------------------------

export default function HomeOwnCustomerInclude() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          mb: { xs: 8, md: 10 },
        }}
      >
        Miksi valita Hero24-alusta?
      </Typography>

      <Box
        sx={{
          rowGap: 8,
          columnGap: 10,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
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
