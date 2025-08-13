import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Home } from './pages/Home'
import { List } from './pages/List'
import { ListItemDetail } from './pages/ListItemDetail'
import { NotFound } from './pages/NotFound'

// Root layout component
function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Outlet />
    </div>
  )
}

// Create router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'list',
        element: <List />,
      },
      {
        path: 'list/:id',
        element: <ListItemDetail />,
      },
      {
        path: '404',
        element: <NotFound />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
