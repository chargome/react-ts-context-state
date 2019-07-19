module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript'
  ],
  settings: {
    'import/extensions': [".js",".jsx",".ts",".tsx"],
    'import/parsers': {
      '@typescript-eslint/parser': [".ts",".tsx"]
     },
     'import/resolver': {
        'node': {
          'extensions': [".js",".jsx",".ts",".tsx"]
        }
     } 
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        'allowExpressions': true,
        'allowTypedFunctionExpressions': true,
      }
    ],
  },
  env: {
    'browser': true,
    'node': true
  }
};