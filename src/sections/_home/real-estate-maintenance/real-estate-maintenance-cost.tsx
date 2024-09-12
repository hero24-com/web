import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    name: 'Kiinteistön Koko ja Ikä',
    icon: '/assets/icons/ic_search.svg',
    content1:
      'Koko: Pienemmät kiinteistöt, kuten rivitalot, maksavat yleensä vähemmän huoltopalveluista kuin suuret kerrostalot ja laajat alueet.',
    content2:
      'Ikä: Vanhemmat rakennukset saattavat vaatia enemmän huoltoa ja korjauksia verrattuna uusiin rakennuksiin.',
  },
  {
    name: 'Huoltosopimuksen Sisältö',
    icon: '/assets/icons/ic_agreement.svg',
    content1:
      'Kiinteähintaiset Sopimukset: Suurin osa kiinteistöhuollon sopimuksista on kiinteähintaisia, mikä tarkoittaa, että kuukausihinta kattaa sovitut huolto- ja korjaustoimenpiteet ilman lisäkustannuksia.',
    content2:
      'Tarveperusteinen Hinnoittelu: Joissakin tapauksissa huoltopalvelut hinnoitellaan tarveperusteisesti, jolloin maksaminen perustuu tehtyihin toimenpiteisiin.',
  },
  {
    name: 'Lisäpalvelut',
    icon: '/assets/icons/ic_optimization.svg',
    content1:
      'Ulkoiset Huoltopalvelut: Jos sopimus ei kata kaikkia tarpeita, kuten erityisiä remontteja tai lisähuoltoja, nämä voivat vaikuttaa kokonaishintaan.',
    content2: '',
  },
];

// ----------------------------------------------------------------------

export default function RealEstateMaintenanceCost({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Stack
          spacing={3}
          sx={{
            mb: 5,
            maxWidth: 900,
            mx: { xs: 'auto', md: 'unset' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Typography variant="h2">
            Kiinteistön Huoltopalvelujen Hinta – Näin Se Muodostuu
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Kiinteistön huoltopalvelujen hinnoittelu vaihtelee useiden tekijöiden mukaan.
            Ymmärrämme, että kustannusten arviointi voi olla haastavaa, joten tässä selitämme, mitkä
            asiat vaikuttavat hintaan:
          </Typography>
        </Stack>

        <Box
          gap={4}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
          sx={{ alignItems: 'center' }}
        >
          {SERVICES.map((item, index) => (
            <ServiceItem key={item.name} item={item} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type ServiceItemProps = {
  index: number;
  item: {
    name: string;
    icon: string;
    content1: string;
    content2?: string;
  };
};

function ServiceItem({ item, index }: ServiceItemProps) {
  return (
    <Paper
      variant="outlined"
      sx={(theme) => ({
        px: 4,
        py: 5,
        borderRadius: 2,
        textAlign: 'center',
        bgcolor: 'transparent',
        boxShadow: theme.customShadows.card,
        minHeight: 500,
      })}
    >
      <SvgColor
        src={item.icon}
        color="info"
        sx={{
          width: 64,
          height: 64,
          mx: 'auto',
          bgcolor: 'primary.main',
        }}
      />

      <Box sx={{ my: 5 }}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          {item.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.content1}
        </Typography>
        <br />
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.content2}
        </Typography>
      </Box>
    </Paper>
  );
}
