import type { Metadata } from 'next';

import RecruitsView from 'src/sections/_recruits/view/recruits-view';

// ----------------------------------------------------------------------

const TITLE = 'Careers at Hero24 | Build Hero24 in your market';
const DESCRIPTION =
  'Hero24 connects customers with local professionals for moving, cleaning, repairs, renovations, installations, plumbing, electrical work and property maintenance. We are expanding across selected European and English-speaking markets and looking for commercially driven people who can build local operations.';
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
