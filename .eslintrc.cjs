/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/script-setup-no-uses-vars': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-template-shadow': 'off',
    'vue/no-unused-vars': 'error',
    'vue/component-tags-order': [
      'error',
      {
        order: [['script', 'template', 'style']],
      },
    ],
  },
}
