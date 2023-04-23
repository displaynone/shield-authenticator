/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ['en', 'es', 'fr', 'it', 'de', 'zh', 'ar'],
  catalogs: [
    {
      path: 'src/locales/{locale}/messages',
      include: ['src', 'app'],
    },
  ],
  format: 'po',
};
