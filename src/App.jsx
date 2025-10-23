import Home from './pages/User/Home'
import ProtectedRoutes from './components/ProtectedRoutes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* User Routes */}
          <Route path='/' element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
          
          {/* Admin Routes */}

          {/* Common Routes */}

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
