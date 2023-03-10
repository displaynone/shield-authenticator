import { LocaleData, i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { getLocales } from 'expo-localization';
import { en, es } from 'make-plural';
import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { messages as messagesEn } from '../locales/en/messages';
import { messages as messagesEs } from '../locales/es/messages';
import { ComponentWithChildren, Locale, Locales } from '../types';

export interface LocaleContextInterface {
  locale: string;
}

export const defaultLocale: Locale = 'en';

export const messages: Record<Locale, any> = {
  en: messagesEn,
  es: messagesEs,
};

const localeData: Record<Locale, LocaleData> = {
  en: { plurals: en },
  es: { plurals: es },
};

i18n.loadLocaleData(defaultLocale, localeData[defaultLocale]);
i18n.load(defaultLocale, messages[defaultLocale]);
i18n.activate(defaultLocale);

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
