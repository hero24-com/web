import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import { TrianglePattern } from 'src/assets/illustrations/components/shape-pattern';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const FAQs = [
  {
    question: '24/7 Palvelu',
    answer: (
      <Typography>
        Hero24 tarjoaa ympärivuorokautista huoltoa ja asiakaspalvelua. Olemme valmiina reagoimaan
        kiireellisiin tilanteisiin milloin tahansa, mikä takaa kiinteistön jatkuvan ja
        keskeytymättömän toiminnan.
      </Typography>
    ),
  },
  {
    question: 'Kattava Palvelukokonaisuus',
    answer: (
      <Typography>
        Meidän palvelumme kattavat kaikki kiinteistönhuollon tarpeet yhdellä sopimuksella. Tämä
        poistaa tarvetta useille eri palveluntarjoajille ja yksinkertaistaa hallintaa.
      </Typography>
    ),
  },
  {
    question: 'Joustavuus ja Räätälöitävyys',
    answer: (
      <Typography>
        Tarjoamme joustavat huoltosopimusvaihtoehdot, jotka voidaan räätälöidä vastaamaan tarkasti
        teidän tarpeitanne. Tämä varmistaa, että maksatte vain siitä, mitä todella tarvitsette.
      </Typography>
    ),
  },
  {
    question: 'Innovatiivinen Teknologia',
    answer: (
      <Typography>
        Käytämme sähköistä huoltokirjaa, joka parantaa palveluiden laatua ja tehokkuutta. Tämä
        mahdollistaa huoltotöiden reaaliaikaisen seurannan ja tarkan dokumentoinnin.
      </Typography>
    ),
  },
  {
    question: 'Asiakastyytyväisyys',
    answer: (
      <Typography>
        Tavoitteenamme on korkealaatuinen asiakaspalvelu ja asukkaiden tyytyväisyys. Suunnittelemme
        ja toteutamme huolto- ja ylläpitotoimenpiteet, jotka vastaavat asukkaiden ja hallituksen
        tarpeita ja odotuksia.
      </Typography>
    ),
  },
  {
    question: 'Kokemus ja Asiantuntemus',
    answer: (
      <Typography>
        Monivuotinen kokemus kiinteistöhallinnan ja huollon alalla takaa, että tiedämme, miten eri
        tilanteet ja ongelmat hoidetaan tehokkaasti ja ammattimaisesti.
      </Typography>
    ),
  },
];

// ----------------------------------------------------------------------

function AnimatedDiv({ children }: { children: React.ReactNode }) {
  const variants = varFade({ distance: 24 }).inUp;
  return <m.div variants={variants}>{children}</m.div>;
}

export default function RealEstateMaintenanceFAQs({ sx, ...other }: BoxProps) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChangeExpanded = useCallback(
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    },
    []
  );

  const renderList = (
    <Box sx={{ mt: { xs: 5, md: 10 } }}>
      {FAQs.map((faq) => (
        <Accordion
          key={faq.question}
          expanded={expanded === faq.question}
          onChange={handleChangeExpanded(faq.question)}
        >
          <AccordionSummary>
            <Typography variant="h6" sx={{ pr: 1, flexGrow: 1 }}>
              {faq.question}
            </Typography>

            <Iconify
              icon={expanded === faq.question ? 'eva:minus-outline' : 'eva:plus-outline'}
              sx={{ transform: 'translateY(4px)' }}
            />
          </AccordionSummary>

          <AccordionDetails sx={{ color: 'text.secondary' }}>{faq.answer}</AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 5, md: 10 },
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Grid container spacing={{ md: 3 }} justifyContent="center">
          <Grid xs={12} md={8}>
            <AnimatedDiv>
              <Typography variant="h2" sx={{ textAlign: 'center' }}>
                Miksi valita Hero24
              </Typography>
            </AnimatedDiv>

            <AnimatedDiv>{renderList}</AnimatedDiv>
          </Grid>
        </Grid>

        <TrianglePattern
          sx={{
            top: 80,
            left: 0,
            right: 0,
            zIndex: -1,
            mx: 'auto',
            width: 600,
            height: 600,
            maxWidth: 1,
          }}
        />
      </Container>
    </Box>
  );
}
