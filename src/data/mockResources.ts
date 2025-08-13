import type { Resource, ResourceListItem } from '../types/resource'

export const mockResources: Resource[] = [
  {
    id: 1,
    title: 'React Router v7 Guide',
    description: 'Complete guide to React Router v7 features and best practices',
    content: 'React Router v7 introduces several new features and improvements over previous versions. This guide covers everything from basic routing setup to advanced patterns like data loading, error boundaries, and nested routing. You\'ll learn about the new file-based routing system, improved TypeScript support, and best practices for building scalable React applications.',
    author: 'React Team',
    publishedDate: '2024-01-15',
    tags: ['React', 'Routing', 'TypeScript'],
  },
  {
    id: 2,
    title: 'TypeScript Fundamentals',
    description: 'Learn TypeScript from basics to advanced concepts',
    content: 'TypeScript is a powerful superset of JavaScript that adds static typing to your code. This comprehensive guide covers everything from basic types and interfaces to advanced concepts like generics, decorators, and module systems. Perfect for developers looking to improve code quality and catch errors early in development.',
    author: 'Microsoft',
    publishedDate: '2024-01-10',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
  },
  {
    id: 3,
    title: 'Modern React Patterns',
    description: 'Explore modern React patterns and anti-patterns',
    content: 'Modern React development has evolved significantly with the introduction of hooks, concurrent features, and new patterns. This guide explores the most effective patterns for building maintainable React applications, including custom hooks, compound components, render props, and more.',
    author: 'React Community',
    publishedDate: '2024-01-08',
    tags: ['React', 'Patterns', 'Hooks'],
  },
  {
    id: 4,
    title: 'Testing with Vitest',
    description: 'Comprehensive guide to testing React applications with Vitest',
    content: 'Vitest is a modern testing framework that provides fast, reliable testing for React applications. This guide covers unit testing, integration testing, component testing, and best practices for writing maintainable test suites. Learn how to mock dependencies, test async code, and achieve high test coverage.',
    author: 'Vitest Team',
    publishedDate: '2024-01-05',
    tags: ['Testing', 'Vitest', 'React'],
  },
  {
    id: 5,
    title: 'Performance Optimization',
    description: 'Techniques for optimizing React application performance',
    content: 'Performance is crucial for modern web applications. This guide covers various techniques for optimizing React applications, including code splitting, lazy loading, memoization, virtualization, and bundle optimization. Learn how to identify performance bottlenecks and implement effective solutions.',
    author: 'Performance Experts',
    publishedDate: '2024-01-03',
    tags: ['Performance', 'React', 'Optimization'],
  },
  {
    id: 6,
    title: 'State Management',
    description: 'Different approaches to state management in React applications',
    content: 'State management is a critical aspect of React application development. This guide explores different approaches including local state, Context API, Redux, Zustand, and other state management libraries. Learn when to use each approach and how to implement them effectively.',
    author: 'State Management Experts',
    publishedDate: '2024-01-01',
    tags: ['State Management', 'React', 'Redux'],
  },
]

export const mockResourceListItems: ResourceListItem[] = mockResources.map(({ id, title, description }) => ({
  id,
  title,
  description,
}))

export function getResourceById(id: number): Resource | undefined {
  return mockResources.find(resource => resource.id === id)
}

export function getAllResources(): Resource[] {
  return mockResources
}

export function getAllResourceListItems(): ResourceListItem[] {
  return mockResourceListItems
}
