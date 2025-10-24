import React from 'react'
import { Link } from 'react-router-dom'
function SignUpLink() {
  return (
    <div className='text-center text-sm sm:text-base'>
    <span className='text-gray-600'>Don't have an account? </span>
    <Link to='/register' className='text-red-600 hover:text-red-700 font-semibold hover:underline transition'>
      Sign up
    </Link>
  </div>
  )
}

export default SignUpLink
