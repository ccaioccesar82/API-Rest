module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'space-before-blocks': 'off',
    'padded-blocks': 'off',
    'linebreak-style': 'off',
    'no-param-reassign': 'off',
    'arrow-parens': 'off',
    'arrow-body-style': 'off',
    'consistent-return': 'off',
  },
};
