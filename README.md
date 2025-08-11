# React Vite TypeScript Template

A modern, production-ready React template built with Vite and TypeScript. This template provides a solid foundation for building scalable React applications.

## ✨ Features

- ⚡ **Vite** - Lightning fast build tool and dev server
- ⚛️ **React 19** - Latest React with modern features
- 🔷 **TypeScript** - Full type safety and better developer experience
- 🎨 **Modern CSS** - Clean, responsive design with CSS modules support
- 🛠️ **ESLint + Prettier** - Advanced code quality and formatting with antfu/eslint-config
- 🔄 **Auto-formatting** - Format on save and pre-commit hooks
- 🐕 **Husky** - Git hooks for consistent code quality
- 📱 **Responsive Design** - Mobile-first approach
- ♿ **Accessibility** - Built with accessibility in mind
- 🔧 **Hot Module Replacement** - Instant updates during development

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## 📋 Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

## 🛠️ Available Scripts

```bash
# Development
pnpm dev             # Start development server
pnpm build           # Build for production
pnpm preview         # Preview production build

# Code Quality & Formatting
pnpm lint            # Run ESLint to check code quality
pnpm lint:fix        # Fix ESLint issues automatically
pnpm format          # Format all files with ESLint
pnpm format:check    # Check formatting without fixing
pnpm type-check      # Run TypeScript type checking
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── IncrementButton/ # Example component with TypeScript
│       ├── IncrementButton.tsx
│       ├── IncrementButton.css
│       └── index.ts
├── assets/             # Static assets (images, icons, etc.)
├── App.tsx            # Main application component
├── App.css            # Application styles
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🎨 Component Architecture

This template follows React best practices with:

- **Functional Components** - Modern React with hooks
- **TypeScript Interfaces** - Full type safety
- **CSS Modules** - Scoped styling
- **Single Responsibility** - Each component has one clear purpose

### Example Component Structure

```typescript
// components/MyComponent/MyComponent.tsx
interface MyComponentProps {
  title: string
  className?: string
}

export function MyComponent({ title, className = '' }: MyComponentProps) {
  return (
    <div className={`my-component ${className}`.trim()}>
      <h2>{title}</h2>
    </div>
  )
}
```

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration (with project references)
- `eslint.config.js` - ESLint configuration with antfu/eslint-config
- `.vscode/settings.json` - VS Code settings for auto-formatting
- `.husky/pre-commit` - Git hooks for pre-commit formatting

## 🛠️ Code Quality & Formatting

This template includes a comprehensive code quality setup:

### ESLint + Prettier Integration
- **antfu/eslint-config**: Modern ESLint configuration with built-in Prettier
- **Auto-formatting**: Format on save in VS Code
- **Multiple file types**: Supports JS, TS, JSX, TSX, JSON, YAML, CSS, HTML, MD
- **Consistent style**: Unified code style across the project

### Git Hooks with Husky
- **Pre-commit formatting**: Automatically format files before commit
- **Lint-staged**: Only process staged files for efficiency
- **Error prevention**: Block commits with unfixable errors

### VS Code Integration
- **Auto-format on save**: Files are automatically formatted when saved
- **Real-time linting**: See errors and warnings as you type
- **Recommended extensions**: Auto-install helpful VS Code extensions

### Usage Examples

```bash
# Check code quality
pnpm lint

# Auto-fix formatting issues
pnpm lint:fix

# Format all files
pnpm format

# Check TypeScript types
pnpm type-check
```

## 🚀 Deployment

### Build for Production

```bash
pnpm build
```

The build output will be in the `dist/` directory, ready for deployment to any static hosting service.

### Popular Deployment Options

- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: Use GitHub Actions
- **Firebase Hosting**: `firebase deploy`

## 📦 Adding Dependencies

```bash
pnpm add package-name
pnpm add -D package-name     # dev dependency
```

## 🔍 Development Tips

- Use interfaces for component props
- Keep components small and focused
- Use CSS modules for component-specific styles
- Enable strict mode in TypeScript configuration
- Code will be automatically formatted on save
- Git commits will automatically format staged files
- Use `pnpm lint` to check code quality before pushing

## 📚 Additional Resources

- [ESLint Configuration Guide](./ESLINT_SETUP.md) - Detailed setup documentation
- [antfu/eslint-config](https://github.com/antfu/eslint-config) - ESLint configuration documentation
- [Husky Documentation](https://typicode.github.io/husky/) - Git hooks setup guide

Happy Coding! 🎉
