import Stack from '@mui/material/Stack';

import NavList from './nav-list';

import type { NavProps } from '../types';

// ----------------------------------------------------------------------

export default function NavDesktop({ data, sx, ...other }: NavProps) {
  return (
    <Stack
      component="nav"
      direction="row"
      spacing={3}
      sx={{
        height: 1,
        ...sx,
      }}
      {...other}
    >
      {data.map((list) => (
        <NavList key={list.title} data={list} />
      ))}
    </Stack>
  );
}
