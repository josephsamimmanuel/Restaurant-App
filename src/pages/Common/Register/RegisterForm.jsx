import React from 'react'
import { Button, Form } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

function RegisterForm({ onFinish }) {
  return (
    <div>
                <Form 
            layout='vertical' 
            onFinish={onFinish}
            className='space-y-4'
          >
            {/* Full Name Field */}
            <Form.Item 
              name='fullName' 
              label={<span className='text-sm sm:text-base font-semibold text-gray-700'>Full Name</span>}
              rules={[
                { required: true, message: 'Please enter your full name!' }
              ]}
            >
              <div className='relative'>
                <div className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
                  <UserOutlined className='text-lg' />
                </div>
                <input 
                  type='text' 
                  placeholder='Enter your full name'
                  className='w-full pl-10 pr-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 text-sm sm:text-base hover:border-gray-300'
                />
              </div>
            </Form.Item>

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

            {/* Phone Field */}
            <Form.Item 
              name='phoneNumber' 
              label={<span className='text-sm sm:text-base font-semibold text-gray-700'>Phone Number</span>}
              rules={[
                { required: true, message: 'Please enter your phone number!' }
              ]}
            >
              <div className='relative'>
                <div className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
                  <PhoneOutlined className='text-lg' />
                </div>
                <input 
                  type='tel' 
                  placeholder='Enter your phone number'
                  className='w-full pl-10 pr-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 text-sm sm:text-base hover:border-gray-300'
                />
              </div>
            </Form.Item>

            {/* Password Field */}
            <Form.Item 
              name='password' 
              label={<span className='text-sm sm:text-base font-semibold text-gray-700'>Password</span>}
              rules={[
                { required: true, message: 'Please enter your password!' },
                { min: 6, message: 'Password must be at least 6 characters!' }
              ]}
            >
              <div className='relative'>
                <div className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
                  <LockOutlined className='text-lg' />
                </div>
                <input 
                  type='password' 
                  placeholder='Create a password'
                  className='w-full pl-10 pr-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 text-sm sm:text-base hover:border-gray-300'
                />
              </div>
            </Form.Item>

            {/* Confirm Password Field */}
            <Form.Item 
              name='confirmPassword' 
              label={<span className='text-sm sm:text-base font-semibold text-gray-700'>Confirm Password</span>}
              dependencies={['password']}
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(new Error('Passwords do not match!'))
                  },
                }),
              ]}
            >
              <div className='relative'>
                <div className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
                  <LockOutlined className='text-lg' />
                </div>
                <input 
                  type='password' 
                  placeholder='Confirm your password'
                  className='w-full pl-10 pr-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 text-sm sm:text-base hover:border-gray-300'
                />
              </div>
            </Form.Item>

            {/* Terms and Conditions */}
            <div className='flex items-start gap-2 text-xs sm:text-sm'>
              <input type='checkbox' className='w-4 h-4 mt-0.5 accent-red-500 shrink-0' required />
              <label className='text-gray-600'>
                I agree to the <Link to='/terms' className='text-red-600 hover:underline'>Terms of Service</Link> and <Link to='/privacy' className='text-red-600 hover:underline'>Privacy Policy</Link>
              </label>
            </div>

            {/* Submit Button */}
            <Button 
              type='primary' 
              htmlType='submit' 
              className='w-full h-11 sm:h-12 text-base sm:text-lg font-semibold bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 border-none rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 mt-2'
            >
              Create Account
            </Button>
          </Form>
    </div>
  )
}

export default RegisterForm
