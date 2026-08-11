'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

import { UTM_KEYS, resolveRole, type UtmValues, type RoleOption } from './recruits-form-schema';

// ----------------------------------------------------------------------

type RecruitsParams = {
  /** Role preselected by the landing URL, e.g. `/recruits/?role=spain`. */
  role: RoleOption;
  /** Campaign attribution to carry through to the application email. */
  utm: UtmValues;
};

/**
 * Reads the role preselection and campaign attribution from the landing URL.
 *
 * The values are resolved once and memoised so they can seed form defaults on
 * mount. Capturing UTMs into form state at mount — rather than reading them at
 * submit time — keeps attribution intact if the candidate navigates between the
 * roles list and the form before applying.
 *
 * @returns The resolved role and UTM values.
 */
export function useRecruitsParams(): RecruitsParams {
  const searchParams = useSearchParams();

  return useMemo(() => {
    const utm: UtmValues = {};

    UTM_KEYS.forEach((key) => {
      const value = searchParams.get(key);
      if (value) utm[key] = value.slice(0, 200);
    });

    return { role: resolveRole(searchParams.get('role')), utm };
  }, [searchParams]);
}
