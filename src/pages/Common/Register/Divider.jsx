import React from 'react'

function Divider() {
  return (
    <div className='relative my-6 sm:my-8'>
    <div className='absolute inset-0 flex items-center'>
      <div className='w-full border-t border-gray-300'></div>
    </div>
    <div className='relative flex justify-center text-xs sm:text-sm'>
      <span className='px-4 bg-white/80 text-gray-500'>Or sign up with</span>
    </div>
  </div>
  )
}

export default Divider
