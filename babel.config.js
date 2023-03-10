module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        'babel-preset-expo',
        {
          lazyImports: true,
        },
      ],
    ],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      'babel-plugin-macros',
      // 'react-native-reanimated/plugin',
    ],
    env: {
      production: {
        plugins: [
          'react-native-paper/babel',
          // ['react-native-reanimated/plugin'],
        ],
      },
    },
  };
};
