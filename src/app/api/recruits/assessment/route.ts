import { Resend } from 'resend';
import { NextResponse } from 'next/server';

import { assessmentSchema } from 'src/sections/_recruits/recruits-form-schema';

import {
  row,
  nl2br,
  utmRows,
  labelList,
  emailShell,
  mailtoLink,
  escapeHtml,
  ROLE_LABELS,
  RECRUITED_LABELS,
  COMPENSATION_LABELS,
} from '../email';

// ----------------------------------------------------------------------

/**
 * Receives a stage-two market assessment from a shortlisted candidate and
 * emails it to the recruitment inbox.
 *
 * @param request - JSON request carrying the assessment payload.
 * @returns A JSON response indicating success or the reason for failure.
 */
export async function POST(request: Request) {
  try {
    let payload: unknown;
    try {
      payload = await request.json();
    } catch {
      return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
    }

    const parsed = assessmentSchema.safeParse(payload);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid form data', issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const { data } = parsed;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const recipient = process.env.RECRUITS_TO_EMAIL ?? 'support@hero24.com';
    const sender = process.env.RECRUITS_FROM_EMAIL ?? 'Hero24 Recruits <no-reply@hero24.com>';
    const roleLabel = ROLE_LABELS[data.role] ?? data.role;

    const html = emailShell({
      heading: 'Hero24 second-stage assessment',
      subheading: 'Submitted via hero24.com/recruits/assessment',
      rows: [
        row('Role', escapeHtml(roleLabel)),
        row('Full name', escapeHtml(data.fullName)),
        row('Email', mailtoLink(data.email)),
        row('Market knowledge', nl2br(data.marketKnowledge)),
        row('Relevant experience', nl2br(data.experienceDescription)),
        row(
          'Recruited providers before?',
          escapeHtml(RECRUITED_LABELS[data.recruitedBefore] ?? data.recruitedBefore)
        ),
        data.recruitedDescription ? row('Recruitment details', nl2br(data.recruitedDescription)) : '',
        row('First 100 Heroes plan', nl2br(data.first100)),
        row('Channels and tactics', nl2br(data.channels)),
        row('CRM / data / AI / automation tools', nl2br(data.aiTools)),
        row('Process improved', nl2br(data.processImproved)),
        row('First 30 days', nl2br(data.thirtyDayPlan)),
        row(
          'Compensation preference',
          escapeHtml(labelList(data.compensation, COMPENSATION_LABELS))
        ),
        data.anythingElse ? row('Anything else', nl2br(data.anythingElse)) : '',
        utmRows(data.utm),
      ].join(''),
    });

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: data.email,
      subject: `Assessment: ${roleLabel} — ${data.fullName}`,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Recruits assessment error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
