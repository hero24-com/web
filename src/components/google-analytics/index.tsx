import Script from 'next/script';

const GoogleAnalytics = ({ ga_id }: { ga_id: string }) => {
  // Validate GA ID format (support both GA4 and Google Ads IDs)
  if (!ga_id || !/^G-[A-Z0-9]+$|^UA-[0-9]+-[0-9]+$|^AW-[0-9]+$/.test(ga_id)) {
    console.warn(`Invalid Google Analytics/Ads ID: ${ga_id}`);
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`}
      />
      <Script
        id={`google-analytics-${ga_id}`}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ga_id}');
          `,
        }}
      />
    </>
  );
};
export default GoogleAnalytics;
