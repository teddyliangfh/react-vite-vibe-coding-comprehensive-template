import React from 'react'
import { BrowserRouter } from 'react-router-dom'

interface AllTheProvidersProps {
  children: React.ReactNode
  withRouter?: boolean
}

export function AllTheProviders({ children, withRouter = false }: AllTheProvidersProps) {
  if (withRouter) {
    return (
      <BrowserRouter>
        {children}
      </BrowserRouter>
    )
  }

  return <>{children}</>
}
