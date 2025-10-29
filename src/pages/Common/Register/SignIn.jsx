import React from 'react'
import { Link } from 'react-router-dom'
function SignIn() {
  return (
    <div className='text-center text-sm sm:text-base'>
    <span className='text-gray-600'>Already have an account? </span>
    <Link to='/' className='text-red-600 hover:text-red-700 font-semibold hover:underline transition'>
      Sign in
    </Link>
  </div>
  )
}

export default SignIn
