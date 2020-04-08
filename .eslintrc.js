module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
	  "import/no-unresolved" : 0,
	  "import/extensions" : 0,
	  'no-console': 0,
	  'no-tabs': 0,
	  "indent": ["error", "tab"],
	  "react/jsx-indent": 0,
	  "react/jsx-filename-extension" : 0

  },
};
