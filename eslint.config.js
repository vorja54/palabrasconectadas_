import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  {
    files: ['src/test/**'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
  },
  {
    files: ['vite.config.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ['sw-custom.js'],
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        workbox: 'writable',
      },
    },
  },
  {
    files: ['scripts/**', 'functions/**'],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^(daysOfWeek|writeFileSync|existsSync|readFileSync|mkdirSync|loadEnv|projectRoot|returnedState|displayName|nowDate|ExternalHyperlink|heading3)$', caughtErrors: 'none' }],
    },
  },
])
