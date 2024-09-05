import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import Container from '@mui/material/Container';
import TimelineItem from '@mui/lab/TimelineItem';
import Typography from '@mui/material/Typography';
import TimelineContent from '@mui/lab/TimelineContent';
import { alpha, useTheme } from '@mui/material/styles';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineSeparator from '@mui/lab/TimelineSeparator';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgGradient } from 'src/theme/css';

// ----------------------------------------------------------------------

const TIMELINES = [
  {
    step: '1. Huoltosopimukset',
    description11:
      'Urakkahinta: Kiinteä kuukausihinta, joka kattaa kaikki sovitut huoltopalvelut. Tämä malli auttaa budjetoinnissa ja tarjoaa selkeän kustannusrakenteen.',
    description12:
      'Työtehtäväkohtainen Hinta: Maksat vain toteutuneista huoltopalveluista. Tämä joustava malli sopii tilanteisiin, joissa huoltotarpeet vaihtelevat.',
  },
  {
    step: '2. Kiinteistön Ylläpito',
    title1: 'Yleiset Huoltotoimenpiteet',
    description11:
      'Siivous: Yhteisten tilojen säännöllinen siivous ja puhtaanapito (käytävät, rappukäytävät, hissit, ulkoalueet).',
    description12:
      'Jätehuolto: Jätteiden keräys ja lajittelu, roskakatosten tyhjennys, kierrätyspisteiden huolto.',
    description13:
      'Viherrakentaminen: Pihan ja puutarhan hoito, istutusten ja nurmikon kunnossapito, lehtien haravointi ja kausihuolto.',
    title2: 'Hätähuolto',
    description21:
      'Putkistohäiriöt: Putkivuotojen korjaus, viemärin tukosten avaaminen, vuotavien hanien ja wc-istuimien korjaus.',
    description22:
      'Sähkötöiden Korjaukset: Sähkölaitteiden vianmääritys, sähköturvallisuuden tarkastukset, sähköhäiriöiden selvittäminen.',
    description23:
      'Lämmitysjärjestelmän Huolto: Lämmityslaitteiden tarkastus ja säätö, lämmitysjärjestelmän korjaukset.',
    title3: 'Lumenpoisto ja Talvikunnossapito',
    description31:
      'Lumenpoisto: Lumenauraus ja -sulatus pihalta, ajoteiltä ja kulkuväyliltä.',
    description32:
      'Liukkaudenestotoimenpiteet: Jäänestoliuosten levitys, liukkauden torjunta ulkoalueilla.',
    description33:
      'Talvihuolto: Lämmityslaitteiden tarkastus, pakastumisen estäminen ja tarvittavat huoltotoimenpiteet.',
  },
  {
    step: '3. Sähköinen Huoltokirja',
    description11:
      'Huoltotöiden Seuranta: Sähköinen huoltokirja tarjoaa reaaliaikaisen seurannan huoltotöistä, ongelmien dokumentoinnista ja toimenpiteistä.',
    description12:
      'Tarkastusraportit: Yksityiskohtaiset raportit huoltotöistä, havaituista ongelmista ja korjauksista. Raportit auttavat hallitusta ja isännöitsijöitä seuraamaan kiinteistön kuntoa ja tekemään informoituja päätöksiä.',
  },
  {
    step: '4. Isännöintipalvelut',
    description11:
      'Kiinteistöhallinta: Kiinteistön ylläpidon suunnittelu, valvonta ja koordinointi.',
    description12:
      'Asukassuhteet: Asukaskyselyiden ja -valitusten käsittely, tiedottaminen ja vuorovaikutus asukkaiden kanssa.',
    description13:
      'Talouden Hallinta: Budjetointi, taloussuunnittelu, kirjanpito ja raportointi talouden hallinnan tueksi.',
  },
  {
    step: '5. Asukkaiden Palvelut',
    title1: 'Tukipalvelut Asukkaille',
    description11:
      'Häiriö- ja korjausilmoitukset: Huoltotöiden koordinointi ja ilmoitusten käsittely asukkailta.',
    description12:
      'Kodinhoito: Avustaminen kodin pienissä huolto- ja korjaustöissä, kuten laitteiden käyttöön liittyvissä kysymyksissä.',
  },
];

const COLORS = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
] as const;

// ----------------------------------------------------------------------

export default function RealEstateMaintenanceHowItWork() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: '/assets/background/overlay_2.webp',
        }),
        color: 'common.white',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Stack
          spacing={3}
          sx={{
            mb: 5,
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Typography
            variant="h2"
            sx={{ textAlign: 'center', mb: { xs: 4 } }}
          >
            Hero24 – Kattavat ja Luotettavat Palvelut Asunto-Osakeyhtiöille
          </Typography>

          <Typography sx={{ color: 'text.secondary', textAlign: 'center' }}>
            Hero24 tarjoaa täydelliset huolto- ja ylläpitopalvelut
            asunto-osakeyhtiöille, jotta kiinteistön hallinta olisi
            mahdollisimman vaivatonta ja tehokasta. Tarjoamme kokonaisratkaisun,
            joka kattaa kaikki kiinteistöhallinnan tarpeet 24/7.
          </Typography>
        </Stack>

        <Timeline position={mdUp ? 'alternate' : 'right'}>
          {TIMELINES.map((value, index) => (
            <TimelineItem
              key={value.step}
              sx={{
                '&:before': {
                  ...(!mdUp && { display: 'none' }),
                },
              }}
            >
              <TimelineSeparator>
                <TimelineDot color={COLORS[index]} />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>
                <Typography
                  variant="overline"
                  sx={{ color: `${COLORS[index]}.main` }}
                >
                  {value.step}
                </Typography>

                <Typography variant="h5" sx={{ mt: 0.5, mb: 1 }}>
                  {value.title1}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.72,
                    ...(index % 2 && {
                      ml: 'auto',
                    }),
                  }}
                >
                  {value.description11}
                </Typography>

                <br />

                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.72,
                    ...(index % 2 && {
                      ml: 'auto',
                    }),
                  }}
                >
                  {value.description12}
                </Typography>

                <br />

                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.72,
                    ...(index % 2 && {
                      ml: 'auto',
                    }),
                  }}
                >
                  {value.description13}
                </Typography>

                <br />

                <Typography variant="h5" sx={{ mt: 0.5, mb: 1 }}>
                  {value.title2}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.72,
                    ...(index % 2 && {
                      ml: 'auto',
                    }),
                  }}
                >
                  {value.description21}
                </Typography>

                <br />

                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.72,
                    ...(index % 2 && {
                      ml: 'auto',
                    }),
                  }}
                >
                  {value.description22}
                </Typography>

                <br />

                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.72,
                    ...(index % 2 && {
                      ml: 'auto',
                    }),
                  }}
                >
                  {value.description23}
                </Typography>

                <br />

                <Typography variant="h5" sx={{ mt: 0.5, mb: 1 }}>
                  {value.title3}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.72,
                    ...(index % 2 && {
                      ml: 'auto',
                    }),
                  }}
                >
                  {value.description31}
                </Typography>

                <br />

                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.72,
                    ...(index % 2 && {
                      ml: 'auto',
                    }),
                  }}
                >
                  {value.description32}
                </Typography>

                <br />

                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.72,
                    ...(index % 2 && {
                      ml: 'auto',
                    }),
                  }}
                >
                  {value.description33}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}
