import React from 'react'
import { Button, Form } from 'antd'
import { MailOutlined, LockOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

function LoginForm({ onFinish }) {
    return (
        <div>
            <Form
                layout='vertical'
                onFinish={onFinish}
                className='space-y-4'
            >
                {/* Email Field */}
                <Form.Item
                    name='email'
                    label={<span className='text-sm sm:text-base font-semibold text-gray-700'>Email Address</span>}
                    rules={[
                        { required: true, message: 'Please enter your email!' },
                        { type: 'email', message: 'Please enter a valid email!' }
                    ]}
                >
                    <div className='relative'>
                        <div className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
                            <MailOutlined className='text-lg' />
                        </div>
                        <input
                            type='email'
                            placeholder='Enter your email'
                            className='w-full pl-10 pr-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 text-sm sm:text-base hover:border-gray-300'
                        />
                    </div>
                </Form.Item>

                {/* Password Field */}
                <Form.Item
                    name='password'
                    label={<span className='text-sm sm:text-base font-semibold text-gray-700'>Password</span>}
                    rules={[
                        { required: true, message: 'Please enter your password!' }
                    ]}
                >
                    <div className='relative'>
                        <div className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
                            <LockOutlined className='text-lg' />
                        </div>
                        <input
                            type='password'
                            placeholder='Enter your password'
                            className='w-full pl-10 pr-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 text-sm sm:text-base hover:border-gray-300'
                        />
                    </div>
                </Form.Item>

                {/* Remember Me & Forgot Password */}
                <div className='flex items-center justify-between text-xs sm:text-sm'>
                    <label className='flex items-center gap-2 cursor-pointer hover:text-red-600 transition'>
                        <input type='checkbox' className='w-4 h-4 accent-red-500' />
                        <span className='text-gray-600'>Remember me</span>
                    </label>
                    <Link to='/forgot-password' className='text-red-600 hover:text-red-700 font-medium hover:underline transition'>
                        Forgot Password?
                    </Link>
                </div>

                {/* Submit Button */}
                <Button
                    type='primary'
                    htmlType='submit'
                    className='w-full h-11 sm:h-12 text-base sm:text-lg font-semibold bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 border-none rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 mt-2'
                >
                    Sign In
                </Button>
            </Form>
        </div>
    )
}

export default LoginForm
