import { Resend } from 'resend';
import { NextResponse } from 'next/server';

import { recruitsFormSchema } from 'src/sections/_recruits/recruits-form-schema';

// ----------------------------------------------------------------------

const ROLE_LABELS: Record<string, string> = {
  spain: 'Spain Launch Lead / Country Builder',
  finland: 'Finland Growth Lead / Operations Builder',
  estonia: 'Estonia Launch Lead / Country Builder',
  sweden: 'Sweden Launch Lead / Country Builder',
  english: 'English-Speaking Markets Launch Lead',
  open: 'Open application',
};

const LEVEL_LABELS: Record<string, string> = {
  native: 'Native',
  fluent: 'Fluent',
  professional: 'Professional',
  basic: 'Basic',
  na: 'Not applicable',
};

const EXPERIENCE_LABELS: Record<string, string> = {
  sales: 'Sales',
  businessDevelopment: 'Business development',
  recruitment: 'Recruitment',
  marketplacePlatforms: 'Marketplace platforms',
  startupOperations: 'Startup operations',
  localOperations: 'Local operations',
  homeServices: 'Home services',
  propertyManagement: 'Property management',
  facilityServices: 'Facility services',
  housingAssociations: 'Housing associations / condominiums',
  realEstate: 'Real estate',
  landlords: 'Landlords / rental property operations',
  cleaning: 'Cleaning',
  movingServices: 'Moving services',
  constructionRenovation: 'Construction / renovation',
  maintenanceServices: 'Maintenance services',
  localContractorNetworks: 'Local contractor networks',
  partnerships: 'Partnerships',
  aiTools: 'AI tools',
  crm: 'CRM',
  salesMarketingAutomation: 'Sales/marketing automation',
  other: 'Other',
};

const RECRUITED_LABELS: Record<string, string> = {
  yes: 'Yes',
  no: 'No',
  somewhat: 'Somewhat',
};

const START_DATE_LABELS: Record<string, string> = {
  immediately: 'Immediately',
  twoWeeks: 'Within 2 weeks',
  oneMonth: 'Within 1 month',
  later: 'Later',
};

const TIME_COMMITMENT_LABELS: Record<string, string> = {
  fullTime: 'Full-time',
  partTime: 'Part-time',
  projectBased: 'Project-based',
  flexible: 'Flexible',
};

const COMPENSATION_LABELS: Record<string, string> = {
  commission: 'Commission / performance-based',
  monthlyRetainer: 'Monthly retainer',
  contractor: 'Contractor model',
  partner: 'Partner model',
  combination: 'Combination',
  openToDiscussion: 'Open to discussion',
};

const MAX_CV_BYTES = 10 * 1024 * 1024; // 10MB
const ALLOWED_CV_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

// ----------------------------------------------------------------------

const escapeHtml = (str: string): string =>
  str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const nl2br = (str: string): string => escapeHtml(str).replace(/\n/g, '<br/>');

const row = (label: string, value: string): string => `
  <tr>
    <td style="padding:8px 12px;border-bottom:1px solid #eee;vertical-align:top;width:32%;color:#666;font-weight:600;">${escapeHtml(label)}</td>
    <td style="padding:8px 12px;border-bottom:1px solid #eee;vertical-align:top;">${value}</td>
  </tr>`;

