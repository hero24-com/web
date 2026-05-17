'use client';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { useHubspotForm } from 'src/hooks/use-hubspot-form';

// ----------------------------------------------------------------------

type Props = {
  formId: string;
  /**
   * Custom subject line for the form submission
   * @default "Uusi tarjouspyyntö - Palvelun varaus"
   */
  subject?: string;
};

export default function HomeServiceDetailsReserveForm({ formId, subject }: Props) {
  const t = useTranslations();
  const subjectText = subject ?? t('services.reserveForm.defaultSubject');
  // Initialize the HubSpot form with the custom subject line
  // This will add a hidden field named 'email_subject' to the form
  // The value of this field can be used in HubSpot workflows to set the email subject
  const uniqueFormId = useHubspotForm(formId, {
    subject: subjectText,
  });

  // Try to set a global property that HubSpot might use
  useEffect(() => {
    try {
      // @ts-expect-error - HubSpot types not available
      if (window.hbspt && window.hbspt.forms) {
        // @ts-expect-error - HubSpot types not available
        window.hbspt.forms.defaults = window.hbspt.forms.defaults || {};
        // @ts-expect-error - HubSpot types not available
        window.hbspt.forms.defaults.subject = subject;
        // @ts-expect-error - HubSpot types not available
        window.hbspt.forms.defaults.emailSubject = subject;
        // @ts-expect-error - HubSpot types not available
        window.hbspt.forms.defaults.notificationSubject = subject;
      }
    } catch (error) {
      // Ignore errors for global property attempts
    }
  }, [subjectText]);

  return (
    <Card>
      <Stack spacing={3} sx={{ p: 3 }}>
        <Typography variant="h4">{t('services.reserveForm.title')}</Typography>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack spacing={3} sx={{ p: 3 }}>
        {/* Add hidden fields with the subject value that HubSpot might use */}
        <input
          type="hidden"
          id="hs_email_subject"
          name="hs_email_subject"
          value={subjectText}
          data-subject={subjectText}
          data-email-subject={subjectText}
          data-notification-subject={subjectText}
        />

        {/* This is where the HubSpot form will be rendered */}
        <Box
          id={uniqueFormId}
          data-subject={subjectText}
          data-email-subject={subjectText}
          data-notification-subject={subjectText}
        />
      </Stack>
    </Card>
  );
}
