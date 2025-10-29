import React from 'react'
import Logo from './Logo'
import LoginForm from './LoginForm'
import Divider from './Divider'
import SocialloginButton from './SocialloginButton'
import SignUpLink from './SignUpLink'
import { Link } from 'react-router-dom'
import { loginUser } from '../../../apiCalls/users'
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const onFinish = async (values) => {
    try {
      const response = await loginUser(values)
      if (response) {
        console.log('Success:', response)
        toast.success(response.message)
        sessionStorage.setItem('token', response.token)
        navigate('/')
      } else {
        console.log('Error:', response.message)
        toast.error(response.message)
      }
    } catch (error) {
      console.log('Error:', error)
    }
  }

  return (
    <div className='min-h-screen w-full flex items-center justify-center py-8 sm:py-12 px-4'>
      {/* Main Container */}
      <div className='w-full max-w-md'>
        {/* Card Container with Glass Effect */}
        <div className='bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 border border-white/20'>
          {/* Logo/Brand Section */}
          <Logo />
          {/* Login Form */}
          <LoginForm onFinish={onFinish} />
          {/* Divider */}
          <Divider />
          {/* Social Login Buttons */}
          <SocialloginButton />
          {/* Sign Up Link */}
          <SignUpLink />
        </div>
        {/* Footer Text */}
        <p className='text-center text-xs sm:text-sm text-gray-600 mt-6'>
          By continuing, you agree to our <Link to='/terms' className='text-red-600 hover:underline'>Terms of Service</Link> and <Link to='/privacy' className='text-red-600 hover:underline'>Privacy Policy</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
