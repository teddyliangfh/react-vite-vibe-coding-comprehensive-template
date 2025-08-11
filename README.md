# React Vite TypeScript Template

A modern, production-ready React template built with Vite and TypeScript. This template provides a solid foundation for building scalable React applications.

## ✨ Features

- ⚡ **Vite** - Lightning fast build tool and dev server
- ⚛️ **React 19** - Latest React with modern features
- 🔷 **TypeScript** - Full type safety and better developer experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 🎯 **Responsive Design** - Responsive design with Tailwind breakpoints
- 🛠️ **ESLint + Prettier** - Advanced code quality and formatting with antfu/eslint-config
- 🔄 **Auto-formatting** - Format on save and pre-commit hooks
- 🐕 **Husky** - Git hooks for consistent code quality
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
- **Tailwind CSS** - Utility-first styling with responsive design
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
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`.trim()}>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <p className="text-gray-600">This component uses Tailwind CSS utilities</p>
    </div>
  )
}
```

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration (with project references)
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration for Tailwind
- `eslint.config.js` - ESLint configuration with antfu/eslint-config
- `.vscode/settings.json` - VS Code settings for auto-formatting
- `.husky/pre-commit` - Git hooks for pre-commit formatting

## 🎨 Tailwind CSS Setup

This template includes Tailwind CSS for rapid UI development:

### Features
- **Utility-First**: Rapidly build custom designs with utility classes
- **Responsive Design**: Built-in responsive breakpoints (sm, md, lg, xl, 2xl)
- **Dark Mode Ready**: Easy dark mode implementation
- **Customizable**: Extend with your own design tokens
- **Purge CSS**: Automatically remove unused styles in production

### Usage Examples

```jsx
// Responsive design with Tailwind
<div className="w-full md:w-1/2 lg:w-1/3 p-4">
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
      Responsive Card
    </h3>
    <p className="text-gray-600 dark:text-gray-300 mt-2">
      This card adapts to different screen sizes
    </p>
  </div>
</div>
```

### Configuration
- `tailwind.config.js` - Customize colors, spacing, and other design tokens
- `postcss.config.js` - PostCSS configuration for Tailwind processing
- `src/index.css` - Global Tailwind directives and custom styles

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
- Use Tailwind CSS utilities for rapid styling
- Leverage Tailwind's responsive prefixes (sm:, md:, lg:, xl:)
- Enable strict mode in TypeScript configuration
- Code will be automatically formatted on save
- Git commits will automatically format staged files
- Use `pnpm lint` to check code quality before pushing

## 🤖 Cursor Configuration

This project includes comprehensive Cursor IDE configuration for enhanced development experience:

### 📁 Configuration Structure
```
.cursor/
├── mcp.json                  # MCP server configuration
├── settings.json             # Project-wide settings
├── rules/                    # AI coding guidelines
└── personal/                 # Personal settings (git-ignored)
```

### 🔧 Shared Configuration
- **MCP Server**: Context7 integration for enhanced AI assistance
- **Project Settings**: Optimized file exclusions and editor preferences
- **AI Rules**: Comprehensive coding guidelines for React, TypeScript, and general best practices

### 🎯 Features
- **Enhanced AI Assistance**: Context-aware code suggestions
- **Consistent Code Style**: Automated formatting and linting rules
- **Team Collaboration**: Shared configuration for consistent development experience
- **Personal Customization**: Individual preferences in `personal/` directory

### 📋 Available Rules
- **Global Rules**: General coding standards and best practices
- **React Rules**: React-specific guidelines and patterns
- **TypeScript Rules**: TypeScript best practices and type safety

### 🚀 Getting Started
1. **Automatic Setup**: All configurations are applied when you clone the repository
2. **Personal Settings**: Copy `.cursor/personal/personal-settings.example.json` to customize
3. **Documentation**: See `.cursor/README.md` for detailed configuration guide

### Usage
All configurations are automatically used by Cursor. No additional setup required.

## 📚 Additional Resources

- [ESLint Configuration Guide](./ESLINT_SETUP.md) - Detailed setup documentation
- [antfu/eslint-config](https://github.com/antfu/eslint-config) - ESLint configuration documentation
- [Husky Documentation](https://typicode.github.io/husky/) - Git hooks setup guide
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Complete Tailwind CSS guide
- [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet) - Quick reference for utilities

Happy Coding! 🎉
