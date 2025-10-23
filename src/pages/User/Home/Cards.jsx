import React from 'react'
import { StarOutlined } from '@ant-design/icons'

function Cards({ cardDetails }) {
    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold border-b border-gray-300 pb-3 sm:pb-4'>
                Best Food in Tirunelveli
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6'>
                {cardDetails?.map((card) => (
                    <div
                        key={card.id}
                        className='flex flex-col gap-2 sm:gap-3 p-2 sm:p-3 hover:shadow-xl transition-shadow duration-300 rounded-lg cursor-pointer border border-transparent hover:border-gray-200 bg-white'
                    >
                        {/* Image Container */}
                        <div className='relative overflow-hidden rounded-lg'>
                            <img
                                src={card.image}
                                alt={card.restaurantName}
                                className='w-full h-40 sm:h-48 lg:h-56 object-cover rounded-lg hover:scale-110 transition-transform duration-300'
                            />
                            {/* Promoted Badge */}
                            {card.promoted && (
                                <p className='absolute top-2 left-2 text-xs sm:text-sm text-white bg-gray-800 bg-opacity-80 rounded-md px-2 py-1 font-semibold'>
                                    PROMOTED
                                </p>
                            )}
                            {/* Offer Badge */}
                            <p className='absolute top-2 right-2 text-xs sm:text-sm text-white bg-green-600 rounded-md px-2 py-1 font-semibold shadow-md'>
                                {card.isOffers ? card.offersText : 'NEW'}
                            </p>
                        </div>

                        {/* Card Details */}
                        <div className='flex justify-between items-start gap-2'>
                            {/* Left Side - Restaurant Info */}
                            <div className='flex flex-col items-start gap-1 flex-1 min-w-0'>
                                <p className='text-base sm:text-lg font-bold text-gray-900 truncate w-full'>{card.restaurantName}</p>
                                <p className='text-xs sm:text-sm text-gray-600 truncate w-full'>{card.category}</p>
                                <p className='text-xs sm:text-sm text-gray-500'>{card.duration}</p>
                            </div>

                            {/* Right Side - Rating and Cost */}
                            <div className='flex flex-col items-end gap-1 shrink-0'>
                                <div className='flex items-center gap-1 text-xs sm:text-sm text-white bg-green-600 rounded-md px-2 py-1 font-semibold'>
                                    <StarOutlined className='text-xs' />
                                    <span>{card.rating}</span>
                                </div>
                                <p className='text-xs sm:text-sm text-gray-600 whitespace-nowrap'>{card.costForTwo}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards
