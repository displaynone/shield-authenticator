import 'dotenv/config';

module.exports = {
  expo: {
    name: 'Shield Authenticator',
    slug: 'shield-authenticator',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/logo.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'cover',
      backgroundColor: '#003554',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/logo.png',
        backgroundColor: '#FFFFFF',
      },
      package: 'com.displaynone.shield-authenticator',
    },
    scheme: 'shield-authenticator',
    plugins: [
      'expo-localization',
      '@morrowdigital/watermelondb-expo-plugin',
      [
        'expo-build-properties',
        {
          android: {
            kotlinVersion: '1.6.10',
          },
        },
      ],
    ],
    extra: {
      eas: {
        projectId: process.env.EAS_PROJECT_ID,
      },
    },
  },
};
