import packageJson from '../package.json';

// ----------------------------------------------------------------------

/**
 * Get Google Ads conversion IDs from environment variables
 * Format: comma-separated list of conversion IDs (e.g., "AW-123/abc, AW-456/def")
 */
const getGoogleAdsConversionIds = (
  envVar: string | undefined,
  defaults: string[] = []
): string[] => {
  if (envVar) {
    const ids = envVar
      .split(',')
      .map((id) => id.trim())
      .filter((id) => id.length > 0);
    if (ids.length > 0) {
      return ids;
    }
  }
  return defaults;
};

// ----------------------------------------------------------------------

// Default Google Ads Conversion IDs (fallback if env vars not set)
const DEFAULT_QUOTE_CONVERSIONS = [
  'AW-16588215507/ka3dCLi1mLUZENOp8OU9', // Hero24 / Taltek old ads account - verified
  'AW-16739198440/Q5VPCLHP9twZEOjL760-', // Hero24 / Taltek new ads account
  'AW-11557325623/Rb9LCOXd-oMaELeW-4Yr', // Hero24 / Craftly ads account
  'AW-17651305589/JvijCLnKlbEbEPWY5uBB', // Hero24 / JLO Invest ads account - Request quote conversion
  'AW-17758590818/NpRcCJjvz8YbEOKu-pNC', // Hero Solutions Oy - Request quote conversion (www.hero24.com/)
  'AW-17772431653/NS7JCOvyksobEKWSx5pC', // Hero24 UK Ltd - Request quote
];

const DEFAULT_JOIN_CONVERSIONS = [
  'AW-16588215507/ka3dCLi1mLUZENOp8OU9', // Hero24 / Taltek old ads account - verified
  'AW-16739198440/Q5VPCLHP9twZEOjL760-', // Hero24 / Taltek new ads account
  'AW-11557325623/DYVVCKuIgYQaELeW-4Yr', // Hero24 / Craftly ads account - track join hero24 event
  'AW-17651305589/JvijCLnKlbEbEPWY5uBB', // Hero24 / JLO Invest ads account - Join request conversion
  'AW-17758590818/EXkjCMXuxsYbEOKu-pNC', // Hero Solutions Oy - Submit lead form (Page load www.hero24.com/join-request-sent/)
];

// ----------------------------------------------------------------------

export const CONFIG = {
  appName: 'Hero24',
  appVersion: packageJson.version,
  assetsDir: process.env.NEXT_PUBLIC_ASSETS_DIR ?? '',
  googleMapApiKey: process.env.NEXT_PUBLIC_MAP_API ?? '',
  // Google Ads Conversion IDs for quote requests
  // Can be overridden via NEXT_PUBLIC_GOOGLE_ADS_QUOTE_CONVERSIONS env var
  // Format: comma-separated (e.g., "AW-123/abc, AW-456/def")
  googleAdsQuoteConversions: getGoogleAdsConversionIds(
    process.env.NEXT_PUBLIC_GOOGLE_ADS_QUOTE_CONVERSIONS,
    DEFAULT_QUOTE_CONVERSIONS
  ),
  // Google Ads Conversion IDs for join requests
  // Can be overridden via NEXT_PUBLIC_GOOGLE_ADS_JOIN_CONVERSIONS env var
  // Format: comma-separated (e.g., "AW-123/abc, AW-456/def")
  googleAdsJoinConversions: getGoogleAdsConversionIds(
    process.env.NEXT_PUBLIC_GOOGLE_ADS_JOIN_CONVERSIONS,
    DEFAULT_JOIN_CONVERSIONS
  ),
};
