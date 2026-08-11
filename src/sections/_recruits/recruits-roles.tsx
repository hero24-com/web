'use client';

import { useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';

import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { track } from 'src/utils/track';

import Iconify from 'src/components/iconify';

import { ROLE_KEYS, type RoleKey } from './recruits-form-schema';

// ----------------------------------------------------------------------

/**
 * Reports each role card the first time it becomes visible.
 *
 * Roles are unobserved once reported so a candidate scrolling up and down does
 * not inflate the view count, keeping `role_view` comparable to
 * `application_start`.
 *
 * @param containerRef - Element wrapping the role cards.
 */
function useRoleViewTracking(containerRef: React.RefObject<HTMLDivElement>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof IntersectionObserver === 'undefined') return undefined;

    const cards = Array.from(container.querySelectorAll<HTMLElement>('[data-role]'));
    if (cards.length === 0) return undefined;

    const reported = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const role = entry.target.getAttribute('data-role');
          if (!role || reported.has(role)) return;

          reported.add(role);
          track('role_view', { role });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [containerRef]);
}

// ----------------------------------------------------------------------

type RoleCardProps = {
  roleKey: RoleKey;
};

function RoleCard({ roleKey }: RoleCardProps) {
  const t = useTranslations(`recruits.roles.list.${roleKey}`);
  const labels = useTranslations('recruits.roles');

  const hasPreferred = t.has('preferred');
  const hasDetail = t.has('detail');

  return (
    <Card
      data-role={roleKey}
      id={`role-${roleKey}`}
      sx={{ p: { xs: 2.5, md: 3 }, height: 1, display: 'flex', flexDirection: 'column' }}
    >
      <Stack spacing={1.5} sx={{ flexGrow: 1 }}>
        <Typography variant="h5">{t('title')}</Typography>

        <Chip
          size="small"
          variant="outlined"
          icon={<Iconify icon="solar:map-point-bold" width={14} />}
          label={t('meta')}
          sx={{ alignSelf: 'flex-start' }}
        />

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {t('summary')}
        </Typography>

        {hasDetail && (
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {t('detail')}
          </Typography>
        )}

        {hasPreferred && (
          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            <strong>{labels('preferredLabel')}:</strong> {t('preferred')}
          </Typography>
        )}
      </Stack>

      <Button
        variant="contained"
        color="primary"
        href={`/recruits/?role=${roleKey}#apply`}
        sx={{ alignSelf: 'flex-start', mt: 2.5 }}
      >
        {labels('apply')}
      </Button>
    </Card>
  );
}

// ----------------------------------------------------------------------

export default function RecruitsRoles() {
  const t = useTranslations('recruits.roles');
  const containerRef = useRef<HTMLDivElement>(null);

  useRoleViewTracking(containerRef);

  return (
    <Container component="section" id="roles" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={4}>
        <Stack spacing={1} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
            {t('title')}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {t('subtitle')}
          </Typography>
        </Stack>

        <Stack
          ref={containerRef}
          sx={{
            display: 'grid',
            gap: 2.5,
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          }}
        >
          {ROLE_KEYS.map((roleKey) => (
            <RoleCard key={roleKey} roleKey={roleKey} />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
