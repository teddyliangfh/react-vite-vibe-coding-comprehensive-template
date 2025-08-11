# ESLint Configuration Guide

This project uses [antfu/eslint-config](https://github.com/antfu/eslint-config) to manage code formatting and code quality checks.

## Features

- ✅ Support for React, TypeScript, JSX, TSX files
- ✅ Support for JavaScript, JSON, YAML file formatting
- ✅ Auto-format on save
- ✅ Unified code style
- ✅ Auto-fix for most issues

## Installed Dependencies

- `@antfu/eslint-config`: Main ESLint configuration
- `@eslint-react/eslint-plugin`: React-related rules
- `eslint-plugin-format`: Formatting plugin
- `husky`: Git hooks for pre-commit formatting
- `lint-staged`: Run linters on staged files

## Usage

### Command Line Formatting

```bash
# Check for code issues
pnpm lint

# Auto-fix fixable issues
pnpm lint:fix

# Format all files
pnpm format

# Check formatting
pnpm format:check
```

### VS Code Integration

The project is configured with VS Code settings that support:

1. **Auto-format on save**: Automatically runs ESLint fix when saving files
2. **Auto-import sorting**: Automatically organizes import statements
3. **Real-time error hints**: Shows ESLint errors and warnings in the editor

### Git Hooks (Husky)

The project uses Husky to ensure code quality:

1. **Pre-commit formatting**: Automatically formats staged files before commit
2. **Consistent code style**: Ensures all committed code follows the same format
3. **Team collaboration**: Prevents unformatted code from being committed

### Recommended Extensions

The project is configured with recommended VS Code extensions:

- `dbaeumer.vscode-eslint`: ESLint support
- `esbenp.prettier-vscode`: Prettier formatting
- `bradlc.vscode-tailwindcss`: Tailwind CSS support
- `ms-vscode.vscode-typescript-next`: TypeScript support
- `formulahendry.auto-rename-tag`: Auto-rename tags
- `christian-kohler.path-intellisense`: Path intellisense

## Configuration Details

### ESLint Configuration (eslint.config.js)

```javascript
import antfu from '@antfu/eslint-config'

export default antfu({
  // Ignored files
  ignores: [
    'README.md',
    'dist/',
    'node_modules/',
    '*.min.js',
    '*.bundle.js',
  ],
  // Custom rules
  rules: {
    'jsonc/sort-keys': 'off', // Disable JSON sorting rules
  },
  // Enable React support
  react: true,
  // Enable TypeScript support
  typescript: true,
  // Enable formatters
  formatters: {
    css: true,
    html: true,
    json: true,
    markdown: true,
    yaml: true,
  },
})
```

### VS Code Settings (.vscode/settings.json)

- Enable format on save
- Configure ESLint as default formatter
- Support formatting for multiple file types

## Supported File Types

- JavaScript (`.js`)
- TypeScript (`.ts`)
- React JSX (`.jsx`)
- React TSX (`.tsx`)
- JSON (`.json`)
- YAML (`.yml`, `.yaml`)
- CSS (`.css`)
- HTML (`.html`)
- Markdown (`.md`)

## Important Notes

1. **TypeScript Configuration Files**: JSON sorting rules are disabled because TypeScript configuration files require specific property order
2. **README.md**: Excluded from ESLint checks as it may contain special Markdown syntax
3. **Auto-fix**: Most code style issues can be automatically fixed with `pnpm lint:fix`
4. **Git Hooks**: Husky will automatically format files before commit, so you don't need to worry about forgetting to format

## Custom Rules

If you need to add or modify rules, you can configure them in the `rules` section of `eslint.config.js`:

```javascript
rules: {
  // Disable specific rules
  'no-console': 'off',

  // Modify rule levels
  'prefer-const': 'error',

  // Add custom rules
  'custom-rule': 'warn',
}
```
