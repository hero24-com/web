'use client';

import { useEffect } from 'react';

// ----------------------------------------------------------------------

/**
 * TypeScript declaration for Google gtag function
 */
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

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
 * Tracks conversions when the component mounts and gtag is available
 */
const GoogleAdsConversion = ({
  conversionIds,
  value = 1.0,
  currency = 'EUR',
}: GoogleAdsConversionProps) => {
  useEffect(() => {
    // Don't fire conversions if no conversion IDs provided
    if (!conversionIds || conversionIds.length === 0) {
      return undefined;
    }

    /**
     * Wait for gtag to be available before firing conversion events
     * Retries up to 10 times with 100ms delay between attempts
     */
    let retries = 0;
    const maxRetries = 10;
    const retryInterval = 100; // 100ms
    let checkGtag: NodeJS.Timeout | null = null;

    const fireConversions = () => {
      if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
        // gtag is available, fire all conversion events
        conversionIds.forEach((conversionId) => {
          window.gtag?.('event', 'conversion', {
            send_to: conversionId,
            value,
            currency,
          });
        });
        return true; // Successfully fired
      }
      return false; // gtag not ready yet
    };

    // Try immediately first
    if (fireConversions()) {
      return undefined; // Success, no need to retry
    }

    // If not ready, retry with interval
    checkGtag = setInterval(() => {
      retries += 1;
      if (fireConversions()) {
        if (checkGtag) {
          clearInterval(checkGtag);
        }
      } else if (retries >= maxRetries) {
        if (checkGtag) {
          clearInterval(checkGtag);
        }
        console.warn('gtag is not available after retries - Google Analytics may not be loaded');
      }
    }, retryInterval);

    return () => {
      if (checkGtag) {
        clearInterval(checkGtag);
      }
    };
  }, [conversionIds, value, currency]);

  return null;
};

export default GoogleAdsConversion;
