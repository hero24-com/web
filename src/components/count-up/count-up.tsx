import type { Theme, SxProps } from '@mui/material/styles';
import type { CountUpProps as ReactCountUpProps } from 'react-countup';

import { useRef } from 'react';
import ReactCountUp from 'react-countup';
import { useInView } from 'framer-motion';

import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

export interface CountUpNumberProps extends ReactCountUpProps {
  sx?: SxProps<Theme>;
}

export default function CountUp({ sx, ...other }: CountUpNumberProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  return (
    <Box component="span" ref={ref} sx={sx}>
      {isInView && <ReactCountUp duration={1} {...other} />}
    </Box>
  );
}
