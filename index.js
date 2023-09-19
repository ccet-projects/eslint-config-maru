module.exports = {
  env: { node: true },
  extends: ['airbnb-base'],
  parserOptions: { ecmaVersion: '2022' },
  rules: {
    'import/extensions': ['error', 'always'],
    'max-len': ['error', { code: 120 }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true } ],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement'
    ],
    'no-param-reassign': ['error', { props: false }],
    'no-underscore-dangle': [
      'error', {
        allow: [
          '_id',
          '_score',
          '__dirname'
        ]
      }
    ],
    'no-continue': 'off',
    'no-bitwise': 'off',
    'comma-dangle': [
      'error', {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'only-multiline',
        exports: 'only-multiline',
        functions: 'only-multiline'
      }
    ]
  }
};
