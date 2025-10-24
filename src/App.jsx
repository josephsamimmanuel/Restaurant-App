import Home from './pages/User/Home'
import ProtectedRoutes from './components/ProtectedRoutes'
import CommonRoutes from './components/CommonRoutes'
import Login from './pages/Common/Login'
import Register from './pages/Common/Register'
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
          <Route path='/login' element={<CommonRoutes><Login /></CommonRoutes>} />
          <Route path='/register' element={<CommonRoutes><Register /></CommonRoutes>} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
