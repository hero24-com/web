/**
 * Recruitment funnel analytics events.
 *
 * Fired at the five points that define the two-step application funnel, so
 * drop-off between "saw a role" and "submitted an assessment" is measurable.
 */
export type RecruitsEvent =
  | 'role_view'
  | 'application_start'
  | 'application_submit'
  | 'assessment_start'
  | 'assessment_submit';

type TrackParams = Record<string, string | number | boolean | undefined>;

type GtagWindow = Window & {
  gtag?: (command: 'event', eventName: string, params?: TrackParams) => void;
};

/**
 * Sends a funnel event to Google Analytics / Google Ads via the gtag bridge
 * loaded in the root layout.
 *
 * Safe to call unconditionally: when gtag is absent (local development,
 * preview deploys, or a visitor who declined tracking) this is a no-op rather
 * than a runtime error.
 *
 * @param event - The funnel event name.
 * @param params - Optional event parameters, e.g. the role being applied for.
 */
export function track(event: RecruitsEvent, params?: TrackParams): void {
  if (typeof window === 'undefined') return;

  const { gtag } = window as GtagWindow;
  if (typeof gtag !== 'function') return;

  try {
    gtag('event', event, params);
  } catch {
    // Analytics must never break the application flow.
  }
}
