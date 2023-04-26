import { ReactNode } from 'react';
import { Locale as ExpoLocale } from 'expo-localization';

export type OtpRecord = {
  type: 'totp' | 'otp';
  label: string;
  secret: string;
  algorithm: 'SHA1' | 'SHA256' | 'SHA512';
  digits: number;
  period: number;
  issuer?: string;
};

export const Locales = ['en', 'es', 'fr', 'it', 'de', 'zh', 'ar'] as const;
export type Locale = (typeof Locales)[number];
export type LocaleData = {
  plurals: (n: number | string, ord?: boolean) => string;
};

export type TextDirection = ExpoLocale['textDirection'];

export type ComponentWithChildren = {
  children: ReactNode;
};

export type ComponentWithSize = {
  width?: number;
  height?: number;
};

export type ComponentWithColor = {
  color?: string;
};
