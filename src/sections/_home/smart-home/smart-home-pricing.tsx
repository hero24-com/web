'use client';

import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import { _smartHome } from 'src/_mock';

import Iconify from 'src/components/iconify';

import SmartHomePricingHeader from './smart-home-pricing-header';
import SmartHomePricingContentMobile from './smart-home-pricing-content-mobile';
import SmartHomePricingContentDesktop from './smart-home-pricing-content-desktop';

// ----------------------------------------------------------------------

export default function SmartHomePricing() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          pb: { xs: 5, md: 10 },
          mx: 'auto',
          maxWidth: 900,
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" paragraph>
          Huoleton Asuminen Hero24 – Miksi Valita Meidät?
        </Typography>

        <Typography align="center" sx={{ color: 'text.secondary' }}>
          Tervetuloa Hero24:ään, jossa huolettomuus on enemmän kuin lupaus – se
          on käytännön tapa elää. Me tarjoamme sinulle kokonaisvaltaisen
          ratkaisun, joka tekee kodin huollosta ja ylläpidosta vaivatonta,
          tehokasta ja stressitöntä. Meidän palvelumme on suunniteltu
          erityisesti sinulle, joka arvostat rauhallista ja mukavaa asumista
          ilman huoltoa vaativia ongelmia. Premium-tilaajana saat lisäksi
          ainutlaatuisia etuja, kuten alennuksia, nopeampaa palvelua, laajan
          vakuutuksen ja ilmaisia konsultaatioita/arviokäyntejä, jotka tekevät
          asumisestasi vieläkin huolettomampaa.
        </Typography>

        <Typography
          variant="overline"
          align="center"
          sx={{ color: 'primary.main' }}
        >
          Liity Hero24 Premium -tilaajaksi vain 19,90 € kuukaudessa ja nauti
          kaikista huolettoman asumisen eduista! Tilaus 12 kuukaudeksi ja jatkuu
          toistuvana voimassa sen jälkeen
        </Typography>
      </Stack>

      <Grid container alignItems="flex-end">
        {mdUp && (
          <Grid xs={12} md={8} sx={{ pb: 5 }}>
            <Typography variant="overline" sx={{ color: 'primary.main' }}>
              Ominaisuus
            </Typography>
          </Grid>
        )}

        {_smartHome.map((plan) => (
          <Grid
            key={plan.license}
            xs={12}
            md={4}
            sx={{
              mb: { xs: 4, md: 0 },
              borderRadius: { xs: 2, md: 0 },
              boxShadow: (theme) => ({ xs: theme.customShadows.z16, md: 0 }),
            }}
          >
            <SmartHomePricingHeader plan={plan} />
            {!mdUp && <SmartHomePricingContentMobile plan={plan} />}
          </Grid>
        ))}
      </Grid>

      {mdUp && (
        <Grid container>
          <Grid
            xs={12}
            md={8}
            sx={{
              borderTop: (theme) => `solid 1px ${theme.palette.divider}`,
            }}
          >
            {_smartHome[0].options.map((option) => (
              <Stack
                key={option.title}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                  height: 72,
                  borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
                }}
              >
                <Typography variant="subtitle2">{option.title}</Typography>

                <Tooltip title={option.tootip} placement="left" arrow>
                  <div>
                    <Iconify
                      icon="carbon:information"
                      sx={{ color: 'text.secondary' }}
                    />
                  </div>
                </Tooltip>
              </Stack>
            ))}
          </Grid>

          {_smartHome.map((plan) => (
            <Grid
              key={plan.license}
              xs={12}
              md={4}
              sx={{
                borderTop: (theme) => ({
                  md: `solid 1px ${theme.palette.divider}`,
                }),
              }}
            >
              <SmartHomePricingContentDesktop plan={plan} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
