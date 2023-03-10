module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['plugin:prettier/recommended'],
  rules: {
    'no-use-before-define': 0,
    'react/style-prop-object': 0,
    'react/require-default-props': 0,
    'import/extensions': 0,
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-empty-function': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-smart-quotes/no-smart-quotes': 'error',
  },
  globals: {
    __DEV__: 'readonly',
  },
  plugins: [
    'react-hooks',
    'no-smart-quotes',
    '@typescript-eslint/eslint-plugin',
  ],
};
