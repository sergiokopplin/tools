module.exports = {
  extends: ['standard-with-typescript', 'plugin:prettier/recommended'],
  plugins: ['eslint-plugin-import-helpers', 'prettier'],
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/restrict-template-expressions': 0,
    'prettier/prettier': 'error',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['/^(react)/', 'module', '/^(@)/', '/^src/', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};
