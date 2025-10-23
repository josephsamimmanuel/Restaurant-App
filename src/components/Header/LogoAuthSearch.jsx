import React from 'react'
import { SearchOutlined, EnvironmentOutlined } from '@ant-design/icons'
function LogoAuthSearch() {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-4'>
            {/* Logo - Hidden on mobile, visible on tablet and up */}
            <div className='hidden sm:flex items-center shrink-0'>
                <img
                    src={'https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'}
                    alt='logo'
                    className='w-20 h-8 sm:w-24 sm:h-10'
                />
            </div>

            {/* Search Inputs - Full width on mobile, side by side on tablet+ */}
            <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full lg:w-auto lg:flex-1 lg:max-w-2xl lg:mx-4'>
                <div className='flex items-center border border-gray-300 rounded-md p-2 gap-2 w-full sm:w-auto sm:flex-1'>
                    <EnvironmentOutlined className='text-gray-500' />
                    <input
                        type='text'
                        placeholder='Search for location'
                        className='w-full sm:w-auto sm:min-w-[150px] rounded-md outline-none text-sm'
                    />
                </div>
                <div className='flex items-center border border-gray-300 rounded-md p-2 gap-2 w-full sm:w-auto sm:flex-1'>
                    <SearchOutlined className='text-gray-500' />
                    <input
                        type='text'
                        placeholder='Search for Restaurant'
                        className='w-full sm:w-auto sm:min-w-[150px] rounded-md outline-none text-sm'
                    />
                </div>
            </div>

            {/* Login/Signup Buttons */}
            <div className='flex items-center gap-2 shrink-0'>
                <button className='text-black px-3 sm:px-4 py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-50 transition'>
                    Login
                </button>
                <button className='text-black px-3 sm:px-4 py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-50 transition'>
                    Signup
                </button>
                {/* <div className='flex items-center'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Cart</button>
        </div>
        <div className='flex items-center'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>User Profile</button>
        </div> */}
            </div>
        </div>
    )
}

export default LogoAuthSearch
