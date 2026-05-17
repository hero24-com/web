'use client';

import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { useTranslations } from 'next-intl';
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

// FAQ content moved to i18n

// ----------------------------------------------------------------------

function AnimatedDiv({ children }: { children: React.ReactNode }) {
  const variants = varFade({ distance: 24 }).inUp;
  return <m.div variants={variants}>{children}</m.div>;
}

export default function RealEstateMaintenanceFAQs({ sx, ...other }: BoxProps) {
  const [expanded, setExpanded] = useState<string | false>(false);
  const t = useTranslations();

  const handleChangeExpanded = useCallback(
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    },
    []
  );

  const faqs = [0, 1, 2, 3, 4, 5].map((i) => ({
    question: t(`realEstate.faqs.items.${i}.q`),
    answer: t(`realEstate.faqs.items.${i}.a`),
  }));

  const renderList = (
    <Box sx={{ mt: { xs: 5, md: 10 } }}>
      {faqs.map((faq) => (
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

          <AccordionDetails sx={{ color: 'text.secondary' }}>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
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
                {t('realEstate.faqs.title')}
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
