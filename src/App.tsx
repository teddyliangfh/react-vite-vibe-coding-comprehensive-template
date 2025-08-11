import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Home } from './pages/Home'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
