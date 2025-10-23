import React from 'react'
import LogoLanguageCountry from './LogoLanguageCountry'
import FooterLink from './FooterLink'

function Footer() {
    return (
        <div className='bg-gray-100 shadow-md mt-auto'>
            <div className='container mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-10 flex flex-col gap-6 sm:gap-8'>
                {/* Top Section: Logo and Language/Country Selectors */}
                <LogoLanguageCountry />
                {/* Footer Links Grid */}
                <FooterLink />
                {/* Copyright or Additional Info (Optional) */}
                <div className='text-center text-xs sm:text-sm text-gray-600 pt-4 border-t border-gray-300'>
                    <p>© 2025 Zomato. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
