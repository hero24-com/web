import { z } from 'zod';

// ----------------------------------------------------------------------

export const ROLE_OPTIONS = [
  'spain',
  'finland',
  'estonia',
  'sweden',
  'english',
  'open',
] as const;

export const LANGUAGE_LEVELS = ['native', 'fluent', 'professional', 'basic', 'na'] as const;
export const ENGLISH_LEVELS = ['native', 'fluent', 'professional', 'basic'] as const;

export const EXPERIENCE_AREAS = [
  'sales',
  'businessDevelopment',
  'recruitment',
  'marketplacePlatforms',
  'startupOperations',
  'localOperations',
  'homeServices',
  'propertyManagement',
  'facilityServices',
  'housingAssociations',
  'realEstate',
  'landlords',
  'cleaning',
  'movingServices',
  'constructionRenovation',
  'maintenanceServices',
  'localContractorNetworks',
  'partnerships',
  'aiTools',
  'crm',
  'salesMarketingAutomation',
  'other',
] as const;

export const RECRUITED_OPTIONS = ['yes', 'no', 'somewhat'] as const;
export const START_DATE_OPTIONS = ['immediately', 'twoWeeks', 'oneMonth', 'later'] as const;
export const TIME_COMMITMENT_OPTIONS = ['fullTime', 'partTime', 'projectBased', 'flexible'] as const;
export const COMPENSATION_OPTIONS = [
  'commission',
  'monthlyRetainer',
  'contractor',
  'partner',
  'combination',
  'openToDiscussion',
] as const;

export const recruitsFormSchema = z.object({
  role: z.enum(ROLE_OPTIONS, { error: 'required' }),
  fullName: z.string().min(1, 'required'),
  email: z.string().email('email'),
  phone: z.string().min(1, 'required'),
  location: z.string().min(1, 'required'),
  linkedin: z
    .string()
    .url('url')
    .or(z.literal(''))
    .optional(),

  spanishLevel: z.enum(LANGUAGE_LEVELS).optional(),
  englishLevel: z.enum(ENGLISH_LEVELS, { error: 'required' }),
  otherLanguages: z.string().optional(),

  marketKnowledge: z.string().min(1, 'required'),

  experienceAreas: z.array(z.enum(EXPERIENCE_AREAS)).min(1, 'minOne'),
  experienceDescription: z.string().min(1, 'required'),
  recruitedBefore: z.enum(RECRUITED_OPTIONS, { error: 'required' }),
  recruitedDescription: z.string().optional(),

  first100: z.string().min(1, 'required'),
  channels: z.string().min(1, 'required'),
  aiTools: z.string().min(1, 'required'),
  processImproved: z.string().min(1, 'required'),
  thirtyDayPlan: z.string().min(1, 'required'),

  startDate: z.enum(START_DATE_OPTIONS, { error: 'required' }),
  timeCommitment: z.enum(TIME_COMMITMENT_OPTIONS, { error: 'required' }),
  compensation: z.array(z.enum(COMPENSATION_OPTIONS)).min(1, 'minOne'),

  anythingElse: z.string().optional(),
});

export type RecruitsFormValues = z.infer<typeof recruitsFormSchema>;

export const recruitsFormDefaults: RecruitsFormValues = {
  role: 'spain',
  fullName: '',
  email: '',
  phone: '',
  location: '',
  linkedin: '',
  spanishLevel: undefined,
  englishLevel: 'fluent',
  otherLanguages: '',
  marketKnowledge: '',
  experienceAreas: [],
  experienceDescription: '',
  recruitedBefore: 'no',
  recruitedDescription: '',
  first100: '',
  channels: '',
  aiTools: '',
  processImproved: '',
  thirtyDayPlan: '',
  startDate: 'immediately',
  timeCommitment: 'fullTime',
  compensation: [],
  anythingElse: '',
};
