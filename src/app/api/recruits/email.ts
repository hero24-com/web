import type { UtmValues } from 'src/sections/_recruits/recruits-form-schema';

// ----------------------------------------------------------------------
// Shared email rendering for both recruitment funnel stages.
//
// Kept in one module so the HTML-escaping rules cannot drift apart between the
// quick-apply and assessment routes.
// ----------------------------------------------------------------------

/**
 * Escapes a string for safe interpolation into HTML.
 *
 * @param str - Untrusted candidate-supplied text.
 * @returns The escaped string.
 */
export const escapeHtml = (str: string): string =>
  str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

/**
 * Escapes a string and converts newlines to line breaks.
 *
 * @param str - Untrusted candidate-supplied text, possibly multi-line.
 * @returns Escaped HTML with `<br/>` line breaks.
 */
export const nl2br = (str: string): string => escapeHtml(str).replace(/\n/g, '<br/>');

/**
 * Renders one label/value row of the application table.
 *
 * @param label - Row label (escaped internally).
 * @param value - Pre-escaped HTML value. Callers must escape untrusted text.
 * @returns An HTML table row.
 */
export const row = (label: string, value: string): string => `
  <tr>
    <td style="padding:8px 12px;border-bottom:1px solid #eee;vertical-align:top;width:32%;color:#666;font-weight:600;">${escapeHtml(label)}</td>
    <td style="padding:8px 12px;border-bottom:1px solid #eee;vertical-align:top;">${value}</td>
  </tr>`;

/**
 * Renders a mailto link for a candidate email address.
 *
 * @param email - Candidate email address.
 * @returns An HTML anchor.
 */
export const mailtoLink = (email: string): string =>
  `<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>`;

/**
 * Renders an external link, guarding against non-http(s) schemes.
 *
 * @param url - Candidate-supplied URL.
 * @returns An HTML anchor, or escaped plain text if the scheme is not http(s).
 */
export const externalLink = (url: string): string => {
  const safe = /^https?:\/\//i.test(url);
  return safe ? `<a href="${escapeHtml(url)}">${escapeHtml(url)}</a>` : escapeHtml(url);
};

/**
 * Renders the campaign attribution rows, if any UTM values were captured.
 *
 * @param utm - Campaign attribution values.
 * @returns HTML table rows, or an empty string when there is no attribution.
 */
export const utmRows = (utm: UtmValues | undefined): string => {
  if (!utm) return '';

  const entries = Object.entries(utm).filter((entry): entry is [string, string] =>
    Boolean(entry[1])
  );
  if (entries.length === 0) return '';

  return entries.map(([key, value]) => row(key, escapeHtml(value))).join('');
};

/**
 * Wraps application rows in the shared email shell.
 *
 * @param options - Heading, sub-heading and pre-rendered table rows.
 * @returns A complete HTML email body.
 */
export const emailShell = ({
  heading,
  subheading,
  rows,
}: {
  heading: string;
  subheading: string;
  rows: string;
}): string => `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:720px;margin:0 auto;padding:24px;">
    <h1 style="color:#111;font-size:22px;margin:0 0 8px;">${escapeHtml(heading)}</h1>
    <p style="color:#666;margin:0 0 24px;">${escapeHtml(subheading)}</p>

    <table style="width:100%;border-collapse:collapse;border:1px solid #eee;font-size:14px;">
      ${rows}
    </table>

    <p style="color:#999;font-size:12px;margin-top:24px;">Hero24 Recruits</p>
  </div>
`;

// ----------------------------------------------------------------------
// Human-readable labels for stored option keys.
// ----------------------------------------------------------------------

export const ROLE_LABELS: Record<string, string> = {
  spain: 'Spain Country Growth Lead',
  finland: 'Finland Growth & Operations Lead',
  estonia: 'Estonia Country Growth Lead',
  sweden: 'Sweden Country Growth Lead',
  english: 'English-Speaking Markets Expansion Lead',
  open: 'Open application',
};

export const EXPERIENCE_LABELS: Record<string, string> = {
  sales: 'Sales',
  businessDevelopment: 'Business development',
  operations: 'Operations',
  recruitment: 'Recruitment',
  marketplace: 'Marketplace',
  propertyServices: 'Property services',
  homeServices: 'Home services',
  entrepreneurship: 'Entrepreneurship',
  partnerships: 'Partnerships',
  other: 'Other',
};

export const START_DATE_LABELS: Record<string, string> = {
  immediately: 'Immediately',
  twoWeeks: 'Within 2 weeks',
  oneMonth: 'Within 1 month',
  later: 'Later',
};

export const TIME_COMMITMENT_LABELS: Record<string, string> = {
  fullTime: 'Full-time',
  partTime: 'Part-time',
  flexible: 'Flexible',
};

export const RECRUITED_LABELS: Record<string, string> = {
  yes: 'Yes',
  no: 'No',
  somewhat: 'Somewhat',
};

export const COMPENSATION_LABELS: Record<string, string> = {
  commission: 'Commission / performance-based',
  monthlyRetainer: 'Monthly retainer',
  contractor: 'Contractor model',
  partner: 'Partner model',
  combination: 'Combination',
  openToDiscussion: 'Open to discussion',
};

/**
 * Maps stored option keys to their human-readable labels.
 *
 * @param keys - Selected option keys.
 * @param labels - Key-to-label lookup.
 * @returns A comma-separated label list.
 */
export const labelList = (keys: readonly string[], labels: Record<string, string>): string =>
  keys.map((key) => labels[key] ?? key).join(', ');
