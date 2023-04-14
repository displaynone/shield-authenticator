import { URL } from 'react-native-url-polyfill';
import { OtpRecord } from '../types';
import {
  DEFAULT_TOTP_ALGORITHM,
  DEFAULT_TOTP_DIGITS,
  DEFAULT_TOTP_PERIOD,
} from '../constants/app';

/**
 * Parsers an OTP Uri
 *
 * - Scheme: `otpauth://`
 * - Type: `totp`
 * - Label: string
 * - Parameters:
 *   - secret: string
 *   - algorithm: `SHA1`
 *   - digits: number
 *   - period: number
 *   - issuer?: string
 */
export const parseOtpUri = (uri: string): OtpRecord => {
  const url = new URL(uri);
  const type = url.host;
  const label = url.pathname.substring(1);
  const params = Object.fromEntries(url.searchParams);

  return {
    label: decodeURI(label),
    type: type as OtpRecord['type'],
    secret: params['secret'],
    algorithm: (params['algorithm'] ||
      DEFAULT_TOTP_ALGORITHM) as OtpRecord['algorithm'],
    digits: +params['digits'] || DEFAULT_TOTP_DIGITS,
    period: +params['period'] || DEFAULT_TOTP_PERIOD,
    issuer: params['issuer'],
  };
};
