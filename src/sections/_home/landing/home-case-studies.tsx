import type { BoxProps } from '@mui/material/Box';
import type { Theme, SxProps } from '@mui/material/styles';
import type { ICaseStudyProps } from 'src/types/case-study';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  caseStudies: ICaseStudyProps[];
};

export default function HomeCaseStudies({ caseStudies, sx, ...other }: Props) {
  return (
    <Box
      component="section"
      sx={{
        overflow: 'hidden',
        py: { xs: 5, md: 10 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Stack spacing={3} sx={{ textAlign: { xs: 'center', md: 'unset' } }}>
          <Typography variant="h2">Viitteet</Typography>
        </Stack>

        <Grid spacing={3} container alignItems="center" sx={{ py: { xs: 5, md: 10 } }}>
          <Grid xs={6} md={2}>
            <SmallItem item={caseStudies[0]} />
          </Grid>

          <Grid xs={6} md={2} sx={{ display: { md: 'none' } }}>
            <SmallItem item={caseStudies[5]} />
          </Grid>

          <Grid container xs={12} sm={12} md={8}>
            <Grid xs={6} md={9}>
              <LargeItem item={caseStudies[1]} sx={{ display: { xs: 'none', md: 'flex' } }} />
              <SmallItem item={caseStudies[1]} isSquare sx={{ display: { md: 'none' } }} />
            </Grid>

            <Grid xs={6} md={3}>
              <Stack justifyContent={{ md: 'flex-end' }} sx={{ height: { md: 1 } }}>
                <SmallItem item={caseStudies[2]} isSquare />
              </Stack>
            </Grid>

            <Grid xs={6} md={3}>
              <SmallItem item={caseStudies[3]} isSquare />
            </Grid>

            <Grid xs={6} md={9}>
              <LargeItem item={caseStudies[4]} sx={{ display: { xs: 'none', md: 'flex' } }} />
              <SmallItem item={caseStudies[4]} isSquare sx={{ display: { md: 'none' } }} />
            </Grid>
          </Grid>

          <Grid xs={6} md={2} sx={{ display: { xs: 'none', md: 'block' } }}>
            <SmallItem item={caseStudies[5]} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type ItemProps = {
  isSquare?: boolean;
  sx?: SxProps<Theme>;
  item: ICaseStudyProps;
};

function LargeItem({ item, sx }: Omit<ItemProps, 'isSquare'>) {
  return (
    <Paper
      sx={{
        p: 0.75,
        display: 'flex',
        borderRadius: 2,
        bgcolor: 'background.paper',
        boxShadow: (theme) => theme.customShadows.z24,
        img: {
          transition: (theme) =>
            theme.transitions.create(['transform'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.short,
            }),
        },
        '&:hover img': { transform: 'scale(1.2)' },
        ...sx,
      }}
    >
      <Box component="span" sx={{ overflow: 'hidden', borderRadius: 2, width: 0.5 }}>
        <Box
          component="img"
          loading="lazy"
          alt={item.title}
          src={item.coverUrl}
          sx={{
            aspectRatio: '3/4',
            objectFit: 'cover',
          }}
        />
      </Box>

      <Box display="flex" flexDirection="column" sx={{ p: 3, pt: 5, width: 0.5 }}>
        <Typography variant="overline" sx={{ color: 'primary.main' }}>
          {item.category}
        </Typography>

        <Typography variant="h4" component="h6" sx={{ mt: 1, mb: 2 }}>
          {item.title}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.description}
        </Typography>

        <Box component="span" flexGrow={1} />
      </Box>
    </Paper>
  );
}

// ----------------------------------------------------------------------

function SmallItem({ item, isSquare, sx }: ItemProps) {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        img: {
          transition: () =>
            theme.transitions.create(['transform'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.shorter,
            }),
        },
        '&:hover img': { transform: 'scale(1.2)' },
        '&::before': {
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          zIndex: 8,
          content: "''",
          position: 'absolute',
          opacity: '0.75',
          bgcolor:
            theme.palette.mode === 'light'
              ? theme.palette.common.black
              : theme.palette.common.white,
        },
        ...sx,
      }}
    >
      <Box
        gap={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        sx={{
          px: 2,
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          zIndex: 9,
          textAlign: 'center',
          position: 'absolute',
          color:
            theme.palette.mode === 'light'
              ? theme.palette.common.white
              : theme.palette.common.black,
        }}
      >
        <Box component="span" sx={{ opacity: 0.48, typography: 'overline' }}>
          {item.category}
        </Box>
        {item.title}
      </Box>

      <Box
        component="img"
        loading="lazy"
        alt={item.title}
        src={item.coverUrl}
        sx={{
          objectFit: 'cover',
          aspectRatio: { xs: '1/1', md: '3/4' },
          ...(isSquare && { aspectRatio: '1/1' }),
        }}
      />
    </Paper>
  );
}
