import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite-plus'

// https://vite.dev/config/
export default defineConfig({
  staged: {
    '*': 'vp check --fix',
  },
  lint: {
    ignorePatterns: ['dist/**'],
    plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'vue'],
    rules: {
      'curly': ['error', 'all'],
      'no-console': ['error', { allow: ['warn', 'error'] }],
    },
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  fmt: {
    ignorePatterns: ['dist/**'],
    singleQuote: true,
    semi: false,
    sortPackageJson: true,
    printWidth: 80,
    quoteProps: 'consistent',
  },
  plugins: [vue(), UnoCSS()],
})
