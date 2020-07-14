module.exports = {
  parser: 'babel-eslint',
  plugins: ['import'],
  rules: {
    'import/extensions': ['error', 'ignorePackages', { js: 'never' }],
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
}
