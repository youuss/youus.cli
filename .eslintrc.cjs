const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  extends: ['@youus/eslint-config-ts', '@youus/eslint-config-prettier'],
  rules: {
    'no-console': 'off',
  },
})
