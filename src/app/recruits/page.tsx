import type { Metadata } from 'next';

import RecruitsView from 'src/sections/_recruits/view/recruits-view';

// ----------------------------------------------------------------------

const TITLE = 'Join Hero24 | Careers';
const DESCRIPTION =
  'Help build Hero24 — a modern, AI-enabled service platform for homes and properties. Apply for country launch and growth roles in Spain, Finland, Estonia, Sweden, and English-speaking markets.';
const URL = 'https://www.hero24.com/recruits';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: 'website',
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'Hero24',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Hero24' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/logo.png'],
  },
};

export default function RecruitsPage() {
  return <RecruitsView />;
}
