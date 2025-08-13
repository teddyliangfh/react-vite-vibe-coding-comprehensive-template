import antfu from '@antfu/eslint-config'

export default antfu({
  // Ignored files
  ignores: [
    '**/*.md', // Ignore all markdown files
    'dist/',
    'node_modules/',
    '*.min.js',
    '*.bundle.js',
  ],
  // Enable all rules
  rules: {
    // Disable JSON sorting rules because TypeScript config files need specific order
    'jsonc/sort-keys': 'off',
  },
  // React configuration
  react: true,
  // TypeScript configuration
  typescript: true,
  // Formatting configuration
  formatters: {
    // Enable all formatters
    css: true,
    html: true,
    json: true,
    markdown: true,
    yaml: true,
  },
})
