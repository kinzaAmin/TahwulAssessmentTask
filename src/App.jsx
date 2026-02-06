import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Perspectives from './pages/Perspectives'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/perspectives" element={<Perspectives />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

