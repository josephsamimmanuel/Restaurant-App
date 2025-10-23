import React from 'react'

function LogoLanguageCountry() {
  return (
    <div className='flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-2 pb-4 border-b border-gray-300'>
    {/* Logo */}
    <div className='flex items-center shrink-0'>
        <img 
            src={'https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'} 
            alt='logo' 
            className='w-20 h-8 sm:w-24 sm:h-10' 
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
