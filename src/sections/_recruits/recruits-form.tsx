'use client';

import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
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
import FormControlLabel from '@mui/material/FormControlLabel';
import CircularProgress from '@mui/material/CircularProgress';

import Iconify from 'src/components/iconify';

import {
  ROLE_OPTIONS,
  ENGLISH_LEVELS,
  LANGUAGE_LEVELS,
  EXPERIENCE_AREAS,
  RECRUITED_OPTIONS,
  START_DATE_OPTIONS,
  recruitsFormSchema,
  COMPENSATION_OPTIONS,
  recruitsFormDefaults,
  TIME_COMMITMENT_OPTIONS,
  type RecruitsFormValues,
} from './recruits-form-schema';

// ----------------------------------------------------------------------

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_TYPES = ['.pdf', '.doc', '.docx'];

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error' | 'invalid';

export default function RecruitsForm() {
  const t = useTranslations('recruits.form');
  const tFields = useTranslations('recruits.form.fields');
  const tOpts = useTranslations('recruits.form.options');
  const tValidation = useTranslations('recruits.form.validation');
  const tSections = useTranslations('recruits.form.sections');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm<RecruitsFormValues>({
    resolver: zodResolver(recruitsFormSchema),
    defaultValues: recruitsFormDefaults,
  });

  const recruitedBefore = watch('recruitedBefore');

  const translateError = (key?: string) => (key ? tValidation(key) : undefined);

  const onSubmit = async (values: RecruitsFormValues) => {
    setSubmitStatus('submitting');
    try {
      const fd = new FormData();
      fd.append('payload', JSON.stringify(values));
      if (cvFile) fd.append('cv', cvFile);

      const response = await fetch('/api/recruits/apply', {
        method: 'POST',
        body: fd,
      });
      if (!response.ok) throw new Error('Submission failed');
      setSubmitStatus('success');
      setCvFile(null);
      reset(recruitsFormDefaults);
      window.scrollTo({ top: document.getElementById('apply')?.offsetTop ?? 0, behavior: 'smooth' });
    } catch (err) {
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
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        if (typeof el.focus === 'function') el.focus({ preventScroll: true });
      }
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
      <Container id="apply" sx={{ py: { xs: 8, md: 12 } }}>
        <Card sx={{ p: { xs: 4, md: 6 }, maxWidth: 720, mx: 'auto', textAlign: 'center' }}>
          <Stack spacing={3} alignItems="center">
            <Iconify icon="solar:check-circle-bold" width={64} sx={{ color: 'success.main' }} />
            <Typography variant="h3">{t('thankYouTitle')}</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              {t('thankYouBody1')}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              {t('thankYouBody2')}
            </Typography>
          </Stack>
        </Card>
      </Container>
    );
  }

  return (
    <Container id="apply" sx={{ py: { xs: 8, md: 12 } }}>
      <Card sx={{ p: { xs: 3, md: 5 }, maxWidth: 880, mx: 'auto' }}>
        <Stack spacing={2} sx={{ mb: 4 }}>
          <Typography variant="h3">{t('title')}</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {t('subtitle')}
          </Typography>
        </Stack>

        <form onSubmit={handleSubmit(onSubmit, onInvalid)} noValidate>
          <Stack spacing={5}>
            {/* ROLE */}
            <FormSection title={tSections('role')}>
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
            </FormSection>

            {/* BASIC */}
            <FormSection title={tSections('basic')}>
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  label={tFields('fullName')}
                  {...register('fullName')}
                  error={!!errors.fullName}
                  helperText={translateError(errors.fullName?.message)}
                />
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField
                    fullWidth
                    type="email"
                    label={tFields('email')}
                    {...register('email')}
                    error={!!errors.email}
                    helperText={translateError(errors.email?.message)}
                  />
                  <TextField
                    fullWidth
                    label={tFields('phone')}
                    {...register('phone')}
                    error={!!errors.phone}
                    helperText={translateError(errors.phone?.message)}
                  />
                </Stack>
                <TextField
                  fullWidth
                  label={tFields('location')}
                  {...register('location')}
                  error={!!errors.location}
                  helperText={translateError(errors.location?.message)}
                />
                <TextField
                  fullWidth
                  label={tFields('linkedin')}
                  placeholder={tFields('linkedinPlaceholder')}
                  {...register('linkedin')}
                  error={!!errors.linkedin}
                  helperText={translateError(errors.linkedin?.message)}
                />
              </Stack>
            </FormSection>

            {/* LANGUAGES */}
            <FormSection title={tSections('languages')}>
              <Stack spacing={2}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Controller
                    name="spanishLevel"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        value={field.value ?? ''}
                        select
                        fullWidth
                        label={tFields('spanishLevel')}
                      >
                        {LANGUAGE_LEVELS.map((lvl) => (
                          <MenuItem key={lvl} value={lvl}>
                            {tOpts(`level.${lvl}`)}
                          </MenuItem>
                        ))}
                      </TextField>
                    )}
                  />
                  <Controller
                    name="englishLevel"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        select
                        fullWidth
                        label={tFields('englishLevel')}
                        error={!!errors.englishLevel}
                        helperText={translateError(errors.englishLevel?.message)}
                      >
                        {ENGLISH_LEVELS.map((lvl) => (
                          <MenuItem key={lvl} value={lvl}>
                            {tOpts(`level.${lvl}`)}
                          </MenuItem>
                        ))}
                      </TextField>
                    )}
                  />
                </Stack>
                <TextField
                  fullWidth
                  multiline
                  minRows={2}
                  label={tFields('otherLanguages')}
                  helperText={tFields('otherLanguagesHelper')}
                  {...register('otherLanguages')}
                />
              </Stack>
            </FormSection>

            {/* MARKET */}
            <FormSection title={tSections('market')}>
              <TextField
                fullWidth
                multiline
                minRows={3}
                label={tFields('marketKnowledge')}
                {...register('marketKnowledge')}
                error={!!errors.marketKnowledge}
                helperText={translateError(errors.marketKnowledge?.message)}
              />
            </FormSection>

            {/* EXPERIENCE */}
            <FormSection title={tSections('experience')}>
              <Stack spacing={2}>
                <FormControl error={!!errors.experienceAreas}>
                  <FormLabel sx={{ mb: 1 }}>{tFields('experienceAreas')}</FormLabel>
                  <Controller
                    name="experienceAreas"
                    control={control}
                    render={({ field }) => (
                      <Box
                        sx={{
                          display: 'grid',
                          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                          gap: 0.5,
                        }}
                      >
                        {EXPERIENCE_AREAS.map((area) => {
                          const checked = field.value?.includes(area) ?? false;
                          return (
                            <FormControlLabel
                              key={area}
                              control={
                                <Checkbox
                                  checked={checked}
                                  onChange={(e) => {
                                    const next = e.target.checked
                                      ? [...(field.value ?? []), area]
                                      : (field.value ?? []).filter((v) => v !== area);
                                    field.onChange(next);
                                  }}
                                />
                              }
                              label={
                                <Typography variant="body2">
                                  {tOpts(`experience.${area}`)}
                                </Typography>
                              }
                            />
                          );
                        })}
                      </Box>
                    )}
                  />
                  {errors.experienceAreas && (
                    <Typography variant="caption" sx={{ color: 'error.main', mt: 0.5 }}>
                      {translateError(errors.experienceAreas.message)}
                    </Typography>
                  )}
                </FormControl>

                <TextField
                  fullWidth
                  multiline
                  minRows={3}
                  label={tFields('experienceDescription')}
                  {...register('experienceDescription')}
                  error={!!errors.experienceDescription}
                  helperText={translateError(errors.experienceDescription?.message)}
                />

                <FormControl error={!!errors.recruitedBefore}>
                  <FormLabel sx={{ mb: 1 }}>{tFields('recruitedBefore')}</FormLabel>
                  <Controller
                    name="recruitedBefore"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup {...field} row>
                        {RECRUITED_OPTIONS.map((opt) => (
                          <FormControlLabel
                            key={opt}
                            value={opt}
                            control={<Radio />}
                            label={tOpts(`recruited.${opt}`)}
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
                    minRows={2}
                    label={tFields('recruitedDescription')}
                    {...register('recruitedDescription')}
                  />
                )}
              </Stack>
            </FormSection>

            {/* EXECUTION */}
            <FormSection title={tSections('execution')}>
              <Stack spacing={2}>
                <LongTextField
                  label={tFields('first100')}
                  registerProps={register('first100')}
                  error={errors.first100?.message}
                  translateError={translateError}
                />
                <LongTextField
                  label={tFields('channels')}
                  registerProps={register('channels')}
                  error={errors.channels?.message}
                  translateError={translateError}
                />
                <LongTextField
                  label={tFields('aiTools')}
                  registerProps={register('aiTools')}
                  error={errors.aiTools?.message}
                  translateError={translateError}
                />
                <LongTextField
                  label={tFields('processImproved')}
                  registerProps={register('processImproved')}
                  error={errors.processImproved?.message}
                  translateError={translateError}
                />
                <LongTextField
                  label={tFields('thirtyDayPlan')}
                  registerProps={register('thirtyDayPlan')}
                  error={errors.thirtyDayPlan?.message}
                  translateError={translateError}
                />
              </Stack>
            </FormSection>

            {/* AVAILABILITY */}
            <FormSection title={tSections('availability')}>
              <Stack spacing={2}>
                <FormControl error={!!errors.startDate}>
                  <FormLabel sx={{ mb: 1 }}>{tFields('startDate')}</FormLabel>
                  <Controller
                    name="startDate"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup {...field} row>
                        {START_DATE_OPTIONS.map((opt) => (
                          <FormControlLabel
                            key={opt}
                            value={opt}
                            control={<Radio />}
                            label={tOpts(`startDate.${opt}`)}
                          />
                        ))}
                      </RadioGroup>
                    )}
                  />
                </FormControl>

                <FormControl error={!!errors.timeCommitment}>
                  <FormLabel sx={{ mb: 1 }}>{tFields('timeCommitment')}</FormLabel>
                  <Controller
                    name="timeCommitment"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup {...field} row>
                        {TIME_COMMITMENT_OPTIONS.map((opt) => (
                          <FormControlLabel
                            key={opt}
                            value={opt}
                            control={<Radio />}
                            label={tOpts(`timeCommitment.${opt}`)}
                          />
                        ))}
                      </RadioGroup>
                    )}
                  />
                </FormControl>

                <FormControl error={!!errors.compensation}>
                  <FormLabel sx={{ mb: 1 }}>{tFields('compensation')}</FormLabel>
                  <Controller
                    name="compensation"
                    control={control}
                    render={({ field }) => (
                      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 0.5 }}>
                        {COMPENSATION_OPTIONS.map((opt) => {
                          const checked = field.value?.includes(opt) ?? false;
                          return (
                            <FormControlLabel
                              key={opt}
                              control={
                                <Checkbox
                                  checked={checked}
                                  onChange={(e) => {
                                    const next = e.target.checked
                                      ? [...(field.value ?? []), opt]
                                      : (field.value ?? []).filter((v) => v !== opt);
                                    field.onChange(next);
                                  }}
                                />
                              }
                              label={
                                <Typography variant="body2">
                                  {tOpts(`compensation.${opt}`)}
                                </Typography>
                              }
                            />
                          );
                        })}
                      </Box>
                    )}
                  />
                  {errors.compensation && (
                    <Typography variant="caption" sx={{ color: 'error.main', mt: 0.5 }}>
                      {translateError(errors.compensation.message)}
                    </Typography>
                  )}
                </FormControl>
              </Stack>
            </FormSection>

            {/* DOCUMENTS */}
            <FormSection title={tSections('documents')}>
              <Stack spacing={2}>
                <Box>
                  <FormLabel sx={{ display: 'block', mb: 1 }}>{tFields('cv')}</FormLabel>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept={ACCEPTED_TYPES.join(',')}
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                  />
                  <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
                    <Button
                      variant="outlined"
                      onClick={() => fileInputRef.current?.click()}
                      startIcon={<Iconify icon="solar:upload-bold" />}
                    >
                      {cvFile?.name || tFields('cv')}
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
                submitStatus === 'submitting' ? <CircularProgress size={20} color="inherit" /> : null
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

type LongTextFieldProps = {
  label: string;
  registerProps: ReturnType<ReturnType<typeof useForm<RecruitsFormValues>>['register']>;
  error?: string;
  translateError: (key?: string) => string | undefined;
};

function LongTextField({ label, registerProps, error, translateError }: LongTextFieldProps) {
  return (
    <TextField
      fullWidth
      multiline
      minRows={3}
      label={label}
      {...registerProps}
      error={!!error}
      helperText={translateError(error)}
    />
  );
}
