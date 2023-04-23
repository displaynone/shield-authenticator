import { LocaleData, i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { getLocales } from 'expo-localization';
import { en, es, ar, zh, it, de, fr } from 'make-plural';
import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { messages as messagesEn } from '../locales/en/messages';
import { messages as messagesEs } from '../locales/es/messages';
import { messages as messagesFr } from '../locales/fr/messages';
import { messages as messagesDe } from '../locales/de/messages';
import { messages as messagesIt } from '../locales/it/messages';
import { messages as messagesAr } from '../locales/ar/messages';
import { messages as messagesZh } from '../locales/zh/messages';
import { ComponentWithChildren, Locale, Locales } from '../types';

export interface LocaleContextInterface {
  locale: string;
}

export const defaultLocale: Locale = 'en';

export const messages: Record<Locale, any> = {
  en: messagesEn,
  es: messagesEs,
  fr: messagesFr,
  ar: messagesAr,
  it: messagesIt,
  de: messagesDe,
  zh: messagesZh,
};

const localeData: Record<Locale, LocaleData> = {
  en: { plurals: en },
  es: { plurals: es },
  ar: { plurals: ar },
  zh: { plurals: zh },
  fr: { plurals: fr },
  it: { plurals: it },
  de: { plurals: de },
};

const loadLanguage = (locale: Locale) => {
  i18n.loadLocaleData(locale, localeData[locale]);
  i18n.load(locale, messages[locale]);
  i18n.activate(locale);
};
loadLanguage(defaultLocale);

const initialLocaleContext = {
  locale: defaultLocale,
};

const LocaleContext =
  createContext<LocaleContextInterface>(initialLocaleContext);
export const useLocaleContext = () => useContext(LocaleContext);

const LocalizationProvider: FC<ComponentWithChildren> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  const activateLanguage = async (locale: string) => {
    setLocale(locale as Locale);
  };

  useEffect(() => {
    const locale: Locale = getLocales().find(l =>
      Locales.includes(l.languageCode as Locale),
    )?.languageCode as Locale;
    setLocale(locale);
    loadLanguage(locale);
  }, []);

  return (
    <LocaleContext.Provider
      value={{
        locale,
      }}
    >
      <I18nProvider i18n={i18n}>{children}</I18nProvider>
    </LocaleContext.Provider>
  );
};

export default LocalizationProvider;
