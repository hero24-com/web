import { Resend } from 'resend';
import { NextResponse } from 'next/server';

import { quickApplySchema } from 'src/sections/_recruits/recruits-form-schema';

import {
  row,
  nl2br,
  utmRows,
  labelList,
  emailShell,
  mailtoLink,
  escapeHtml,
  ROLE_LABELS,
  externalLink,
  EXPERIENCE_LABELS,
  START_DATE_LABELS,
  TIME_COMMITMENT_LABELS,
} from '../email';

// ----------------------------------------------------------------------

const MAX_CV_BYTES = 10 * 1024 * 1024; // 10MB
const ALLOWED_CV_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

// ----------------------------------------------------------------------

/**
 * Receives a stage-one quick application and emails it to the recruitment inbox.
 *
 * @param request - Multipart form request carrying the JSON payload and an
 * optional CV attachment.
 * @returns A JSON response indicating success or the reason for failure.
 */
export async function POST(request: Request) {
  try {
    const formData = await request.formData();

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

    const parsed = quickApplySchema.safeParse(payload);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid form data', issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const { data } = parsed;

    const cvFile = formData.get('cv');
    let attachment: { filename: string; content: Buffer } | null = null;
    if (cvFile instanceof File && cvFile.size > 0) {
      if (cvFile.size > MAX_CV_BYTES) {
        return NextResponse.json({ error: 'CV exceeds 10MB' }, { status: 400 });
      }
      if (!ALLOWED_CV_TYPES.has(cvFile.type)) {
        return NextResponse.json({ error: 'CV must be PDF or Word' }, { status: 400 });
      }
      attachment = {
        filename: cvFile.name,
        content: Buffer.from(await cvFile.arrayBuffer()),
      };
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const recipient = process.env.RECRUITS_TO_EMAIL ?? 'support@hero24.com';
    const sender = process.env.RECRUITS_FROM_EMAIL ?? 'Hero24 Recruits <no-reply@hero24.com>';
    const roleLabel = ROLE_LABELS[data.role] ?? data.role;

    const html = emailShell({
      heading: 'New Hero24 application',
      subheading: 'Quick apply — submitted via hero24.com/recruits',
      rows: [
        row('Role', escapeHtml(roleLabel)),
        row('Full name', escapeHtml(data.fullName)),
        row('Email', mailtoLink(data.email)),
        row('Phone / WhatsApp', escapeHtml(data.phone)),
        row('Country and city', escapeHtml(data.location)),
        data.linkedin ? row('LinkedIn', externalLink(data.linkedin)) : '',
        row('Languages', nl2br(data.languages)),
        row('Relevant experience', escapeHtml(labelList(data.experienceAreas, EXPERIENCE_LABELS))),
        row('First steps for traction', nl2br(data.tractionPlan)),
        row('Start availability', escapeHtml(START_DATE_LABELS[data.startDate] ?? data.startDate)),
        row(
          'Time commitment',
          escapeHtml(TIME_COMMITMENT_LABELS[data.timeCommitment] ?? data.timeCommitment)
        ),
        row('Contractor / performance terms acknowledged', 'Yes'),
        attachment ? row('CV', `Attached: ${escapeHtml(attachment.filename)}`) : '',
        utmRows(data.utm),
      ].join(''),
    });

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: data.email,
      subject: `New application: ${roleLabel} — ${data.fullName}`,
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
