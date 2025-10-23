import React from 'react'

function Brands({ brands }) {
    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold border-b border-gray-300 pb-3 sm:pb-4'>
                Top brands for you
            </h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6'>
                {brands?.map((brand) => (
                    <div
                        key={brand.id}
                        className='flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-200 cursor-pointer p-2'
                    >
                        <img
                            src={brand.image}
                            alt={brand.name}
                            className='w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 object-cover rounded-full shadow-md hover:shadow-lg transition'
                        />
                        <p className='text-xs sm:text-sm lg:text-base font-medium text-center truncate w-full'>{brand.name}</p>
                        <p className='text-xs sm:text-sm text-gray-600'>{brand.duration}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Brands
