import { useRef, useMemo, useEffect } from 'react';

/**
 * Type definition for HubSpot form jQuery object
 */
interface HubSpotFormObject {
  find: (selector: string) => {
    val: (value: string) => void;
  };
}

/**
 * Custom hook to manage HubSpot form initialization
 * @param formId - The HubSpot form ID
 * @param options - Additional options for the form
 * @param options.subject - Custom subject line for form submissions
 * @param options.formTitle - Custom title for the form
 * @returns The unique form target ID
 */
export function useHubspotForm(
  formId: string,
  options?: {
    subject?: string;
    formTitle?: string;
  }
) {
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
        // Prepare form configuration
        const formConfig: Record<string, any> = {
          portalId: '145849212',
          formId,
          target: `#${uniqueFormId}`,
        };

        // Add subject line if provided
        if (options?.subject) {
          formConfig.onFormSubmit = function ($form: HubSpotFormObject) {
            // Ensure subject is not undefined
            const subject = options.subject || '';
            $form.find("input[name='subject']").val(subject);
          };
        }

        // Add form title if provided
        if (options?.formTitle) {
          formConfig.inlineMessage = options.formTitle;
        }

        // @ts-expect-error - HubSpot types not available
        formInstance.current = window.hbspt.forms.create(formConfig);
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
  }, [formId, uniqueFormId, options]);

  return uniqueFormId;
}
