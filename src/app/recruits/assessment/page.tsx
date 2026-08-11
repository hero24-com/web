import type { Metadata } from 'next';

import AssessmentView from 'src/sections/_recruits/view/assessment-view';

// ----------------------------------------------------------------------

const TITLE = 'Market Assessment | Hero24 Careers';
const DESCRIPTION = 'Second-stage market assessment for shortlisted Hero24 candidates.';

/**
 * Kept out of search results: this page is sent directly to shortlisted
 * candidates and should not compete with /recruits or be discoverable
 * independently of an invitation.
 */
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: false, follow: false },
};

export default function RecruitsAssessmentPage() {
  return <AssessmentView />;
}
