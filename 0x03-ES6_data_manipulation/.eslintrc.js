module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true, // Add Jest environment
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off', // Allows console statements
  },
};
