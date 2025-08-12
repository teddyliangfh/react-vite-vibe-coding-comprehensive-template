# React Vite TypeScript Template

A modern, production-ready React template with Vite, TypeScript, and Tailwind CSS.

## ✨ Features

- ⚡ **Vite** - Lightning fast build tool
- ⚛️ **React 19** - Latest React with modern features
- 🔷 **TypeScript** - Full type safety
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🛠️ **ESLint + Prettier** - Code quality with antfu/eslint-config
- 🔄 **Auto-formatting** - Format on save and pre-commit hooks
- 🐕 **Husky** - Git hooks for consistent code quality
- 🧪 **Vitest** - Fast unit testing with React Testing Library
- 🖥️ **AI-Powered Development** - Cursor IDE with vibe coding workflow

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

## 🛠️ Scripts

```bash
pnpm dev             # Start development server
pnpm build           # Build for production
pnpm preview         # Preview production build
pnpm lint            # Run ESLint
pnpm lint:fix        # Fix ESLint issues
pnpm format          # Format all files
pnpm type-check      # TypeScript type checking
```

## 🧪 Testing

This project uses **Vitest** for fast, modern testing with React Testing Library. Tests run in watch mode by default and include comprehensive coverage reporting.

```bash
pnpm test            # Run tests in watch mode
pnpm test:ui         # Interactive UI with coverage
pnpm test:run        # Run tests once
pnpm test:coverage   # Generate coverage report
```

**📖 [Full Testing Guide →](./TESTING.md)**

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── assets/             # Static assets
├── test/               # Test setup and utilities
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🔧 Configuration

- `vite.config.ts` - Vite configuration with Vitest
- `vitest.config.ts` - Dedicated Vitest configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `eslint.config.js` - ESLint configuration
- `.husky/pre-commit` - Git hooks

## 🚀 Deployment

```bash
pnpm build
```

Deploy the `dist/` directory to any static hosting service.

## 📦 Add Dependencies

```bash
pnpm add package-name
pnpm add -D package-name     # dev dependency
```

## 🖥️ AI-Powered Development

### Cursor IDE Integration
- **Enhanced AI Assistance** - Context-aware code suggestions and completions
- **Vibe Coding** - AI-powered development workflow with intelligent code generation
- **Consistent Code Style** - Automated formatting and linting rules
- **Team Collaboration** - Shared configuration for consistent development experience

### AI Features
- **Smart Code Generation** - AI-assisted component and function creation
- **Context-Aware Suggestions** - Intelligent recommendations based on project structure
- **Automated Refactoring** - AI-powered code optimization and restructuring
- **Real-time Assistance** - Instant help with coding challenges and best practices

## 📚 Resources

- [Testing Guide](./TESTING.md)
- [ESLint Setup](./ESLINT_SETUP.md)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Docs](https://vitejs.dev/)
- [Vitest Docs](https://vitest.dev/)

Happy Coding! 🎉
