'use client';
import type { StackProps } from '@mui/material/Stack';

import Link from '@mui/material/Link';
import Masonry from '@mui/lab/Masonry';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';
import Button, { buttonClasses } from '@mui/material/Button';
import { useTranslations } from 'next-intl';

import { paths } from 'src/routes/paths';
import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import {
  _citiesSpainArea1,
  _citiesFinlandArea1,
  _citiesFinlandArea2,
  _citiesFinlandArea3,
  _citiesFinlandArea4,
  _citiesFinlandArea5,
} from 'src/_mock';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

import { navConfig, serviceLinks } from './config-navigation';

import type { NavSubListProps } from './nav/types';

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
  const t = useTranslations();
  const mdUp = useResponsive('up', 'md');

  const mobileTitle = navConfig.find((i) => i.path === paths.services.root)?.children || [];

  const mobileList = mobileTitle.sort((listA, listB) => Number(listB.order) - Number(listA.order));

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
                  {t('footer.taglineLong')}
                </Typography>
              </Stack>

              <Stack spacing={2}>
                <Typography variant="h6">{t('footer.app.title')}</Typography>
                <AppStoreButton />
              </Stack>
            </Stack>
          </Grid>

          <Grid xs={12} md={8}>
            {mdUp ? (
              <Masonry columns={6} spacing={2} defaultColumns={4} defaultSpacing={2}>
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
        <Grid container spacing={3} justifyContent={{ md: 'space-between' }} sx={{ py: 3 }}>
          <Grid xs={4} md={2}>
            <Typography variant="h6" sx={{ pb: 3 }}>
              {t('footer.regions.uusimaa')}
            </Typography>
            {mdUp ? (
              <Masonry columns={1} spacing={2} defaultColumns={4} defaultSpacing={2}>
                {_citiesFinlandArea1.map((value) => (
                  <Typography key={value} variant="caption" sx={{ color: 'text.secondary' }}>
                    {value}
                  </Typography>
                ))}
              </Masonry>
            ) : (
              <Stack spacing={1.5}>
                {_citiesFinlandArea1.map((value) => (
                  <Typography key={value} variant="caption" sx={{ color: 'text.secondary' }}>
                    {value}
                  </Typography>
                ))}
              </Stack>
            )}
          </Grid>
          <Grid xs={4} md={2}>
            <Typography variant="h6" sx={{ pb: 3 }}>
              {t('footer.regions.varsinaisSuomi')}
            </Typography>
            {mdUp ? (
              <Masonry columns={1} spacing={2} defaultColumns={4} defaultSpacing={2}>
                {_citiesFinlandArea2.map((value) => (
                  <Typography key={value} variant="caption" sx={{ color: 'text.secondary' }}>
                    {value}
                  </Typography>
                ))}
              </Masonry>
            ) : (
              <Stack spacing={1.5}>
                {_citiesFinlandArea2.map((value) => (
                  <Typography key={value} variant="caption" sx={{ color: 'text.secondary' }}>
                    {value}
                  </Typography>
                ))}
              </Stack>
            )}
          </Grid>
          <Grid xs={4} md={2}>
            <Typography variant="h6" sx={{ pb: 3 }}>
              {t('footer.regions.pirkanmaa')}
            </Typography>
            {mdUp ? (
              <Masonry columns={1} spacing={2} defaultColumns={4} defaultSpacing={2}>
                {_citiesFinlandArea3.map((value) => (
                  <Typography key={value} variant="caption" sx={{ color: 'text.secondary' }}>
                    {value}
                  </Typography>
                ))}
              </Masonry>
            ) : (
              <Stack spacing={1.5}>
                {_citiesFinlandArea3.map((value) => (
                  <Typography key={value} variant="caption" sx={{ color: 'text.secondary' }}>
                    {value}
                  </Typography>
                ))}
              </Stack>
            )}
          </Grid>
          <Grid xs={4} md={2}>
            <Typography variant="h6" sx={{ pb: 3 }}>
              {t('footer.regions.keskiSuomi')}
            </Typography>
            {mdUp ? (
              <Masonry columns={1} spacing={2} defaultColumns={4} defaultSpacing={2}>
                {_citiesFinlandArea4.map((value) => (
                  <Typography key={value} variant="caption" sx={{ color: 'text.secondary' }}>
                    {value}
                  </Typography>
                ))}
              </Masonry>
            ) : (
              <Stack spacing={1.5}>
                {_citiesFinlandArea4.map((value) => (
                  <Typography key={value} variant="caption" sx={{ color: 'text.secondary' }}>
                    {value}
                  </Typography>
                ))}
              </Stack>
            )}
          </Grid>
          <Grid xs={4} md={2}>
            <Typography variant="h6" sx={{ pb: 3 }}>
              {t('footer.regions.paijatHame')}
            </Typography>
            {mdUp ? (
              <Masonry columns={1} spacing={2} defaultColumns={4} defaultSpacing={2}>
                {_citiesFinlandArea5.map((value) => (
                  <Typography key={value} variant="caption" sx={{ color: 'text.secondary' }}>
                    {value}
                  </Typography>
                ))}
              </Masonry>
            ) : (
              <Stack spacing={1.5}>
                {_citiesFinlandArea5.map((value) => (
                  <Typography key={value} variant="caption" sx={{ color: 'text.secondary' }}>
                    {value}
                  </Typography>
                ))}
              </Stack>
            )}
          </Grid>
          <Grid xs={4} md={2}>
            <Typography variant="h6" sx={{ pb: 3 }}>
              {t('footer.regions.costaDelSol')}
            </Typography>
            {mdUp ? (
              <Masonry columns={1} spacing={2} defaultColumns={4} defaultSpacing={2}>
                {_citiesSpainArea1.map((value) => (
                  <Typography key={value} variant="caption" sx={{ color: 'text.secondary' }}>
                    {value}
                  </Typography>
                ))}
              </Masonry>
            ) : (
              <Stack spacing={1.5}>
                {_citiesSpainArea1.map((value) => (
                  <Typography key={value} variant="caption" sx={{ color: 'text.secondary' }}>
                    {value}
                  </Typography>
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
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </Typography>

          <Stack direction="row" spacing={3} justifyContent="center">
            <Link
              href="https://api.hero24.com/terms/fi"
              target="_blank"
              rel="noopener"
              color="inherit"
              underline="none"
              variant="caption"
              sx={{ color: 'text.secondary' }}
            >
              {t('footer.links.termsCustomer')}
            </Link>

            <Link
              href="https://api.hero24.com/seller_terms/fi"
              target="_blank"
              rel="noopener"
              color="inherit"
              underline="none"
              variant="caption"
              sx={{ color: 'text.secondary' }}
            >
              {t('footer.links.termsHero')}
            </Link>

            <Link
              href="https://api.hero24.com/privacy/fi"
              target="_blank"
              rel="noopener"
              color="inherit"
              underline="none"
              variant="caption"
              sx={{ color: 'text.secondary' }}
            >
              {t('footer.links.privacyFi')}
            </Link>

            <Link
              href="https://api.hero24.com/privacy/en"
              target="_blank"
              rel="noopener"
              color="inherit"
              underline="none"
              variant="caption"
              sx={{ color: 'text.secondary' }}
            >
              {t('footer.links.privacyEn')}
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
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography variant="subtitle2">{t(list.subheader)}</Typography>

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
            {t(link.title)}
          </Link>
        );
      })}
    </Stack>
  );
}

// ----------------------------------------------------------------------

export function ListMobile({ list }: { list: NavSubListProps }) {
  const t = useTranslations();
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
        {t(list.subheader)}
        <Iconify
          width={16}
          icon={listExpand.value ? 'carbon:chevron-down' : 'carbon:chevron-right'}
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
              {t(link.title)}
            </Link>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}

// ----------------------------------------------------------------------

export function AppStoreButton({ ...other }: StackProps) {
  const t = useTranslations();
  return (
    <Stack direction="row" flexWrap="wrap" spacing={2} {...other}>
      <Link component={RouterLink} href={paths.appStoreLink}>
        <StyledAppStoreButton startIcon={<Iconify icon="ri:apple-fill" width={28} />}>
          <Stack alignItems="flex-start">
            <Typography variant="caption" sx={{ opacity: 0.72 }}>
              {t('footer.app.downloadOn')}
            </Typography>

            <Typography variant="h6" sx={{ mt: -0.5 }}>
              {t('footer.app.appleStore')}
            </Typography>
          </Stack>
        </StyledAppStoreButton>
      </Link>

      <Link component={RouterLink} href={paths.googlePlayLink}>
        <StyledAppStoreButton startIcon={<Iconify icon="logos:google-play-icon" width={28} />}>
          <Stack alignItems="flex-start">
            <Typography variant="caption" sx={{ opacity: 0.72 }}>
              {t('footer.app.downloadFrom')}
            </Typography>

            <Typography variant="h6" sx={{ mt: -0.5 }}>
              {t('footer.app.googlePlay')}
            </Typography>
          </Stack>
        </StyledAppStoreButton>
      </Link>
    </Stack>
  );
}
