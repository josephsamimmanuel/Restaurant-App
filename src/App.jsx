import Home from './pages/User/Home'
import ProtectedRoutes from './components/ProtectedRoutes'
import CommonRoutes from './components/CommonRoutes'
import Login from './pages/Common/Login'
import Register from './pages/Common/Register'
import Dishes from './pages/User/Dishes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { store } from './redux/reducer'
function App() {

  return (
    <Provider store={store}>
      <Toaster position='top-center' />
      <BrowserRouter>
        <Routes>
          {/* User Routes */}
          <Route path='/' element={<ProtectedRoutes><Dishes /></ProtectedRoutes>} />
          {/* <Route path='/dishes' element={<ProtectedRoutes><Dishes /></ProtectedRoutes>} /> */}
          {/* Admin Routes */}

          {/* Common Routes */}
          <Route path='/login' element={<CommonRoutes><Login /></CommonRoutes>} />
          <Route path='/register' element={<CommonRoutes><Register /></CommonRoutes>} /> 
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
