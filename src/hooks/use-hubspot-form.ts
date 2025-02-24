import { useRef, useMemo, useEffect } from 'react';

/**
 * Custom hook to manage HubSpot form initialization
 * @param formId - The HubSpot form ID
 * @returns The unique form target ID
 */
export function useHubspotForm(formId: string) {
  const uniqueFormId = useMemo(() => `hubspot-form-${formId}`, [formId]);
  const formInitialized = useRef(false);
  const formInstance = useRef<any>(null);
  const timeoutRef = useRef<number>();

  useEffect(() => {
    // Skip if form is already initialized
    if (formInitialized.current) {
      return;
    }

    // Check if script already exists
    const existingScript = document.querySelector(
      'script[src="https://js.hsforms.net/forms/shell.js"]'
    );

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/shell.js';
      script.async = true;
      document.body.appendChild(script);

      script.addEventListener('load', () => {
        createForm();
      });
    } else {
      // If script exists, create form directly
      createForm();
    }

    function createForm() {
      // @ts-expect-error - HubSpot types not available
      if (window.hbspt) {
        // @ts-expect-error - HubSpot types not available
        formInstance.current = window.hbspt.forms.create({
          portalId: '145849212',
          formId,
          target: `#${uniqueFormId}`,
        });
        formInitialized.current = true;
      }
    }

    // Cleanup function
    // eslint-disable-next-line consistent-return
    return () => {
      // Clear any existing timeout
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }

      // Add a small delay before cleanup to handle navigation
      timeoutRef.current = window.setTimeout(() => {
        const formElement = document.querySelector(`#${uniqueFormId}`);
        if (formElement) {
          // Remove all child elements (the HubSpot form)
          while (formElement.firstChild) {
            formElement.removeChild(formElement.firstChild);
          }
        }
        // If we have a form instance, try to clean it up
        if (formInstance.current?.remove) {
          formInstance.current.remove();
        }
        formInitialized.current = false;
        formInstance.current = null;
      }, 100);
    };
  }, [formId, uniqueFormId]);

  return uniqueFormId;
}
