'use client';

import { useTranslations } from 'next-intl';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

const PARAGRAPHS = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6'] as const;

export default function RecruitsIntro() {
  const t = useTranslations('recruits.intro');

  return (
    <Container sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={3} sx={{ maxWidth: 820, mx: 'auto' }}>
        {PARAGRAPHS.map((key) => (
          <Typography key={key} variant="body1" sx={{ color: 'text.secondary', fontSize: { md: 18 } }}>
            {t(key)}
          </Typography>
        ))}
      </Stack>
    </Container>
  );
}
