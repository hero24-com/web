import Box from '@mui/material/Box';
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
    step: 'STEP 1',
    title: 'Täytä lomakkeen tiedot valitse palvelut',
    description: 'Valitse sinulle sopivat palvelut mitä halaut käyttää, niitä voit myöhemmin lisätä tai poistaa.',
  },
  {
    step: 'STEP 2',
    title: 'Valitse palvelut',
    description:
      'Valitse, haluatko lisätä vakuutuksen palveluusi ja anna tarvittavat tiedot.',
  },
  {
    step: 'STEP 3',
    title: 'Laskuta helposti',
    description:
      'Lähetämme laskun asiakkaallesi ja siirrämme rahat tilillesi nopeasti.',
  },
];

const COLORS = ['secondary', 'warning', 'success'] as const;

// ----------------------------------------------------------------------

export default function HomeOwnCustomerHowItWork() {
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
        <Typography
          variant="h2"
          sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}
        >
          Miten se toimii?
        </Typography>

        <Timeline position={mdUp ? 'alternate' : 'right'}>
          {TIMELINES.map((value, index) => (
            <TimelineItem
              key={value.title}
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

                <Typography variant="h4" sx={{ mt: 0.5, mb: 1 }}>
                  {value.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.72,
                    maxWidth: { md: 360 },
                    ...(index % 2 && {
                      ml: 'auto',
                    }),
                  }}
                >
                  {value.description}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}
