# React Vite TypeScript Template

A modern, production-ready React template built with Vite and TypeScript. This template provides a solid foundation for building scalable React applications.

## ✨ Features

- ⚡ **Vite** - Lightning fast build tool and dev server
- ⚛️ **React 19** - Latest React with modern features
- 🔷 **TypeScript** - Full type safety and better developer experience
- 🎨 **Modern CSS** - Clean, responsive design with CSS modules support
- 🛠️ **ESLint** - Code quality and consistency
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

# Code Quality
pnpm lint            # Run ESLint
pnpm lint:fix        # Fix ESLint issues
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
- `eslint.config.js` - ESLint configuration

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

Happy Coding! 🎉
