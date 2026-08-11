'use client';

import { NextIntlClientProvider } from 'next-intl';
import { useMemo, useState, useEffect, useContext, useCallback, createContext } from 'react';

const fi = require('../messages/fi.json');
const en = require('../messages/en.json');
const es = require('../messages/es.json');

const locales = ['en', 'fi', 'es'] as const;
const defaultLocale = 'fi';
type Locale = (typeof locales)[number];

const messages = {
  fi,
  en,
  es,
};

/**
 * Reads a dot-separated message key out of the Finnish catalogue.
 *
 * @param key - Dot-separated message key, e.g. `realEstate.cost.items.0.name`.
 * @returns The Finnish string at that key, or undefined when absent.
 */
function readFinnishMessage(key: string): string | undefined {
  const node = key
    .split('.')
    .reduce<unknown>(
      (acc, part) =>
        typeof acc === 'object' && acc !== null
          ? (acc as Record<string, unknown>)[part]
          : undefined,
      fi
    );

  return typeof node === 'string' ? node : undefined;
}

/**
 * Supplies the text to render when a message is missing from the active locale.
 *
 * Some pages describe Finland-only products and only ever had Finnish copy, so
 * next-intl's default — rendering the key itself — leaked strings like
 * `realEstate.cost.items.0.name` onto the page. Falling back to Finnish keeps
 * untranslated sections readable and makes missing copy a content task rather
 * than a visible defect.
 *
 * @param options - The missing message's namespace and key.
 * @returns Finnish copy when available, otherwise the final key segment.
 */
function getMessageFallback({ key, namespace }: { key: string; namespace?: string }): string {
  const fullKey = namespace ? `${namespace}.${key}` : key;

  // Last resort: the trailing segment reads far better than the full path.
  return readFinnishMessage(fullKey) ?? key.split('.').pop() ?? key;
}

/**
 * Swallows missing-message reports.
 *
 * Missing keys are handled by {@link getMessageFallback}; without this, every
 * fallback also logs an error, which buries genuine problems in the console.
 */
function onIntlError(error: unknown): void {
  const code = (error as { code?: string })?.code;
  if (code === 'MISSING_MESSAGE') return;

  console.error(error);
}

/**
 * Paths that default to English instead of Finnish.
 *
 * Recruitment traffic arrives from LinkedIn across Spain, Estonia, Sweden and
 * English-speaking markets, and every open role requires English — so Finnish
 * is the wrong first impression there. An explicit language choice still wins.
 */
const ENGLISH_FIRST_PATHS = ['/recruits'];

/**
 * Resolves the locale to use before the first paint.
 *
 * Reading the stored preference here (rather than in an effect) avoids
 * rendering one language and then swapping to another.
 *
 * @returns The locale to render initially.
 */
function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale;

  try {
    const stored = localStorage.getItem('locale') as Locale;
    if (stored && locales.includes(stored)) return stored;
  } catch {
    // Private browsing modes can deny storage access; fall through to defaults.
  }

  const isEnglishFirst = ENGLISH_FIRST_PATHS.some((path) =>
    window.location.pathname.startsWith(path)
  );

  return isEnglishFirst ? 'en' : defaultLocale;
}

type Props = {
  children: React.ReactNode;
};

export default function LocaleProvider({ children }: Props) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  // Resolved after mount rather than during state initialisation: the server
  // renders `defaultLocale`, so reading storage or the URL any earlier would
  // produce markup that does not match and break hydration.
  useEffect(() => {
    setLocale(getInitialLocale());
  }, []);

  const changeLocale = useCallback((newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  }, []);

  const contextValue = useMemo(() => ({ locale, changeLocale }), [locale, changeLocale]);

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages[locale]}
      timeZone="Europe/Helsinki"
      getMessageFallback={getMessageFallback}
      onError={onIntlError}
    >
      <LocaleContext.Provider value={contextValue}>{children}</LocaleContext.Provider>
    </NextIntlClientProvider>
  );
}

type LocaleContextType = {
  locale: Locale;
  changeLocale: (locale: Locale) => void;
};

export const LocaleContext = createContext<LocaleContextType>({
  locale: defaultLocale,
  changeLocale: () => {},
});

export const useLocale = () => useContext(LocaleContext);
