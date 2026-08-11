'use client';

import { useTranslations } from 'next-intl';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef, useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
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
  EXPERIENCE_AREAS,
  quickApplySchema,
  START_DATE_OPTIONS,
  quickApplyDefaults,
  type QuickApplyValues,
  TIME_COMMITMENT_OPTIONS,
} from './recruits-form-schema';

// ----------------------------------------------------------------------

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_TYPES = ['.pdf', '.doc', '.docx'];

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error' | 'invalid';

export default function QuickApplyForm() {
  const t = useTranslations('recruits.quickApply');
  const tFields = useTranslations('recruits.quickApply.fields');
  const tOpts = useTranslations('recruits.quickApply.options');
  const tValidation = useTranslations('recruits.quickApply.validation');

  const { role, utm } = useRecruitsParams();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const hasStarted = useRef(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<QuickApplyValues>({
    resolver: zodResolver(quickApplySchema),
    defaultValues: quickApplyDefaults,
  });

  // Seed role preselection and campaign attribution from the landing URL.
  useEffect(() => {
    setValue('role', role);
    setValue('utm', utm);
  }, [role, utm, setValue]);

  const translateError = (key?: string) => (key ? tValidation(key) : undefined);

  /** Reports the first interaction with the form, once per page view. */
  const handleFirstInteraction = useCallback(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;
    track('application_start', { role: getValues('role') });
  }, [getValues]);

  const onSubmit = async (values: QuickApplyValues) => {
    setSubmitStatus('submitting');
    try {
      const formData = new FormData();
      formData.append('payload', JSON.stringify(values));
      if (cvFile) formData.append('cv', cvFile);

      const response = await fetch('/api/recruits/apply', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error('Submission failed');

      track('application_submit', { role: values.role });
      setSubmitStatus('success');
      setCvFile(null);
      reset(quickApplyDefaults);
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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploadError(null);

    if (file.size > MAX_FILE_SIZE) {
      setUploadError(tValidation('fileSize'));
      event.target.value = '';
      return;
    }

    const ext = `.${file.name.split('.').pop()?.toLowerCase() ?? ''}`;
    if (!ACCEPTED_TYPES.includes(ext)) {
      setUploadError(tValidation('fileType'));
      event.target.value = '';
      return;
    }

    setCvFile(file);
  };

  if (submitStatus === 'success') {
    return (
      <Container component="section" id="apply" sx={{ py: { xs: 6, md: 10 } }}>
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
    <Container component="section" id="apply" sx={{ py: { xs: 6, md: 10 } }}>
      <Card sx={{ p: { xs: 2.5, md: 5 }, maxWidth: 720, mx: 'auto' }}>
        <Stack spacing={1} sx={{ mb: 3.5 }}>
          <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
            {t('title')}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {t('subtitle')}
          </Typography>
        </Stack>

        <form
          onSubmit={handleSubmit(onSubmit, onInvalid)}
          onFocus={handleFirstInteraction}
          noValidate
        >
          <Stack spacing={2.5}>
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
                      {tOpts(`roles.${option}`)}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />

            <TextField
              fullWidth
              label={tFields('fullName')}
              autoComplete="name"
              {...register('fullName')}
              error={!!errors.fullName}
              helperText={translateError(errors.fullName?.message)}
            />

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField
                fullWidth
                type="email"
                label={tFields('email')}
                autoComplete="email"
                inputProps={{ inputMode: 'email' }}
                {...register('email')}
                error={!!errors.email}
                helperText={translateError(errors.email?.message)}
              />
              <TextField
                fullWidth
                type="tel"
                label={tFields('phone')}
                autoComplete="tel"
                inputProps={{ inputMode: 'tel' }}
                {...register('phone')}
                error={!!errors.phone}
                helperText={translateError(errors.phone?.message)}
              />
            </Stack>

            <TextField
              fullWidth
              label={tFields('location')}
              autoComplete="address-level2"
              {...register('location')}
              error={!!errors.location}
              helperText={translateError(errors.location?.message)}
            />

            <TextField
              fullWidth
              type="url"
              label={tFields('linkedin')}
              placeholder={tFields('linkedinPlaceholder')}
              inputProps={{ inputMode: 'url' }}
              {...register('linkedin')}
              error={!!errors.linkedin}
              helperText={translateError(errors.linkedin?.message)}
            />

            <TextField
              fullWidth
              label={tFields('languages')}
              placeholder={tFields('languagesPlaceholder')}
              {...register('languages')}
              error={!!errors.languages}
              helperText={translateError(errors.languages?.message)}
            />

            <FormControl error={!!errors.experienceAreas} data-field="experienceAreas">
              <FormLabel sx={{ mb: 1 }}>{tFields('experienceAreas')}</FormLabel>
              <Controller
                name="experienceAreas"
                control={control}
                render={({ field }) => (
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(3, 1fr)' },
                      gap: 0.5,
                    }}
                  >
                    {EXPERIENCE_AREAS.map((area) => (
                      <FormControlLabel
                        key={area}
                        control={
                          <Checkbox
                            checked={field.value?.includes(area) ?? false}
                            onChange={(event) => {
                              const next = event.target.checked
                                ? [...(field.value ?? []), area]
                                : (field.value ?? []).filter((value) => value !== area);
                              field.onChange(next);
                            }}
                          />
                        }
                        label={<Typography variant="body2">{tOpts(`experience.${area}`)}</Typography>}
                      />
                    ))}
                  </Box>
                )}
              />
              {errors.experienceAreas && (
                <FormHelperText>{translateError(errors.experienceAreas.message)}</FormHelperText>
              )}
            </FormControl>

            <TextField
              fullWidth
              multiline
              minRows={4}
              label={tFields('tractionPlan')}
              {...register('tractionPlan')}
              error={!!errors.tractionPlan}
              helperText={translateError(errors.tractionPlan?.message)}
            />

            <FormControl error={!!errors.startDate} data-field="startDate">
              <FormLabel sx={{ mb: 0.5 }}>{tFields('startDate')}</FormLabel>
              <Controller
                name="startDate"
                control={control}
                render={({ field }) => (
                  <RadioGroup {...field} row>
                    {START_DATE_OPTIONS.map((option) => (
                      <FormControlLabel
                        key={option}
                        value={option}
                        control={<Radio />}
                        label={<Typography variant="body2">{tOpts(`startDate.${option}`)}</Typography>}
                      />
                    ))}
                  </RadioGroup>
                )}
              />
            </FormControl>

            <FormControl error={!!errors.timeCommitment} data-field="timeCommitment">
              <FormLabel sx={{ mb: 0.5 }}>{tFields('timeCommitment')}</FormLabel>
              <Controller
                name="timeCommitment"
                control={control}
                render={({ field }) => (
                  <RadioGroup {...field} row>
                    {TIME_COMMITMENT_OPTIONS.map((option) => (
                      <FormControlLabel
                        key={option}
                        value={option}
                        control={<Radio />}
                        label={
                          <Typography variant="body2">
                            {tOpts(`timeCommitment.${option}`)}
                          </Typography>
                        }
                      />
                    ))}
                  </RadioGroup>
                )}
              />
            </FormControl>

            <Box>
              <FormLabel sx={{ display: 'block', mb: 1 }}>{tFields('cv')}</FormLabel>
              <input
                ref={fileInputRef}
                type="file"
                accept={ACCEPTED_TYPES.join(',')}
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
              <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap" useFlexGap>
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={() => fileInputRef.current?.click()}
                  startIcon={<Iconify icon="solar:upload-bold" />}
                >
                  {cvFile ? tFields('cvChange') : tFields('cv')}
                </Button>
                {cvFile && (
                  <Chip
                    label={cvFile.name}
                    onDelete={() => {
                      setCvFile(null);
                      if (fileInputRef.current) fileInputRef.current.value = '';
                    }}
                  />
                )}
              </Stack>
              <Typography variant="caption" sx={{ color: 'text.disabled', display: 'block', mt: 0.5 }}>
                {tFields('cvHelper')}
              </Typography>
              {uploadError && (
                <Typography variant="caption" sx={{ color: 'error.main', display: 'block', mt: 0.5 }}>
                  {uploadError}
                </Typography>
              )}
            </Box>

            <FormControl error={!!errors.consent} data-field="consent">
              <Controller
                name="consent"
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    sx={{ alignItems: 'flex-start', ml: 0 }}
                    control={
                      <Checkbox
                        checked={!!field.value}
                        onChange={(event) => field.onChange(event.target.checked)}
                        sx={{ mt: -1 }}
                      />
                    }
                    label={<Typography variant="body2">{tFields('consent')}</Typography>}
                  />
                )}
              />
              {errors.consent && (
                <FormHelperText sx={{ ml: 0 }}>
                  {translateError(errors.consent.message)}
                </FormHelperText>
              )}
            </FormControl>

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

            <Button
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              disabled={submitStatus === 'submitting'}
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
