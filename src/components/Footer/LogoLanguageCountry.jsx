import React from 'react'
import logo from '../../../public/logo.png'
function LogoLanguageCountry() {
  return (
    <div className='flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-2 pb-4 border-b border-gray-300'>
    {/* Logo */}
    <div className='flex items-center shrink-0'>
        <img 
            src={logo} 
            alt='logo' 
            className='w-72 h-20 sm:w-72 sm:h-20' 
        />
    </div>

    {/* Language and Country Selectors */}
    <div className='flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto'>
        <div className='flex items-center border border-gray-300 bg-white rounded-md p-2 gap-2 w-full sm:w-auto hover:border-gray-400 transition'>
            <select className='w-full sm:w-auto sm:min-w-[120px] rounded-md outline-none text-sm cursor-pointer bg-transparent'>
                <option value='1'>🇮🇳 India</option>
                <option value='2'>🇺🇸 USA</option>
                <option value='3'>🇬🇧 UK</option>
            </select>
        </div>
        <div className='flex items-center border border-gray-300 bg-white rounded-md p-2 gap-2 w-full sm:w-auto hover:border-gray-400 transition'>
            <select className='w-full sm:w-auto sm:min-w-[120px] rounded-md outline-none text-sm cursor-pointer bg-transparent'>
                <option value='1'>English</option>
                <option value='2'>Hindi</option>
                <option value='3'>Marathi</option>
            </select>
        </div>
    </div>
</div>
  )
}

export default LogoLanguageCountry
