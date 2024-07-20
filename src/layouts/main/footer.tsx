import Link from '@mui/material/Link';
import Masonry from '@mui/lab/Masonry';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';
import Stack, { StackProps } from '@mui/material/Stack';
import Button, { buttonClasses } from '@mui/material/Button';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

import { NavSubListProps } from './nav/types';
import { serviceLinks, navConfig } from './config-navigation';
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

const StyledAppStoreButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
  padding: '5px 12px',
  color: theme.palette.common.white,
  border: `solid 1px ${alpha(theme.palette.common.black, 0.24)}`,
  background: `linear-gradient(180deg, ${theme.palette.grey[900]} 0%, ${theme.palette.common.black} 100%)`,
  [`& .${buttonClasses.startIcon}`]: {
    marginLeft: 0,
  },
}));

// ----------------------------------------------------------------------

export default function Footer() {
  const mdUp = useResponsive('up', 'md');

  const mobileTitle =
    navConfig.find((i) => i.title === 'Palvelut')?.children || [];

  const mobileList = mobileTitle.sort(
    (listA, listB) => Number(listB.order) - Number(listA.order)
  );

  const desktopList = serviceLinks.sort(
    (listA, listB) => Number(listB.order) - Number(listA.order)
  );

  const renderLists = mdUp ? desktopList : mobileList;

  const mainFooter = (
    <>
      <Divider />

      <Container
        sx={{
          overflow: 'hidden',
          py: { xs: 8, md: 10 },
        }}
      >
        <Grid container spacing={3} justifyContent={{ md: 'space-between' }}>
          <Grid xs={12} md={4}>
            <Stack spacing={{ xs: 3, md: 5 }}>
              <Stack alignItems="flex-start" spacing={3}>
                <Logo single />

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Kaikki palvelut yhdessä sovelluksessa – yksinkertaistettuna ja
                  räätälöitynä juuri sinulle Ei enää monimutkaisia
                  tarjouspyyntöjä tai loputtomia puheluita.
                </Typography>
              </Stack>

              <Stack spacing={1} alignItems="flex-start">
                <Typography variant="h6">Community</Typography>
                <Link variant="body2" sx={{ color: 'text.primary' }}>
                  Case Studies
                </Link>

                <Link variant="body2" sx={{ color: 'text.primary' }}>
                  Blogs
                </Link>
              </Stack>

              <Stack spacing={2}>
                <Typography variant="h6">Apps</Typography>
                <AppStoreButton />
              </Stack>
            </Stack>
          </Grid>

          <Grid xs={12} md={8}>
            {mdUp ? (
              <Masonry
                columns={6}
                spacing={2}
                defaultColumns={4}
                defaultSpacing={2}
              >
                {renderLists.map((list) => (
                  <ListDesktop key={list.subheader} list={list} />
                ))}
              </Masonry>
            ) : (
              <Stack spacing={1.5}>
                {renderLists.map((list) => (
                  <ListMobile key={list.subheader} list={list} />
                ))}
              </Stack>
            )}
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <Container>
        <Stack
          spacing={2.5}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          sx={{ py: 3, textAlign: 'center' }}
        >
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            © 2024. All rights reserved
          </Typography>

          <Stack direction="row" spacing={3} justifyContent="center">
            <Link variant="caption" sx={{ color: 'text.secondary' }}>
              Privacy Policy
            </Link>

            <Link variant="caption" sx={{ color: 'text.secondary' }}>
              Terms of Service
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );

  return <footer>{mainFooter}</footer>;
}

// ----------------------------------------------------------------------

export function ListDesktop({ list }: { list: NavSubListProps }) {
  const pathname = usePathname();

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography variant="subtitle2">{list.subheader}</Typography>

      {list.items?.map((link) => {
        const active = pathname === link.path || pathname === `${link.path}/`;

        return (
          <Link
            component={RouterLink}
            key={link.title}
            href={link.path}
            variant="caption"
            sx={{
              color: 'text.secondary',
              '&:hover': {
                color: 'text.primary',
              },
              ...(active && {
                color: 'text.primary',
                fontWeight: 'fontWeightSemiBold',
              }),
            }}
          >
            {link.title}
          </Link>
        );
      })}
    </Stack>
  );
}

// ----------------------------------------------------------------------

export function ListMobile({ list }: { list: NavSubListProps }) {
  const pathname = usePathname();

  const listExpand = useBoolean();

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography
        variant="subtitle2"
        onClick={listExpand.onToggle}
        sx={{
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        {list.subheader}
        <Iconify
          width={16}
          icon={
            listExpand.value ? 'carbon:chevron-down' : 'carbon:chevron-right'
          }
          sx={{ ml: 0.5 }}
        />
      </Typography>

      <Collapse in={listExpand.value} unmountOnExit sx={{ width: 1 }}>
        <Stack spacing={1.5} alignItems="flex-start">
          {list.items?.map((link) => (
            <Link
              component={RouterLink}
              key={link.title}
              href={link.path}
              variant="caption"
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: 'text.primary',
                },
                ...(pathname === `${link.path}/` && {
                  color: 'text.primary',
                  fontWeight: 'fontWeightSemiBold',
                }),
              }}
            >
              {link.title}
            </Link>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}

// ----------------------------------------------------------------------

export function AppStoreButton({ ...other }: StackProps) {
  return (
    <Stack direction="row" flexWrap="wrap" spacing={2} {...other}>
      <Link component={RouterLink} href={paths.appStoreLink}>
        <StyledAppStoreButton
          startIcon={<Iconify icon="ri:apple-fill" width={28} />}
        >
          <Stack alignItems="flex-start">
            <Typography variant="caption" sx={{ opacity: 0.72 }}>
              Download on the
            </Typography>

            <Typography variant="h6" sx={{ mt: -0.5 }}>
              Apple Store
            </Typography>
          </Stack>
        </StyledAppStoreButton>
      </Link>

      <Link component={RouterLink} href={paths.googlePlayLink}>
        <StyledAppStoreButton
          startIcon={<Iconify icon="logos:google-play-icon" width={28} />}
        >
          <Stack alignItems="flex-start">
            <Typography variant="caption" sx={{ opacity: 0.72 }}>
              Download from
            </Typography>

            <Typography variant="h6" sx={{ mt: -0.5 }}>
              Google Play
            </Typography>
          </Stack>
        </StyledAppStoreButton>
      </Link>
    </Stack>
  );
}
