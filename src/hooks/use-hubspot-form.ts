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
        // If subject is provided, try to add it to the URL query parameters
        if (options?.subject) {
          // This will help HubSpot prefill the form
          const currentUrl = new URL(window.location.href);
          currentUrl.searchParams.set('subject', options.subject);
          try {
            // Update URL without reloading the page
            window.history.replaceState({}, '', currentUrl.toString());
            console.log('Added subject to URL query parameters');
          } catch (error) {
            console.error('Error updating URL:', error);
          }
        }

        // Prepare form configuration
        const formConfig: Record<string, any> = {
          portalId: '145849212',
          formId,
          target: `#${uniqueFormId}`,
        };

        // Add subject line if provided
        if (options?.subject) {
          // Add debug logging
          console.log('Setting subject line:', options.subject);

          // Add subject as a hidden field in the form configuration
          formConfig.hiddenFields = {
            subject: options.subject,
          };

          // Add field mapping to ensure the subject is set
          formConfig.fieldMappings = [
            {
              name: 'subject',
              value: options.subject,
            },
          ];

          // Use the prefill feature
          formConfig.prePopulate = {
            subject: options.subject,
          };

          // Also set up a more reliable way to set the subject after form is ready
          formConfig.onFormReady = function ($form: any) {
            console.log('Form ready, attempting to set subject:', options.subject);

            // Use setTimeout to ensure the form is fully loaded
            setTimeout(() => {
              try {
                // Try to find the subject field by name
                const subjectField = $form.find('input[name="subject"]');
                if (subjectField && subjectField.length) {
                  console.log('Found subject field by name, setting value');
                  subjectField.val(options.subject || '');
                  subjectField.change(); // Trigger change event
                }

                // If that doesn't work, try to find it by a potential ID pattern
                // Note: You may need to inspect the actual form to get the correct ID pattern
                else {
                  console.log('Looking for subject field by ID pattern');
                  // Look for input fields that might contain 'subject' in their ID
                  const inputs = document.querySelectorAll('input[id*="subject"]');
                  console.log('Found potential subject fields:', inputs.length);
                  if (inputs && inputs.length > 0) {
                    for (let i = 0; i < inputs.length; i += 1) {
                      const input = inputs[i] as HTMLInputElement;
                      console.log('Setting value on field:', input.id);
                      input.value = options.subject || '';

                      // Trigger change event
                      const event = new Event('change', { bubbles: true });
                      input.dispatchEvent(event);
                    }
                  }
                }
              } catch (error) {
                console.error('Error setting subject field:', error);
              }
            }, 1000); // Wait 1 second after form is ready
          };

          // Also try to set it on form submit as a final fallback
          formConfig.onFormSubmit = function ($form: any) {
            console.log('Form submit, final attempt to set subject:', options.subject);
            try {
              // Try to find the subject field by name
              const subjectField = $form.find('input[name="subject"]');
              if (subjectField && subjectField.length) {
                console.log('Found subject field by name on submit, setting value');
                subjectField.val(options.subject || '');
              }

              // If that doesn't work, try to find it by a potential ID pattern
              else {
                console.log('Looking for subject field by ID pattern on submit');
                // Look for input fields that might contain 'subject' in their ID
                const inputs = document.querySelectorAll('input[id*="subject"]');
                console.log('Found potential subject fields on submit:', inputs.length);
                if (inputs && inputs.length > 0) {
                  for (let i = 0; i < inputs.length; i += 1) {
                    const input = inputs[i] as HTMLInputElement;
                    console.log('Setting value on field on submit:', input.id);
                    input.value = options.subject || '';
                  }
                }
              }
            } catch (error) {
              console.error('Error setting subject field on submit:', error);
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

        // If subject is provided, try to set it directly in the DOM after form creation
        if (options?.subject) {
          // Wait for the form to be fully rendered
          setTimeout(() => {
            try {
              // Try to find the form element
              const formElement = document.querySelector(`#${uniqueFormId}`);
              if (formElement) {
                console.log('Form element found, looking for subject field');

                // Look for input fields with name="subject"
                const subjectFields = formElement.querySelectorAll('input[name="subject"]');
                if (subjectFields && subjectFields.length > 0) {
                  console.log('Found subject fields by name:', subjectFields.length);
                  for (let i = 0; i < subjectFields.length; i += 1) {
                    const field = subjectFields[i] as HTMLInputElement;
                    console.log('Setting value on subject field:', field.name);
                    field.value = options.subject || '';

                    // Trigger change event
                    const event = new Event('change', { bubbles: true });
                    field.dispatchEvent(event);
                  }
                }

                // Look for input fields with id containing "subject"
                const subjectFieldsById = formElement.querySelectorAll('input[id*="subject"]');
                if (subjectFieldsById && subjectFieldsById.length > 0) {
                  console.log('Found subject fields by ID pattern:', subjectFieldsById.length);
                  for (let i = 0; i < subjectFieldsById.length; i += 1) {
                    const field = subjectFieldsById[i] as HTMLInputElement;
                    console.log('Setting value on subject field by ID:', field.id);
                    field.value = options.subject || '';

                    // Trigger change event
                    const event = new Event('change', { bubbles: true });
                    field.dispatchEvent(event);
                  }
                }
              }
            } catch (error) {
              console.error('Error setting subject field in DOM:', error);
            }
          }, 2000); // Wait 2 seconds after form creation
        }
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
