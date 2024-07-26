import Box from '@mui/material/Box';

import { IServiceProps } from 'src/types/service';

import HomeServiceItem from './home-service-item';
import HomeServiceItemSkeleton from './home-service-item-skeleton';

// ----------------------------------------------------------------------

type Props = {
  services: IServiceProps[];
};

export default function HomeServiceList({ services }: Props) {
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
        {services.map((service, index) =>
          service ? (
            <HomeServiceItem key={service.id} service={service} />
          ) : (
            <HomeServiceItemSkeleton key={index} />
          )
        )}
      </Box>
    </>
  );
}
