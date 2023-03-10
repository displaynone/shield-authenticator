import { Collection, Model } from '@nozbe/watermelondb';
import { date, field, readonly, writer } from '@nozbe/watermelondb/decorators';
import { OtpRecord } from '../types';

export const SITE_TABLE_NAME = 'sites';

export default class Site extends Model {
  static table = SITE_TABLE_NAME;

  @field('type') type!: string;
  @field('label') label!: string;
  @field('secret') secret!: string;
  @field('algorithm') algorithm!: string;
  @field('digits') digits!: number;
  @field('period') period!: number;
  @field('issuer') issuer?: string;
  @readonly @date('created_at') createdAt?: number;
  @readonly @date('updated_at') updatedAt?: number;
}
