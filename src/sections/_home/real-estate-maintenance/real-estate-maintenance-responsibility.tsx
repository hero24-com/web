import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


// ----------------------------------------------------------------------

const SERVICES_FOR_SHAREHOLDER = [
  {
    number: '1',
    title: 'Sisätilojen Korjaukset ja Kunnossapito',
    description:
      'Osakas vastaa huoneistonsa sisäosista, lukuun ottamatta kantavia rakenteita ja eristeitä. Esimerkiksi sisäseinien maalaaminen, tapetointi ja lattiapinnoitteiden uusiminen kuuluvat osakkaalle.',
  },
  {
    number: '2',
    title: 'Märkätilat',
    description:
      'Osakas huolehtii pesualtaiden, ammeiden ja suihkuletkujen kunnossapidosta. Lattiakaivon puhdistus on myös osakkaan vastuulla.',
  },
  {
    number: '3',
    title: 'Kodinkoneet',
    description:
      'Saunan kiuas, uuni ja muut kodinkoneet ovat osakkaan vastuulla.',
  },
  {
    number: '4',
    title: 'Sähkötöiden Hoito',
    description:
      'Lamppujen, sulakkeiden ja pistorasioiden vaihto on osakkaan tehtävä.',
  },
  {
    number: '5',
    title: 'Verhotangot ja Kalusteet',
    description:
      'Verhotangot, kaapistot ja muut kiinteät kalusteet ovat osakkaan vastuulla.',
  },
  {
    number: '6',
    title: 'Palovaroittimet',
    description:
      'Osakas huolehtii paristokäyttöisten palovaroittimien toiminnasta ja paristojen vaihdosta.',
  },
];

const SERVICES_FOR_COMPANY = [
  {
    number: '1',
    title: 'Rakennuksen Ulko-osat',
    description:
      'Taloyhtiö vastaa rakennuksen ulko-ovista, ikkunoiden ulkopuitteista, julkisivupinnoista ja parvekkeiden vedeneristeistä.',
  },
  {
    number: '2',
    title: 'Pesuhuoneen ja WC-tilojen Korjaukset',
    description:
      'Taloyhtiö huolehtii pesuhuoneen vesieristeiden korjauksista, wc-istuimen vaihdoista ja pesualtaan vesilukkojen puhdistuksesta.',
  },
  {
    number: '3',
    title: 'Lämmitys- ja Ilmastointilaitteet',
    description:
      'Kiinteästi asennetut lämmityspatterit ja ilmanvaihtojärjestelmät ovat taloyhtiön vastuulla, mukaan lukien patterien ilmaus ja venttiilien säätö.',
  },
  {
    number: '4',
    title: 'Ulkoalueet ja Piha',
    description:
      'Taloyhtiö vastaa ulkoalueiden hoidosta, kuten nurmikon leikkuusta ja lumen auraamisesta.',
  },
  {
    number: '5',
    title: 'Sähkötöiden Perusteet',
    description:
      'Taloyhtiö huolehtii kiinteistä sähköjohdoista, sulaketauluista ja antennilaitteista.',
  },
  {
    number: '6',
    title: 'Tuholaistorjunta',
    description:
      'Taloyhtiö hoitaa tuholaisten, kuten rottien ja hiirien hävityksen.',
  },
];

// ----------------------------------------------------------------------

export default function RealEstateMaintenanceResponsibility() {
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
        Osakkaan ja Yhtiön Vastuut Taloyhtiössä
      </Typography>

      <Typography
        variant="h3"
        sx={{
          my: { xs: 8, md: 10 },
          color: 'text.secondary',
        }}
      >
        Osakkaan Vastuut
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
        {SERVICES_FOR_SHAREHOLDER.map((value) => (
          <div key={value.title}>
            <Typography variant="h1">{value.number}</Typography>

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

      <Typography
        variant="h3"
        sx={{
          my: { xs: 8, md: 10 },
          color: 'text.secondary',
        }}
      >
        Yhtiön Vastuut
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
        {SERVICES_FOR_COMPANY.map((value) => (
          <div key={value.title}>
            <Typography variant="h1">{value.number}</Typography>

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
