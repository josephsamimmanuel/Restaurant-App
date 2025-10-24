import React from 'react'
import { UserOutlined } from '@ant-design/icons'
function Logo() {
    return (
        <div className='flex flex-col items-center mb-6 sm:mb-8'>
            <div className='w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-4 shadow-lg'>
                <UserOutlined className='text-3xl sm:text-4xl text-white' />
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2'>Welcome Back</h1>
            <p className='text-sm sm:text-base text-gray-600 text-center'>Sign in to continue to your account</p>
        </div>
    )
}

export default Logo
