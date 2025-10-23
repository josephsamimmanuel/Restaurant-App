import React from 'react'
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined, PlayCircleOutlined } from '@ant-design/icons'

function FooterLink() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-6'>
            {/* About Section */}
            <div className='flex flex-col items-start gap-2.5'>
                <span className='text-sm sm:text-base font-bold border-b-2 border-gray-500 pb-2 mb-1'>ABOUT</span>
                <span className='text-xs sm:text-sm text-gray-700 hover:text-gray-900 cursor-pointer transition'>About Us</span>
                <span className='text-xs sm:text-sm text-gray-700 hover:text-gray-900 cursor-pointer transition'>Blog</span>
                <span className='text-xs sm:text-sm text-gray-700 hover:text-gray-900 cursor-pointer transition'>Work with us</span>
                <span className='text-xs sm:text-sm text-gray-700 hover:text-gray-900 cursor-pointer transition'>Investor Relations</span>
                <span className='text-xs sm:text-sm text-gray-700 hover:text-gray-900 cursor-pointer transition'>Report Fraud</span>
                <span className='text-xs sm:text-sm text-gray-700 hover:text-gray-900 cursor-pointer transition'>Contact Us</span>
            </div>

            {/* Contact Section */}
            <div className='flex flex-col items-start gap-2.5'>
                <span className='text-sm sm:text-base font-bold border-b-2 border-gray-500 pb-2 mb-1'>CONTACT</span>
                <span className='text-xs sm:text-sm text-gray-700 hover:text-gray-900 cursor-pointer transition'>Contact Us</span>
                <span className='text-xs sm:text-sm text-gray-700 hover:text-gray-900 cursor-pointer transition'>Partner with us</span>
                <span className='text-xs sm:text-sm text-gray-700 hover:text-gray-900 cursor-pointer transition'>Advertise</span>
                <span className='text-xs sm:text-sm text-gray-700 hover:text-gray-900 cursor-pointer transition'>Help Center</span>
                <span className='text-xs sm:text-sm text-gray-700 hover:text-gray-900 cursor-pointer transition'>Safety Resource Center</span>
                <span className='text-xs sm:text-sm text-gray-700 hover:text-gray-900 cursor-pointer transition'>Corporate - APAC</span>
            </div>

            {/* For Restaurants Section */}
            <div className='flex flex-col items-start gap-2.5'>
                <span className='text-sm sm:text-base font-bold border-b-2 border-gray-500 pb-2 mb-1'>FOR RESTAURANTS</span>
                <span className='text-xs sm:text-sm text-gray-700 hover:text-gray-900 cursor-pointer transition'>Partner with us</span>
                <span className='text-xs sm:text-sm text-gray-700 hover:text-gray-900 cursor-pointer transition'>Advertise</span>
                <span className='text-xs sm:text-sm text-gray-700 hover:text-gray-900 cursor-pointer transition'>Help Center</span>
                <span className='text-xs sm:text-sm text-gray-700 hover:text-gray-900 cursor-pointer transition'>Safety Resource Center</span>
                <span className='text-xs sm:text-sm text-gray-700 hover:text-gray-900 cursor-pointer transition'>Corporate - APAC</span>
            </div>

            {/* Learn More Section */}
            <div className='flex flex-col items-start gap-2.5'>
                <span className='text-sm sm:text-base font-bold border-b-2 border-gray-500 pb-2 mb-1'>LEARN MORE</span>
                <span className='text-xs sm:text-sm text-gray-700 hover:text-gray-900 cursor-pointer transition'>Press</span>
                <span className='text-xs sm:text-sm text-gray-700 hover:text-gray-900 cursor-pointer transition'>Blog</span>
                <span className='text-xs sm:text-sm text-gray-700 hover:text-gray-900 cursor-pointer transition'>News Blog</span>
                <span className='text-xs sm:text-sm text-gray-700 hover:text-gray-900 cursor-pointer transition'>Corporate</span>
                <span className='text-xs sm:text-sm text-gray-700 hover:text-gray-900 cursor-pointer transition'>Media Kit</span>
            </div>

            {/* Social Links Section */}
            <div className='flex flex-col items-start sm:items-center lg:items-center gap-3'>
                <span className='text-sm sm:text-base font-bold border-b-2 border-gray-500 pb-2 mb-1'>SOCIAL LINKS</span>
                <div className='flex items-center gap-3 sm:gap-4'>
                    <FacebookOutlined className='text-lg sm:text-xl lg:text-2xl text-gray-700 hover:text-blue-600 cursor-pointer transition' />
                    <TwitterOutlined className='text-lg sm:text-xl lg:text-2xl text-gray-700 hover:text-sky-500 cursor-pointer transition' />
                    <InstagramOutlined className='text-lg sm:text-xl lg:text-2xl text-gray-700 hover:text-pink-600 cursor-pointer transition' />
                    <LinkedinOutlined className='text-lg sm:text-xl lg:text-2xl text-gray-700 hover:text-blue-700 cursor-pointer transition' />
                    <PlayCircleOutlined className='text-lg sm:text-xl lg:text-2xl text-gray-700 hover:text-red-600 cursor-pointer transition' />
                </div>
            </div>
        </div>
    )
}

export default FooterLink
