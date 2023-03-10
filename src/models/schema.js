import { appSchema, tableSchema } from '@nozbe/watermelondb';
import { SITE_TABLE_NAME } from './Site';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: SITE_TABLE_NAME,
      columns: [
        { name: 'type', type: 'string' },
        { name: 'label', type: 'string' },
        { name: 'secret', type: 'string' },
        { name: 'algorithm', type: 'string' },
        { name: 'digits', type: 'string' },
        { name: 'period', type: 'number' },
        { name: 'issuer', type: 'string', isOptional: true },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ],
    }),
  ],
});
