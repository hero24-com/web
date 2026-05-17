'use client';

import { useTranslations } from 'next-intl';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export const ROLE_KEYS = ['spain', 'finland', 'estonia', 'sweden', 'english'] as const;
export type RoleKey = (typeof ROLE_KEYS)[number];

type BulletListProps = {
  label: string;
  items: string[];
  iconColor?: string;
};

function BulletList({ label, items, iconColor = 'primary.main' }: BulletListProps) {
  return (
    <Stack spacing={1.5}>
      <Typography variant="subtitle1">{label}</Typography>
      <Stack spacing={1}>
        {items.map((item) => (
          <Stack key={item} direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
            <Iconify
              icon="solar:check-circle-bold"
              width={18}
              sx={{ color: iconColor, flexShrink: 0, mt: 0.4 }}
            />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

type RoleAccordionProps = {
  roleKey: RoleKey;
  applyLabel: string;
};

function RoleAccordion({ roleKey, applyLabel }: RoleAccordionProps) {
  const t = useTranslations(`recruits.roles.list.${roleKey}`);
  const labels = useTranslations('recruits.roles');

  const whatYouDo = t.raw('whatYouDo') as string[];
  const whoWeLookFor = t.raw('whoWeLookFor') as string[];
  const idealProfile = t.raw('idealProfile') as string[];
  const whatWeOffer = t.raw('whatWeOffer') as string[];

  const hasWhoOutro = t.has('whoOutro');
  const hasImportantNote = t.has('importantNote');

  return (
    <Accordion
      id={`role-${roleKey}`}
      sx={{
        borderRadius: 2,
        '&:before': { display: 'none' },
      }}
    >
      <AccordionSummary
        expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}
        sx={{ px: { xs: 2, md: 3 }, py: 1.5 }}
      >
        <Stack spacing={1} sx={{ width: 1 }}>
          <Typography variant="h5">{t('title')}</Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            <Chip
              size="small"
              icon={<Iconify icon="solar:map-point-bold" width={14} />}
              label={t('location')}
            />
            <Chip size="small" variant="outlined" label={t('languages')} />
          </Stack>
        </Stack>
      </AccordionSummary>

      <AccordionDetails sx={{ px: { xs: 2, md: 3 }, pb: 3 }}>
        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography variant="h6" sx={{ color: 'primary.main' }}>
              {t('tagline')}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              {t('summary')}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {t('context')}
            </Typography>
          </Stack>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
            sx={{ color: 'text.secondary' }}
          >
            <Box>
              <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                {labels('labelCities')}
              </Typography>
              <Typography variant="body2">{t('cities')}</Typography>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                {labels('labelType')}
              </Typography>
              <Typography variant="body2">{t('type')}</Typography>
            </Box>
          </Stack>

          <Divider sx={{ borderStyle: 'dashed' }} />

          <BulletList label={labels('labelWhatYouDo')} items={whatYouDo} />

          <Stack spacing={1.5}>
            <Typography variant="subtitle1">{labels('labelWhoWeLookFor')}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {t('whoIntro')}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {whoWeLookFor.map((item) => (
                <Chip key={item} label={item} size="small" variant="outlined" />
              ))}
            </Box>
            {hasWhoOutro && (
              <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                {t('whoOutro')}
              </Typography>
            )}
          </Stack>

          <BulletList label={labels('labelIdealProfile')} items={idealProfile} />

          <BulletList
            label={labels('labelWhatWeOffer')}
            items={whatWeOffer}
            iconColor="success.main"
          />

          {hasImportantNote && (
            <Stack spacing={1} sx={{ p: 2, borderRadius: 1, bgcolor: 'background.neutral' }}>
              <Typography variant="subtitle2">{labels('labelImportantNote')}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {t('importantNote')}
              </Typography>
            </Stack>
          )}

          <Button variant="contained" color="primary" href="#apply" sx={{ alignSelf: 'flex-start' }}>
            {applyLabel}
          </Button>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}

export default function RecruitsRoles() {
  const t = useTranslations('recruits.roles');
  const hero = useTranslations('recruits.hero');
  const applyLabel = hero('ctaApply');

  return (
    <Container id="roles" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={5}>
        <Stack spacing={1} sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto' }}>
          <Typography variant="h2">{t('title')}</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {t('subtitle')}
          </Typography>
        </Stack>

        <Stack spacing={2}>
          {ROLE_KEYS.map((roleKey) => (
            <RoleAccordion key={roleKey} roleKey={roleKey} applyLabel={applyLabel} />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
