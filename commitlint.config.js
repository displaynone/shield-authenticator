module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [0, 'always', 200],
    'body-max-length': [0, 'always', 200],
    'body-max-line-length': [0, 'always', 200],
  },
};
