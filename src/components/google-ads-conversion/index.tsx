'use client';

import Script from 'next/script';

// ----------------------------------------------------------------------

type GoogleAdsConversionProps = {
  /**
   * Array of conversion IDs in format "AW-XXXXXXXXX/CONVERSION_LABEL"
   */
  conversionIds: string[];
  /**
   * Conversion value (default: 1.0)
   */
  value?: number;
  /**
   * Currency code (default: "EUR")
   */
  currency?: string;
};

/**
 * Google Ads Conversion Tracking Component
 * Tracks conversions when the component mounts
 */
const GoogleAdsConversion = ({
  conversionIds,
  value = 1.0,
  currency = 'EUR',
}: GoogleAdsConversionProps) => {
  // Don't render if no conversion IDs provided
  if (!conversionIds || conversionIds.length === 0) {
    return null;
  }

  // Generate conversion tracking script
  const conversionScript = conversionIds
    .map(
      (conversionId) => `
              gtag('event', 'conversion', {
                'send_to': '${conversionId}',
                'value': ${value},
                'currency': '${currency}'
              });`
    )
    .join('\n');

  return (
    <Script
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
            if (typeof gtag !== 'undefined') {
              ${conversionScript}
            } else {
              console.warn('gtag is not available - Google Analytics may not be loaded');
            }
          `,
      }}
    />
  );
};

export default GoogleAdsConversion;
