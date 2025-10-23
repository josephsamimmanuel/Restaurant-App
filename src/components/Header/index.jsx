import React from 'react'
import LogoAuthSearch from './LogoAuthSearch'
import FilterCusines from './filterCusines'
function Header() {
    return (
        <div className='bg-white shadow-md'>
            <div className='container mx-auto px-2 sm:px-4 py-3 sm:py-4 flex flex-col gap-3 sm:gap-4 lg:gap-6'>
                {/* Top Section: Logo, Search, and Auth Buttons */}
                <LogoAuthSearch />

                {/* Buttons - Filter, Pure Veg and Cuisines Dropdown */}
                <FilterCusines />
            </div>
        </div>
    )
}

export default Header
