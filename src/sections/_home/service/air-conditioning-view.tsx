'use client';

import { useEffect } from 'react';

import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';


import { useBoolean } from 'src/hooks/use-boolean';

import { _tours, _socials, _services } from 'src/_mock';

import { SplashScreen } from 'src/components/loading-screen';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import ReviewTravel from '../../review/travel/review-travel';
import HomeServiceListSimilar from './list/home-service-list-similar';
import HomeServiceDetailsHeader from './details/travel-tour-details-header';
import HomeServiceDetailsSummary from './details/travel-tour-details-summary';
import HomeServiceDetailsGallery from './details/travel-tour-details-gallery';
import HomeServiceDetailsReserveForm from './details/travel-tour-details-reserve-form';

// ----------------------------------------------------------------------

const _mockTour = _tours[0];

export default function AirConditioningView() {
  const loading = useBoolean(true);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.onFalse();
    };
    fakeLoading();
  }, [loading]);

  if (loading.value) {
    return <SplashScreen />;
  }

  return (
    <>
      <Container sx={{ overflow: 'hidden' }}>
        <CustomBreadcrumbs
          links={[
            { name: 'Home', href: '/' },
            { name: _mockTour.slug },
          ]}
          sx={{ mt: 3, mb: 5 }}
        />

        <HomeServiceDetailsGallery images={_mockTour.gallery} />

        <Grid container columnSpacing={8} rowSpacing={5} direction="row-reverse">
          <Grid xs={12} md={5} lg={4}>
            <HomeServiceDetailsReserveForm tour={_mockTour} />
          </Grid>

          <Grid xs={12} md={7} lg={8}>
            <HomeServiceDetailsHeader tour={_mockTour} />

            <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

            <HomeServiceDetailsSummary tour={_mockTour} />
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ my: 10 }} />

      <ReviewTravel />

      <HomeServiceListSimilar services={_services.slice(-4)} />
    </>
  );
}
