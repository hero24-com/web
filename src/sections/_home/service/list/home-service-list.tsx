import Box from '@mui/material/Box';

import { ITourProps } from 'src/types/tour';

import HomeServiceItem from './home-service-item';
import TravelTourItemSkeleton from './home-service-item-skeleton';

// ----------------------------------------------------------------------

type Props = {
  tours: ITourProps[];
  loading?: boolean;
};

export default function HomeServiceList({ tours, loading }: Props) {
  return (
    <>
      <Box
        sx={{
          columnGap: 3,
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {(loading ? [...Array(20)] : tours).map((tour, index) =>
          tour ? (
            <HomeServiceItem key={tour.id} service={tour} />
          ) : (
            <TravelTourItemSkeleton key={index} />
          )
        )}
      </Box>
    </>
  );
}
