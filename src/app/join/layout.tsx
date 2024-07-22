'use client';

import { HubspotProvider } from 'next-hubspot';
import MainLayout from 'src/layouts/main';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <HubspotProvider>
      <MainLayout>{children}</MainLayout>
    </HubspotProvider>
  );
}
