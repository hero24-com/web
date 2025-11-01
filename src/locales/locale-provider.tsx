'use client';

import { useState, useEffect } from 'react';
// Context for accessing locale and change function
import { useContext, createContext } from 'react';
import { NextIntlClientProvider } from 'next-intl';

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

type Props = {
  children: React.ReactNode;
};

export default function LocaleProvider({ children }: Props) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    // Load locale from localStorage
    const stored = localStorage.getItem('locale') as Locale;
    const currentLocale = stored && locales.includes(stored) ? stored : defaultLocale;
    setLocale(currentLocale);
  }, []);

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  return (
    <NextIntlClientProvider locale={locale} messages={messages[locale]} timeZone="Europe/Helsinki">
      <LocaleContext.Provider value={{ locale, changeLocale }}>{children}</LocaleContext.Provider>
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
