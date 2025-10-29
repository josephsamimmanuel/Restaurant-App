import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getUserDetails } from '../../apiCalls/users'
import { useEffect } from 'react'
import toast from "react-hot-toast";
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/userSlice'
function ProtectedRoutes({children}) {

const dispatch = useDispatch()

  useEffect(() => {
    fetchUserDetails()
  }, [])

  const fetchUserDetails = async () => {
    const response = await getUserDetails()
    if (response) {
      dispatch(setUser(response.user))
    } else {
      toast.error(response.message)
    }
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default ProtectedRoutes
