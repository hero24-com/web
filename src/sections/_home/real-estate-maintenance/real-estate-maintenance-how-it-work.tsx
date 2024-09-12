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
      'Siivous: Yhteisten tilojen säännöllinen siivous ja puhtaanapito (käytävät, rappukäytävät, hissit, ulkoalueet). Erikoissiivoukset - Kausittaiset ja tapahtumien jälkeiset siivoukset.',
    description12:
      'Jätehuolto: Jätteiden keräys ja lajittelu, Roskakatosten tyhjennys, Kierrätyspisteiden huolto ja jätehuollon optimointi.',
    description13:
      'Viherrakentaminen ja Pihatyöt: Pihan ja puutarhan hoito - Istutusten ja nurmikon kunnossapito, lehtien haravointi, kausihuolto. Piharakenteet - Korjaukset ja huollot, kuten laatoitukset ja porttien ylläpito.',
    title2: 'Hätähuolto',
    description21:
      'Putkistohäiriöt: Putkivuotojen korjaus, viemärin tukosten avaaminen, vuotavien hanien ja wc-istuimien korjaus.',
    description22:
      'Sähkötöiden Korjaukset: Sähkölaitteiden vianmääritys, sähköturvallisuuden tarkastukset, sähköhäiriöiden selvittäminen.',
    description23:
      'Lämmitysjärjestelmän Huolto: Lämmityslaitteiden tarkastus ja säätö, lämmitysjärjestelmän korjaukset.',
    title3: 'Lumenpoisto ja Talvikunnossapito',
    description31: 'Lumenpoisto: Lumenauraus ja -sulatus pihalta, ajoteiltä ja kulkuväyliltä.',
    description32:
      'Liukkaudenestotoimenpiteet: Jäänestoliuosten levitys, liukkauden torjunta ulkoalueilla.',
    description33:
      'Talvihuolto: Lämmityslaitteiden tarkastus, pakastumisen estäminen ja tarvittavat huoltotoimenpiteet.',
  },
  {
    step: '3. Sähköinen Huoltokirja',
    description11:
      'Huoltotöiden Seuranta: Reaaliaikainen seuranta huoltotöistä, ongelmien dokumentoinnista ja toimenpiteistä.',
    description12:
      'Tarkastusraportit: Yksityiskohtaiset raportit huoltotöistä, havaituista ongelmista ja korjauksista. Raportit auttavat hallitusta ja isännöitsijöitä seuraamaan kiinteistön kuntoa ja tekemään informoituja päätöksiä.',
    description13:
      'Talouden Hallinta: Budjetointi, taloussuunnittelu, kirjanpito ja raportointi talouden hallinnan tueksi.',
  },
  {
    step: '4. Asukkaiden Tukipalvelut',
    description11:
      'Tukipalvelut Asukkaille: Häiriö- ja Korjausilmoitukset: Huoltotöiden koordinointi ja ilmoitusten käsittely asukkailta. Pika-apu: Nopeat toimenpiteet kiireellisiin ongelmatilanteisiin.',
  },
  {
    step: '5. Remontti- ja Kunnossapitopalvelut',
    description11:
      'Pienet ja Suuret Remontit: Kylpyhuone- ja Keittiöremontit: Täydellinen remonttipalvelu alkaen suunnittelusta ja materiaalivalinnoista viimeistelyyn. Sisä- ja Ulkoseinien Maalaus: Maalauspalvelut, seinäkorjaukset ja pinnoitus.',
    description12:
      'Rakennus- ja Korjaustyöt: Rakennuskorjaukset: Korjaukset ja parannukset rakennuksessa, mukaan lukien rakenteelliset korjaukset. Sisätilojen Parannukset: Huoneistoremontit, lattian asennus, ovien ja ikkunoiden vaihto.',
  },
  {
    step: '6. Lisäpalvelut',
    description11:
      'Energia- ja Vesimittarien Tarkastukset: Säännölliset tarkastukset ja huolto energian ja veden kulutuksen optimointiin.',
  },
];

const COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

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
          <Typography variant="h2" sx={{ textAlign: 'center', mb: { xs: 4 } }}>
            Hero24 Kiinteistön Yleisimmät Huoltopalvelut Taloyhtiöille.
          </Typography>

          <Typography sx={{ color: 'text.secondary', textAlign: 'center' }}>
            Tarjoamme myös monia muita palveluita tarpeen mukaan.
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
                <Typography variant="overline" sx={{ color: `${COLORS[index]}.main` }}>
                  {value.step}
                </Typography>

                <br />
                <br />

                {value.title1 && (
                  <Typography variant="h5" sx={{ mt: 0.5, mb: 1 }}>
                    {value.title1}
                  </Typography>
                )}

                {value.description11 && (
                  <Typography
                    variant="body1"
                    sx={{
                      opacity: 0.72,
                      ...(index % 2 && {
                        ml: 'auto',
                      }),
                    }}
                  >
                    {value.description11}
                  </Typography>
                )}

                {value.description12 && (
                  <>
                    <br />
                    <Typography
                      variant="body1"
                      sx={{
                        opacity: 0.72,
                        ...(index % 2 && {
                          ml: 'auto',
                        }),
                      }}
                    >
                      {value.description12}
                    </Typography>
                  </>
                )}

                {value.description13 && (
                  <>
                    <br />
                    <Typography
                      variant="body1"
                      sx={{
                        opacity: 0.72,
                        ...(index % 2 && {
                          ml: 'auto',
                        }),
                      }}
                    >
                      {value.description13}
                    </Typography>
                  </>
                )}

                {value.title2 && (
                  <>
                    <br />
                    <Typography variant="h5" sx={{ mt: 0.5, mb: 1 }}>
                      {value.title2}
                    </Typography>
                  </>
                )}

                {value.description21 && (
                  <Typography
                    variant="body1"
                    sx={{
                      opacity: 0.72,
                      ...(index % 2 && {
                        ml: 'auto',
                      }),
                    }}
                  >
                    {value.description21}
                  </Typography>
                )}

                {value.description22 && (
                  <>
                    <br />
                    <Typography
                      variant="body1"
                      sx={{
                        opacity: 0.72,
                        ...(index % 2 && {
                          ml: 'auto',
                        }),
                      }}
                    >
                      {value.description22}
                    </Typography>
                  </>
                )}

                {value.description23 && (
                  <>
                    <br />
                    <Typography
                      variant="body1"
                      sx={{
                        opacity: 0.72,
                        ...(index % 2 && {
                          ml: 'auto',
                        }),
                      }}
                    >
                      {value.description23}
                    </Typography>
                  </>
                )}

                {value.title3 && (
                  <>
                    <br />
                    <Typography variant="h5" sx={{ mt: 0.5, mb: 1 }}>
                      {value.title3}
                    </Typography>
                  </>
                )}

                {value.description31 && (
                  <Typography
                    variant="body1"
                    sx={{
                      opacity: 0.72,
                      ...(index % 2 && {
                        ml: 'auto',
                      }),
                    }}
                  >
                    {value.description31}
                  </Typography>
                )}

                {value.description32 && (
                  <>
                    <br />
                    <Typography
                      variant="body1"
                      sx={{
                        opacity: 0.72,
                        ...(index % 2 && {
                          ml: 'auto',
                        }),
                      }}
                    >
                      {value.description32}
                    </Typography>
                  </>
                )}

                {value.description33 && (
                  <>
                    <br />
                    <Typography
                      variant="body1"
                      sx={{
                        opacity: 0.72,
                        ...(index % 2 && {
                          ml: 'auto',
                        }),
                      }}
                    >
                      {value.description33}
                    </Typography>
                  </>
                )}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}
