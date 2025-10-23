import React from 'react'

function Categories({ categories }) {
    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold border-b border-gray-300 pb-3 sm:pb-4'>
                Inspiration for your first order
            </h1>
            <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6'>
                {categories?.map((category) => (
                    <div
                        key={category.id}
                        className='flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-200 cursor-pointer'
                    >
                        <img
                            src={category.image}
                            alt={category.name}
                            className='w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-cover rounded-full shadow-md hover:shadow-lg transition'
                        />
                        <p className='text-xs sm:text-sm lg:text-base text-center font-medium'>{category.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories
