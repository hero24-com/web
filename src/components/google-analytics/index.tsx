import Script from 'next/script';

type GoogleAnalyticsProps = {
  /**
   * Google Analytics ID (GA4 format: G-XXXXXXXXXX or Universal Analytics: UA-XXXXXXXXX-X)
   */
  ga_id: string;
  /**
   * Optional Google Ads ID (AW-XXXXXXXXXX) for conversion tracking
   */
  google_ads_id?: string;
};

const GoogleAnalytics = ({ ga_id, google_ads_id }: GoogleAnalyticsProps) => {
  // Validate GA ID format
  if (!ga_id || !/^G-[A-Z0-9]+$|^UA-[0-9]+-[0-9]+$|^AW-[0-9]+$/.test(ga_id)) {
    console.warn(`Invalid Google Analytics ID: ${ga_id}`);
    return null;
  }

  // Validate Google Ads ID format if provided
  if (google_ads_id && !/^AW-[0-9]+$/.test(google_ads_id)) {
    console.warn(`Invalid Google Ads ID: ${google_ads_id}`);
  }

  // Use the primary ID for loading gtag.js (prefer GA4, fallback to Google Ads)
  const primaryId = /^G-[A-Z0-9]+$/.test(ga_id) ? ga_id : google_ads_id || ga_id;

  // Collect all IDs to configure
  const idsToConfig: string[] = [ga_id];
  if (google_ads_id && google_ads_id !== ga_id) {
    idsToConfig.push(google_ads_id);
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
      />
      <Script
        id={`google-analytics-${ga_id}`}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            ${idsToConfig.map((id) => `gtag('config', '${id}');`).join('\n            ')}
          `,
        }}
      />
    </>
  );
};
export default GoogleAnalytics;
