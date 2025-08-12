# Testing Guide with Vitest

This project uses **Vitest** as the testing framework, which provides fast, modern testing capabilities that integrate seamlessly with Vite.

## 🚀 Quick Start

### Available Test Commands

```bash
# Run tests in watch mode (default)
pnpm test

# Run tests once
pnpm test:run

# Run tests with coverage
pnpm test:coverage

# Run tests with UI
pnpm test:ui

# Run tests in watch mode
pnpm test:watch
```

## 🏗️ Test Configuration

### Vite Configuration (`vite.config.ts`)

The project is configured with Vitest in the main Vite config:

```typescript
/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/dist/**',
      ],
    },
  },
})
```

### Dedicated Vitest Config (`vitest.config.ts`)

For more advanced configuration options:

```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/dist/**',
        'coverage/**',
      ],
    },
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    exclude: [
      'node_modules/',
      'dist/',
      '.idea/',
      '.git/',
      '.cache/',
    ],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
```

## 🧪 Test Setup

### Test Environment Setup (`src/test/setup.ts`)

```typescript
import '@testing-library/jest-dom'
import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'

// Extend Vitest's expect method with testing-library matchers
expect.extend(matchers)

// Cleanup after each test
afterEach(() => {
  cleanup()
})
```

### Test Utilities (`src/test/utils.tsx`)

Custom render functions and testing helpers:

```typescript
import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Custom render function that includes providers
interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  withRouter?: boolean
}

const AllTheProviders = ({ children, withRouter = false }: { children: React.ReactNode; withRouter?: boolean }) => {
  if (withRouter) {
    return (
      <BrowserRouter>
        {children}
      </BrowserRouter>
    )
  }
  
  return <>{children}</>
}

const customRender = (
  ui: ReactElement,
  options: CustomRenderOptions = {}
) => {
  const { withRouter = false, ...renderOptions } = options
  
  return render(ui, {
    wrapper: ({ children }) => (
      <AllTheProviders withRouter={withRouter}>
        {children}
      </AllTheProviders>
    ),
    ...renderOptions,
  })
}

// Re-export everything
export * from '@testing-library/react'

// Override render method
export { customRender as render }
```

## 📝 Writing Tests

### Test File Naming Convention

- `*.test.tsx` - Component tests
- `*.spec.tsx` - Alternative naming
- `*.e2e.tsx` - End-to-end tests

### Component Testing Example

```typescript
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { IncrementButton } from './IncrementButton'

describe('IncrementButton', () => {
  it('renders with initial count of 0', () => {
    render(<IncrementButton />)
    expect(screen.getByTestId('count-display')).toHaveTextContent('0')
  })

  it('increments count when clicked', () => {
    render(<IncrementButton />)
    const button = screen.getByTestId('increment-button')
    
    fireEvent.click(button)
    expect(screen.getByTestId('count-display')).toHaveTextContent('1')
  })
})
```

### Testing with Router Context

```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Navigation } from './Navigation'

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('Navigation', () => {
  it('renders navigation links', () => {
    renderWithRouter(<Navigation />)
    expect(screen.getByTestId('navigation')).toBeInTheDocument()
  })
})
```

## 🎯 Best Practices

### 1. Use Test IDs for Robust Testing

Add `data-testid` attributes to your components:

```tsx
<button 
  data-testid="increment-button"
  onClick={handleClick}
>
  Increment
</button>
```

### 2. Test User Behavior, Not Implementation

```typescript
// ✅ Good - Testing user behavior
it('increments count when clicked', () => {
  render(<IncrementButton />)
  const button = screen.getByTestId('increment-button')
  fireEvent.click(button)
  expect(screen.getByTestId('count-display')).toHaveTextContent('1')
})

// ❌ Avoid - Testing implementation details
it('calls setCount function', () => {
  const mockSetCount = vi.fn()
  // ... testing internal state management
})
```

### 3. Use Descriptive Test Names

```typescript
// ✅ Good
it('displays error message when form submission fails', () => {
  // test implementation
})

// ❌ Avoid
it('works', () => {
  // test implementation
})
```

### 4. Group Related Tests

```typescript
describe('UserForm', () => {
  describe('validation', () => {
    it('shows error for empty email', () => {})
    it('shows error for invalid email format', () => {})
  })

  describe('submission', () => {
    it('submits form with valid data', () => {})
    it('prevents submission with invalid data', () => {})
  })
})
```

## 🔧 Testing Utilities

### Available Testing Libraries

- **Vitest** - Test runner and assertion library
- **@testing-library/react** - React component testing utilities
- **@testing-library/jest-dom** - Custom matchers for DOM testing
- **@testing-library/user-event** - User interaction simulation
- **jsdom** - DOM environment for Node.js testing

### Common Testing Patterns

#### Testing Async Operations

```typescript
it('fetches data on mount', async () => {
  render(<DataComponent />)
  
  await waitFor(() => {
    expect(screen.getByText('Data loaded')).toBeInTheDocument()
  })
})
```

#### Testing Form Submissions

```typescript
it('submits form data', async () => {
  const user = userEvent.setup()
  render(<FormComponent />)
  
  await user.type(screen.getByLabelText('Name'), 'John Doe')
  await user.click(screen.getByRole('button', { name: 'Submit' }))
  
  expect(screen.getByText('Form submitted')).toBeInTheDocument()
})
```

#### Mocking External Dependencies

```typescript
import { vi } from 'vitest'

vi.mock('./api', () => ({
  fetchUser: vi.fn(() => Promise.resolve({ name: 'John' }))
}))
```

## 📊 Coverage Reports

Run coverage to see test coverage statistics:

```bash
pnpm test:coverage
```

This will generate:
- Console output with coverage summary
- HTML coverage report in `coverage/` directory
- JSON coverage data

## 🚨 Troubleshooting

### Common Issues

1. **Test Environment Not Found**
   - Ensure `jsdom` is installed
   - Check `environment: 'jsdom'` in config

2. **CSS Import Errors**
   - Ensure `css: true` is set in test config
   - Mock CSS files if needed

3. **Router Context Errors**
   - Wrap components with `BrowserRouter` in tests
   - Use the provided `renderWithRouter` utility

4. **TypeScript Errors**
   - Ensure `vitest/globals` is in TypeScript types
   - Check `tsconfig.app.json` includes test files

### Debug Mode

Run tests in debug mode:

```bash
pnpm test --reporter=verbose
```

## 📚 Additional Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest DOM Matchers](https://github.com/testing-library/jest-dom)
- [User Event Testing](https://testing-library.com/docs/user-event/intro/)

## 🎉 Getting Started

1. Write your component
2. Add `data-testid` attributes for testing
3. Create a test file with `.test.tsx` extension
4. Write tests focusing on user behavior
5. Run tests with `pnpm test:run`
6. Check coverage with `pnpm test:coverage`

Happy testing! 🧪✨
