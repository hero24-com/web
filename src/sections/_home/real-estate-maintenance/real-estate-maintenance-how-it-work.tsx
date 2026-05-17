import { useTranslations } from 'next-intl';

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

// content moved to i18n messages

const COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

// ----------------------------------------------------------------------

export default function RealEstateMaintenanceHowItWork() {
  const theme = useTheme();
  const t = useTranslations();
  const TIMELINES = [0, 1, 2, 3, 4, 5].map((i) => ({
    step: t(`realEstate.howItWorks.items.${i}.step`),
    title1: t(`realEstate.howItWorks.items.${i}.title1`),
    description11: t(`realEstate.howItWorks.items.${i}.description11`),
    description12: t(`realEstate.howItWorks.items.${i}.description12`),
    description13: t(`realEstate.howItWorks.items.${i}.description13`),
    title2: t(`realEstate.howItWorks.items.${i}.title2`),
    description21: t(`realEstate.howItWorks.items.${i}.description21`),
    description22: t(`realEstate.howItWorks.items.${i}.description22`),
    description23: t(`realEstate.howItWorks.items.${i}.description23`),
    title3: t(`realEstate.howItWorks.items.${i}.title3`),
    description31: t(`realEstate.howItWorks.items.${i}.description31`),
    description32: t(`realEstate.howItWorks.items.${i}.description32`),
    description33: t(`realEstate.howItWorks.items.${i}.description33`),
  }));

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
            {t('realEstate.howItWorks.title')}
          </Typography>

          <Typography sx={{ color: 'text.secondary', textAlign: 'center' }}>
            {t('realEstate.howItWorks.subtitle')}
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
                )}

                {value.description12 && (
                  <>
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
                  </>
                )}

                {value.description13 && (
                  <>
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
                )}

                {value.description22 && (
                  <>
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
                  </>
                )}

                {value.description23 && (
                  <>
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
                )}

                {value.description32 && (
                  <>
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
                  </>
                )}

                {value.description33 && (
                  <>
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