// ----------------------------------------------------------------------

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Extract payload JSON blob and optional CV file
    const payloadRaw = formData.get('payload');
    if (typeof payloadRaw !== 'string') {
      return NextResponse.json({ error: 'Missing payload' }, { status: 400 });
    }

    let payload: unknown;
    try {
      payload = JSON.parse(payloadRaw);
    } catch {
      return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
    }

    const parsed = recruitsFormSchema.safeParse(payload);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid form data', issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const { data } = parsed;

    // Validate CV if present
    const cvFile = formData.get('cv');
    let attachment: { filename: string; content: Buffer } | null = null;
    if (cvFile instanceof File && cvFile.size > 0) {
      if (cvFile.size > MAX_CV_BYTES) {
        return NextResponse.json({ error: 'CV exceeds 10MB' }, { status: 400 });
      }
      if (!ALLOWED_CV_TYPES.has(cvFile.type)) {
        return NextResponse.json({ error: 'CV must be PDF or Word' }, { status: 400 });
      }
      const buffer = Buffer.from(await cvFile.arrayBuffer());
      attachment = { filename: cvFile.name, content: buffer };
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const recipient = process.env.RECRUITS_TO_EMAIL ?? 'support@hero24.com';
    const sender = process.env.RECRUITS_FROM_EMAIL ?? 'Hero24 Recruits <no-reply@hero24.com>';

    const subject = `New application: ${ROLE_LABELS[data.role]} — ${data.fullName}`;

    const experienceList = data.experienceAreas
      .map((a) => EXPERIENCE_LABELS[a] ?? a)
      .join(', ');

    const compensationList = data.compensation
      .map((c) => COMPENSATION_LABELS[c] ?? c)
      .join(', ');

    const html = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:720px;margin:0 auto;padding:24px;">
        <h1 style="color:#111;font-size:22px;margin:0 0 8px;">New Hero24 application</h1>
        <p style="color:#666;margin:0 0 24px;">Submitted via hero24.com/recruits</p>

        <table style="width:100%;border-collapse:collapse;border:1px solid #eee;font-size:14px;">
          ${row('Role', escapeHtml(ROLE_LABELS[data.role]))}
          ${row('Full name', escapeHtml(data.fullName))}
          ${row('Email', `<a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a>`)}
          ${row('Phone / WhatsApp', escapeHtml(data.phone))}
          ${row('Country and city', escapeHtml(data.location))}
          ${data.linkedin ? row('LinkedIn', `<a href="${escapeHtml(data.linkedin)}">${escapeHtml(data.linkedin)}</a>`) : ''}
          ${data.spanishLevel ? row('Spanish level', escapeHtml(LEVEL_LABELS[data.spanishLevel] ?? data.spanishLevel)) : ''}
          ${row('English level', escapeHtml(LEVEL_LABELS[data.englishLevel] ?? data.englishLevel))}
          ${data.otherLanguages ? row('Other languages', nl2br(data.otherLanguages)) : ''}
          ${row('Market knowledge', nl2br(data.marketKnowledge))}
          ${row('Experience areas', escapeHtml(experienceList))}
          ${row('Experience description', nl2br(data.experienceDescription))}
          ${row('Recruited providers before?', escapeHtml(RECRUITED_LABELS[data.recruitedBefore] ?? data.recruitedBefore))}
          ${data.recruitedDescription ? row('Recruitment details', nl2br(data.recruitedDescription)) : ''}
          ${row('First 100 Heroes plan', nl2br(data.first100))}
          ${row('Channels', nl2br(data.channels))}
          ${row('AI / CRM / automation tools', nl2br(data.aiTools))}
          ${row('Process improved', nl2br(data.processImproved))}
          ${row('30-day traction plan', nl2br(data.thirtyDayPlan))}
          ${row('Start date', escapeHtml(START_DATE_LABELS[data.startDate] ?? data.startDate))}
          ${row('Time commitment', escapeHtml(TIME_COMMITMENT_LABELS[data.timeCommitment] ?? data.timeCommitment))}
          ${row('Compensation preference', escapeHtml(compensationList))}
          ${attachment ? row('CV / portfolio', `Attached: ${escapeHtml(attachment.filename)}`) : ''}
          ${data.anythingElse ? row('Anything else', nl2br(data.anythingElse)) : ''}
        </table>

        <p style="color:#999;font-size:12px;margin-top:24px;">Hero24 Recruits</p>
      </div>
    `;

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: data.email,
      subject,
      html,
      attachments: attachment ? [attachment] : undefined,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Recruits apply error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
