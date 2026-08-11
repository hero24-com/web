import { z } from 'zod';

// ----------------------------------------------------------------------
// Roles
// ----------------------------------------------------------------------

export const ROLE_OPTIONS = [
  'spain',
  'finland',
  'estonia',
  'sweden',
  'english',
  'open',
] as const;

export type RoleOption = (typeof ROLE_OPTIONS)[number];

/** Roles advertised as cards on the landing page ("open" is the catch-all). */
export const ROLE_KEYS = ['spain', 'finland', 'estonia', 'sweden', 'english'] as const;

export type RoleKey = (typeof ROLE_KEYS)[number];

/**
 * Resolves an untrusted `?role=` query value to a known role.
 *
 * Falls back to the open application rather than throwing, so a malformed or
 * stale campaign link still renders a usable form.
 *
 * @param value - Raw query-string value, if any.
 * @returns A valid role key.
 */
export function resolveRole(value: string | null | undefined): RoleOption {
  if (!value) return 'open';
  const normalised = value.toLowerCase();
  // Accept the friendly alias used in campaign links.
  const candidate = normalised === 'english-markets' ? 'english' : normalised;
  return ROLE_OPTIONS.includes(candidate as RoleOption) ? (candidate as RoleOption) : 'open';
}

// ----------------------------------------------------------------------
// Option sets
// ----------------------------------------------------------------------

/** Stage 1 experience areas — deliberately short enough to scan on mobile. */
export const EXPERIENCE_AREAS = [
  'sales',
  'businessDevelopment',
  'operations',
  'recruitment',
  'marketplace',
  'propertyServices',
  'homeServices',
  'entrepreneurship',
  'partnerships',
  'other',
] as const;

export const START_DATE_OPTIONS = ['immediately', 'twoWeeks', 'oneMonth', 'later'] as const;

export const TIME_COMMITMENT_OPTIONS = ['fullTime', 'partTime', 'flexible'] as const;

/** Stage 2 only. */
export const RECRUITED_OPTIONS = ['yes', 'no', 'somewhat'] as const;

/** Stage 2 only. */
export const COMPENSATION_OPTIONS = [
  'commission',
  'monthlyRetainer',
  'contractor',
  'partner',
  'combination',
  'openToDiscussion',
] as const;

// ----------------------------------------------------------------------
// UTM attribution
// ----------------------------------------------------------------------

/**
 * Campaign attribution captured from the landing URL.
 *
 * Every field is optional: organic and direct visitors carry no UTMs, and a
 * missing campaign tag must never block an application.
 */
export const utmSchema = z.object({
  utm_source: z.string().max(200).optional(),
  utm_medium: z.string().max(200).optional(),
  utm_campaign: z.string().max(200).optional(),
  utm_content: z.string().max(200).optional(),
});

export type UtmValues = z.infer<typeof utmSchema>;

export const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'] as const;

// ----------------------------------------------------------------------
// Shared identity
// ----------------------------------------------------------------------

/**
 * Fields present in both funnel stages, so a second-stage assessment can be
 * matched back to the application it belongs to.
 */
const candidateIdentity = {
  role: z.enum(ROLE_OPTIONS, { error: 'required' }),
  fullName: z.string().min(1, 'required').max(200),
  email: z.string().email('email').max(320),
};

/**
 * An optional http(s) URL.
 *
 * Zod's `.url()` accepts any valid scheme, including `javascript:` and `data:`,
 * so the protocol is checked explicitly: a profile link is rendered as an
 * anchor in the notification email, and must never carry executable content.
 */
const optionalUrl = z
  .string()
  .max(500)
  .url('url')
  .refine((value) => /^https?:\/\//i.test(value), { error: 'url' })
  .or(z.literal(''))
  .optional();

// ----------------------------------------------------------------------
// Stage 1 — Quick apply
// ----------------------------------------------------------------------

export const quickApplySchema = z.object({
  ...candidateIdentity,

  phone: z.string().min(1, 'required').max(60),
  location: z.string().min(1, 'required').max(200),
  linkedin: optionalUrl,
  languages: z.string().min(1, 'required').max(300),

  experienceAreas: z.array(z.enum(EXPERIENCE_AREAS)).min(1, 'minOne'),

  /** "What would you do first to build traction in this market?" (3–5 sentences) */
  tractionPlan: z.string().min(1, 'required').max(4000),

  startDate: z.enum(START_DATE_OPTIONS, { error: 'required' }),
  timeCommitment: z.enum(TIME_COMMITMENT_OPTIONS, { error: 'required' }),

  /**
   * Acknowledgement that the role is contractor / partner based and
   * performance-linked.
   *
   * Modelled as a literal `true` rather than a boolean so an unchecked box is a
   * validation error on both client and server, instead of a silently-accepted
   * `false`.
   */
  consent: z.literal(true, { error: 'consentRequired' }),

  utm: utmSchema.optional(),
});

export type QuickApplyValues = z.infer<typeof quickApplySchema>;

export const quickApplyDefaults: QuickApplyValues = {
  role: 'open',
  fullName: '',
  email: '',
  phone: '',
  location: '',
  linkedin: '',
  languages: '',
  experienceAreas: [],
  tractionPlan: '',
  startDate: 'immediately',
  timeCommitment: 'fullTime',
  // Deliberately invalid until the candidate ticks the box.
  consent: false as unknown as true,
  utm: {},
};

// ----------------------------------------------------------------------
// Stage 2 — Shortlist assessment
// ----------------------------------------------------------------------

export const assessmentSchema = z.object({
  ...candidateIdentity,

  marketKnowledge: z.string().min(1, 'required').max(4000),

  experienceDescription: z.string().min(1, 'required').max(4000),
  recruitedBefore: z.enum(RECRUITED_OPTIONS, { error: 'required' }),
  recruitedDescription: z.string().max(4000).optional(),

  first100: z.string().min(1, 'required').max(4000),
  channels: z.string().min(1, 'required').max(4000),
  aiTools: z.string().min(1, 'required').max(4000),
  processImproved: z.string().min(1, 'required').max(4000),
  thirtyDayPlan: z.string().min(1, 'required').max(4000),

  compensation: z.array(z.enum(COMPENSATION_OPTIONS)).min(1, 'minOne'),

  anythingElse: z.string().max(4000).optional(),

  utm: utmSchema.optional(),
});

export type AssessmentValues = z.infer<typeof assessmentSchema>;

export const assessmentDefaults: AssessmentValues = {
  role: 'open',
  fullName: '',
  email: '',
  marketKnowledge: '',
  experienceDescription: '',
  recruitedBefore: 'no',
  recruitedDescription: '',
  first100: '',
  channels: '',
  aiTools: '',
  processImproved: '',
  thirtyDayPlan: '',
  compensation: [],
  anythingElse: '',
  utm: {},
};
