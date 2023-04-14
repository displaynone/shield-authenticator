import totp from 'totp-generator';
import Site from '../models/Site';

type TotpParams = Parameters<typeof totp>;

export type TOTPConfig = TotpParams[1] & {
  secret: string;
};

export const getAlgorithm = (
  algorithm: Site['algorithm'],
): TOTPConfig['algorithm'] => {
  if (algorithm === 'SHA1') return 'SHA-1';
  return algorithm as TOTPConfig['algorithm'];
};

export const generateTOTP = ({
  secret,
  ...params
}: TOTPConfig): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      const token = totp(secret, params);
      resolve(token);
    } catch (error) {
      reject(error);
    }
  });
};
