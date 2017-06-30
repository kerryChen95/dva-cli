module.exports = {
  // babel-eslint allows you to lint ALL valid Babel code with the fantastic ESLint
  // https://www.npmjs.com/package/babel-eslint
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
     'browser': true,
     'node': true,
  },
  rules: {
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'brace-style': 'off',
    'no-param-reassign': 'off',
    'no-unused-vars': 'warn',
    'no-shadow': 'off',
    'import/first': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'warn',
    'react/jsx-filename-extension': ['warn', { 'extensions': ['.js', '.jsx'] }],
    'react/prop-types': 'off',
    'semi': ['warn', 'never'],
    'space-before-function-paren': 'off',
    'global-require': 'warn',
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true, 'avoidEscape': true }],
    'no-else-return': 'warn',
  }
}
