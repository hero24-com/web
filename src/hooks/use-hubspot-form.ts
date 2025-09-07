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
          portalId: '143729222',
          formId,
          target: `#${uniqueFormId}`,
        };

        // Add subject line if provided
        if (options?.subject) {
          // Try multiple approaches to set the subject line

          // 1. Set as hidden fields with various names that HubSpot might recognize
          formConfig.hiddenFields = {
            // Standard field names
            subject: options.subject,
            email_subject: options.subject,

            // Try HubSpot specific field names
            hs_email_subject: options.subject,
            notification_subject: options.subject,

            // Try with form name prefix
            [`${formId}_subject`]: options.subject,

            // Try with common prefixes
            form_subject: options.subject,
            message_subject: options.subject,
          };

          // 2. Set up a context property that might be used by HubSpot
          formConfig.context = {
            subject: options.subject,
            emailSubject: options.subject,
            notificationSubject: options.subject,
          };

          // 3. Add onFormReady handler to set any subject fields that might exist
          formConfig.onFormReady = function ($form: any) {
            try {
              // Try to find and set any field that might be used for the subject
              const possibleFieldNames = [
                'subject',
                'email_subject',
                'hs_email_subject',
                'notification_subject',
                'form_subject',
                'message_subject',
              ];

              possibleFieldNames.forEach((fieldName) => {
                try {
                  const field = $form.find(`input[name="${fieldName}"]`);
                  if (field && field.length) {
                    field.val(options.subject || '');
                    field.change(); // Trigger change event
                  }
                } catch (error) {
                  // Ignore errors for individual field attempts
                }
              });

              // Also try to set a data attribute on the form that HubSpot might use
              try {
                const formElement = $form.get(0);
                if (formElement) {
                  formElement.setAttribute('data-subject', options.subject || '');
                  formElement.setAttribute('data-email-subject', options.subject || '');
                  formElement.setAttribute('data-notification-subject', options.subject || '');
                }
              } catch (error) {
                // Ignore errors for data attribute attempts
              }
            } catch (error) {
              console.error('Error setting subject fields:', error);
            }
          };

          // 4. Add onFormSubmit handler to set the subject right before submission
          formConfig.onFormSubmit = function ($form: any) {
            try {
              // Try to find and set any field that might be used for the subject
              const possibleFieldNames = [
                'subject',
                'email_subject',
                'hs_email_subject',
                'notification_subject',
                'form_subject',
                'message_subject',
              ];

              possibleFieldNames.forEach((fieldName) => {
                try {
                  const field = $form.find(`input[name="${fieldName}"]`);
                  if (field && field.length) {
                    field.val(options.subject || '');
                  }
                } catch (error) {
                  // Ignore errors for individual field attempts
                }
              });

              // Try to add a custom field to the form data
              try {
                // @ts-expect-error - HubSpot types not available
                if (window.hbspt && window.hbspt.forms && window.hbspt.forms.addCustomField) {
                  // @ts-expect-error - HubSpot types not available
                  window.hbspt.forms.addCustomField($form, 'subject', options.subject || '');
                  // @ts-expect-error - HubSpot types not available
                  window.hbspt.forms.addCustomField($form, 'email_subject', options.subject || '');
                  // @ts-expect-error - HubSpot types not available
                  window.hbspt.forms.addCustomField(
                    $form,
                    'hs_email_subject',
                    options.subject || ''
                  );
                  // @ts-expect-error - HubSpot types not available
                  window.hbspt.forms.addCustomField(
                    $form,
                    'notification_subject',
                    options.subject || ''
                  );
                }
              } catch (error) {
                // Ignore errors for custom field attempts
              }
            } catch (error) {
              console.error('Error setting subject fields on submit:', error);
            }
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
