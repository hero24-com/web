import { m } from 'framer-motion';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';

import { useResponsive } from 'src/hooks/use-responsive';

import Pattern01 from 'src/assets/illustrations/pattern/pattern-01';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const CONTENTS = [
  {
    question: `Miten Hero24 toimii?`,
    answer: `Hero24 yhdistää sinut luotettaviin palveluntarjoajiin, jotka auttavat sinua erilaisissa projekteissa, kuten siivouksessa, LVIS-asennuksissa, muutto- ja kuljetuspalveluissa sekä remontoinnissa.`,
  },
  {
    question: 'Miten teen tilauksen?',
    answer: `1. Rekisteröidy sovelluksessa. 2. Täytä tarjouspyyntölomake sovelluksessa tai nettisivulla. 3. Palveluntarjoaja hyväksyy tilauksesi. 4. Kommunikoi palveluntarjoajan kanssa sovelluksen kautta. 5. Arvostele palvelu työn valmistuttua.`,
  },
  {
    question: 'Miten otan yhteyttä Hero24:ään?',
    answer: `Käytä Help Centeriä nettisivuilla tai sovelluksessa, tai ota yhteyttä asiakaspalveluun chatin tai puhelimen kautta.`,
  },
  {
    question: 'Miten jätän arvostelun?',
    answer: `Jätä arvostelu ja tähtiluokitus sovelluksen kautta työn valmistuttua.`,
  },
];

// ----------------------------------------------------------------------

export default function HomeFAQs() {
  const smUp = useResponsive('up', 'sm');

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChangeExpanded = useCallback(
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    },
    []
  );

  return (
    <Container
      component={MotionViewport}
      sx={{
        position: 'relative',
        py: { xs: 5, md: 10 },
      }}
    >
      <Grid container spacing={{ md: 3 }} justifyContent="center">
        <Grid xs={12} md={8}>
          <m.div variants={varFade().in}>
            <Typography variant="h3" sx={{ textAlign: 'center' }}>
              FAQ
            </Typography>
          </m.div>

          <Box
            sx={{
              my: { xs: 8, md: 10 },
            }}
          >
            {CONTENTS.map((faq) => (
              <m.div key={faq.question} variants={varFade().in}>
                <Accordion
                  expanded={expanded === faq.question}
                  onChange={handleChangeExpanded(faq.question)}
                >
                  <AccordionSummary
                    sx={{
                      minHeight: 64,
                      borderBottom: (theme) =>
                        `dashed 1px ${theme.palette.divider}`,
                      [`& .${accordionSummaryClasses.content}`]: {
                        p: 0,
                        m: 0,
                      },
                      [`&.${accordionSummaryClasses.expanded}`]: {
                        bgcolor: 'action.selected',
                      },
                    }}
                  >
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                      {faq.question}
                    </Typography>

                    <Iconify
                      width={24}
                      icon={
                        expanded === faq.question
                          ? 'carbon:subtract'
                          : 'carbon:add'
                      }
                    />
                  </AccordionSummary>

                  <AccordionDetails>{faq.answer}</AccordionDetails>
                </Accordion>
              </m.div>
            ))}
          </Box>
        </Grid>
      </Grid>

      {smUp && (
        <Pattern01
          sx={{
            top: 80,
            left: 0,
            right: 0,
            zIndex: -1,
            mx: 'auto',
            maxWidth: 600,
            maxHeight: 600,
          }}
        />
      )}
    </Container>
  );
}
