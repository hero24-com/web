import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function HomeContactInfo() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Stack spacing={3}>
      {mdUp && (
        <Image
          alt="marketing contact"
          src="/assets/contact.webp"
          sx={{ mb: 5 }}
        />
      )}

      <Stack spacing={2} alignItems="flex-start" direction="row">
        <Iconify width={28} icon="carbon:mobile" />
        <Stack spacing={0.5}>
          <Typography variant="h6">Tel: 09 42452538</Typography>
        </Stack>
      </Stack>

      <Stack spacing={2} alignItems="flex-start" direction="row">
        <Iconify width={28} icon="carbon:email" />
        <Stack spacing={0.5}>
          <Link
            color="inherit"
            variant="body2"
            href="mailto:support@hero24.app"
          >
            <Typography variant="h6">Email: support@hero24.app</Typography>
          </Link>
        </Stack>
      </Stack>

      <Stack spacing={2} alignItems="flex-start" direction="row">
        <Iconify width={28} icon="carbon:home" />
        <Stack spacing={0.5}>
          <Typography variant="h6">Y-tunnus: 3346521-8</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
