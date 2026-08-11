'use client';

import { useTranslations } from 'next-intl';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef, useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircularProgress from '@mui/material/CircularProgress';

import { track } from 'src/utils/track';

import Iconify from 'src/components/iconify';

import { useRecruitsParams } from './use-recruits-params';
import {
  ROLE_OPTIONS,
  assessmentSchema,
  RECRUITED_OPTIONS,
  assessmentDefaults,
  COMPENSATION_OPTIONS,
  type AssessmentValues,
} from './recruits-form-schema';

// ----------------------------------------------------------------------

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error' | 'invalid';

/** Long-form strategic questions, rendered in order. */
const EXECUTION_FIELDS = [
  'first100',
  'channels',
  'aiTools',
  'processImproved',
  'thirtyDayPlan',
] as const;

export default function AssessmentForm() {
  const t = useTranslations('recruits.assessment');
  const tFields = useTranslations('recruits.assessment.fields');
  const tOpts = useTranslations('recruits.assessment.options');
  const tSections = useTranslations('recruits.assessment.sections');
  const tValidation = useTranslations('recruits.quickApply.validation');

  const { role, utm } = useRecruitsParams();

  const hasStarted = useRef(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<AssessmentValues>({
    resolver: zodResolver(assessmentSchema),
    defaultValues: assessmentDefaults,
  });

  useEffect(() => {
    setValue('role', role);
    setValue('utm', utm);
  }, [role, utm, setValue]);

  const recruitedBefore = watch('recruitedBefore');

  const translateError = (key?: string) => (key ? tValidation(key) : undefined);

  const handleFirstInteraction = useCallback(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;
    track('assessment_start', { role: getValues('role') });
  }, [getValues]);

  const onSubmit = async (values: AssessmentValues) => {
    setSubmitStatus('submitting');
    try {
      const response = await fetch('/api/recruits/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error('Submission failed');

      track('assessment_submit', { role: values.role });
      setSubmitStatus('success');
      reset(assessmentDefaults);
    } catch {
      setSubmitStatus('error');
    }
  };

  const onInvalid = (formErrors: Record<string, unknown>) => {
    setSubmitStatus('invalid');
    const firstErrorField = Object.keys(formErrors)[0];
    if (!firstErrorField) return;

    requestAnimationFrame(() => {
      const el =
        document.querySelector<HTMLElement>(`[name="${firstErrorField}"]`) ??
        document.querySelector<HTMLElement>(`[data-field="${firstErrorField}"]`);
      if (!el) return;
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (typeof el.focus === 'function') el.focus({ preventScroll: true });
    });
  };

  if (submitStatus === 'success') {
    return (
      <Container component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Card sx={{ p: { xs: 3, md: 6 }, maxWidth: 640, mx: 'auto', textAlign: 'center' }}>
          <Stack spacing={2.5} alignItems="center">
            <Iconify icon="solar:check-circle-bold" width={64} sx={{ color: 'success.main' }} />
            <Typography variant="h4">{t('thankYouTitle')}</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              {t('thankYouBody')}
            </Typography>
          </Stack>
        </Card>
      </Container>
    );
  }

  return (
    <Container component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Card sx={{ p: { xs: 2.5, md: 5 }, maxWidth: 760, mx: 'auto' }}>
        <Stack spacing={1} sx={{ mb: 4 }}>
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: 1.4 }}>
            {t('eyebrow')}
          </Typography>
          <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
            {t('title')}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {t('intro')}
          </Typography>
        </Stack>

        <form
          onSubmit={handleSubmit(onSubmit, onInvalid)}
          onFocus={handleFirstInteraction}
          noValidate
        >
          <Stack spacing={4}>
            <FormSection title={tSections('identity')}>
              <Stack spacing={2}>
                <Controller
                  name="role"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      fullWidth
                      label={tFields('role')}
                      error={!!errors.role}
                      helperText={translateError(errors.role?.message)}
                    >
                      {ROLE_OPTIONS.map((option) => (
                        <MenuItem key={option} value={option}>
                          {tOpts.has(`roles.${option}`)
                            ? tOpts(`roles.${option}`)
                            : option}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField
                    fullWidth
                    label={tFields('fullName')}
                    autoComplete="name"
                    {...register('fullName')}
                    error={!!errors.fullName}
                    helperText={translateError(errors.fullName?.message)}
                  />
                  <TextField
                    fullWidth
                    type="email"
                    label={tFields('email')}
                    autoComplete="email"
                    inputProps={{ inputMode: 'email' }}
                    {...register('email')}
                    error={!!errors.email}
                    helperText={
                      translateError(errors.email?.message) ?? tFields('emailHelper')
                    }
                  />
                </Stack>
              </Stack>
            </FormSection>

            <FormSection title={tSections('market')}>
              <TextField
                fullWidth
                multiline
                minRows={4}
                label={tFields('marketKnowledge')}
                {...register('marketKnowledge')}
                error={!!errors.marketKnowledge}
                helperText={translateError(errors.marketKnowledge?.message)}
              />
            </FormSection>

            <FormSection title={tSections('experience')}>
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  multiline
                  minRows={4}
                  label={tFields('experienceDescription')}
                  {...register('experienceDescription')}
                  error={!!errors.experienceDescription}
                  helperText={translateError(errors.experienceDescription?.message)}
                />

                <FormControl error={!!errors.recruitedBefore} data-field="recruitedBefore">
                  <FormLabel sx={{ mb: 0.5 }}>{tFields('recruitedBefore')}</FormLabel>
                  <Controller
                    name="recruitedBefore"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup {...field} row>
                        {RECRUITED_OPTIONS.map((option) => (
                          <FormControlLabel
                            key={option}
                            value={option}
                            control={<Radio />}
                            label={
                              <Typography variant="body2">
                                {tOpts(`recruited.${option}`)}
                              </Typography>
                            }
                          />
                        ))}
                      </RadioGroup>
                    )}
                  />
                </FormControl>

                {(recruitedBefore === 'yes' || recruitedBefore === 'somewhat') && (
                  <TextField
                    fullWidth
                    multiline
                    minRows={3}
                    label={tFields('recruitedDescription')}
                    {...register('recruitedDescription')}
                  />
                )}
              </Stack>
            </FormSection>

            <FormSection title={tSections('execution')}>
              <Stack spacing={2}>
                {EXECUTION_FIELDS.map((name) => (
                  <TextField
                    key={name}
                    fullWidth
                    multiline
                    minRows={4}
                    label={tFields(name)}
                    {...register(name)}
                    error={!!errors[name]}
                    helperText={translateError(errors[name]?.message)}
                  />
                ))}
              </Stack>
            </FormSection>

            <FormSection title={tSections('commercial')}>
              <Stack spacing={2}>
                <FormControl error={!!errors.compensation} data-field="compensation">
                  <FormLabel sx={{ mb: 1 }}>{tFields('compensation')}</FormLabel>
                  <Controller
                    name="compensation"
                    control={control}
                    render={({ field }) => (
                      <Box
                        sx={{
                          display: 'grid',
                          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                          gap: 0.5,
                        }}
                      >
                        {COMPENSATION_OPTIONS.map((option) => (
                          <FormControlLabel
                            key={option}
                            control={
                              <Checkbox
                                checked={field.value?.includes(option) ?? false}
                                onChange={(event) => {
                                  const next = event.target.checked
                                    ? [...(field.value ?? []), option]
                                    : (field.value ?? []).filter((value) => value !== option);
                                  field.onChange(next);
                                }}
                              />
                            }
                            label={
                              <Typography variant="body2">
                                {tOpts(`compensation.${option}`)}
                              </Typography>
                            }
                          />
                        ))}
                      </Box>
                    )}
                  />
                  {errors.compensation && (
                    <FormHelperText>{translateError(errors.compensation.message)}</FormHelperText>
                  )}
                </FormControl>

                <TextField
                  fullWidth
                  multiline
                  minRows={3}
                  label={tFields('anythingElse')}
                  {...register('anythingElse')}
                />
              </Stack>
            </FormSection>

            {submitStatus === 'invalid' && (
              <Alert severity="warning">
                <Typography variant="subtitle2">{t('validationErrorTitle')}</Typography>
                <Typography variant="body2">{t('validationErrorBody')}</Typography>
              </Alert>
            )}

            {submitStatus === 'error' && (
              <Alert severity="error">
                <Typography variant="subtitle2">{t('errorTitle')}</Typography>
                <Typography variant="body2">{t('errorBody')}</Typography>
              </Alert>
            )}

            <Divider sx={{ borderStyle: 'dashed' }} />

            <Button
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              disabled={submitStatus === 'submitting'}
              sx={{ alignSelf: 'flex-start' }}
              startIcon={
                submitStatus === 'submitting' ? (
                  <CircularProgress size={20} color="inherit" />
                ) : null
              }
            >
              {submitStatus === 'submitting' ? t('submitting') : t('submit')}
            </Button>
          </Stack>
        </form>
      </Card>
    </Container>
  );
}

// ----------------------------------------------------------------------

type FormSectionProps = {
  title: string;
  children: React.ReactNode;
};

function FormSection({ title, children }: FormSectionProps) {
  return (
    <Stack spacing={2}>
      <Typography variant="h6" sx={{ color: 'primary.main' }}>
        {title}
      </Typography>
      {children}
    </Stack>
  );
}
