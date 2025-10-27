import React from 'react'
import { RiseOutlined, StarOutlined, CheckCircleOutlined, SafetyCertificateOutlined, EnvironmentOutlined, ProfileOutlined, DollarOutlined, SmileOutlined, CoffeeOutlined } from '@ant-design/icons'
import ImageCarousel from './ImageCarousel'

function CardSection({ images, profileImage }) {
  return (
    <div className='flex flex-col gap-4'>
    {/* Card */}
    <div className='flex flex-col gap-3 sm:gap-4'>
        <ImageCarousel images={images} />
        <div className='flex flex-col gap-3'>
            {/* Rating and Delivery Stats */}
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4'>
                <span className='text-green-600 inline-flex items-center gap-1 sm:gap-2 bg-green-100 px-2 py-1 rounded-md text-xs sm:text-sm'>
                  <RiseOutlined />
                  <span className='line-clamp-1'>322 Happy Meals Delivered recently!</span>
                </span>
                <div className='flex items-center gap-2 sm:gap-4'>
                    <span className='border border-gray-300 rounded-md px-2 py-1 text-xs sm:text-sm inline-flex items-center gap-1'>
                      <StarOutlined />4.3
                    </span>
                    <span className='underline text-xs sm:text-sm'>56 Ratings</span>
                </div>
            </div>

            {/* Restaurant Info */}
            <div className='flex flex-col gap-2 sm:gap-3'>
                <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold'>Zomato</h1>
                <p className='text-gray-500 text-xs sm:text-sm leading-relaxed'>Comfort Food | Bakery Items | Non-Veg Tiffin Items | Pregnancy Friendly | kids friendly | South Indian | Halal</p>
                
                {/* Food Type Badges */}
                <div className='flex flex-wrap items-center gap-2'>
                    <span className='text-green-600 inline-flex items-center gap-1 sm:gap-2 bg-green-100 px-2 py-1 rounded-md text-xs sm:text-sm'>
                      <CheckCircleOutlined />Veg
                    </span>
                    <span className='text-green-600 inline-flex items-center gap-1 sm:gap-2 bg-green-100 px-2 py-1 rounded-md text-xs sm:text-sm'>
                      <CoffeeOutlined />Non-Veg
                    </span>
                    <span className='text-green-600 inline-flex items-center gap-1 sm:gap-2 bg-green-100 px-2 py-1 rounded-md text-xs sm:text-sm'>
                      <SafetyCertificateOutlined />Halal
                    </span>
                </div>

                {/* Location, Price & License */}
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-wrap gap-2'>
                        <span className='text-green-600 inline-flex items-center gap-1 sm:gap-2 bg-green-100 px-2 py-1 rounded-md text-xs sm:text-sm'>
                          <EnvironmentOutlined />3.7 kms
                        </span>
                        <span className='text-green-600 inline-flex items-center gap-1 sm:gap-2 bg-green-100 px-2 py-1 rounded-md text-xs sm:text-sm'>
                          <DollarOutlined />₹ 30 - ₹ 249
                        </span>
                        <span className='text-green-600 inline-flex items-center gap-1 sm:gap-2 bg-green-100 px-2 py-1 rounded-md text-xs sm:text-sm'>
                          <SafetyCertificateOutlined />
                          <span className='hidden sm:inline'>22425579000246</span>
                          <span className='sm:hidden'>License</span>
                        </span>
                    </div>

                    {/* Profile Section */}
                    <div className='flex gap-2 sm:gap-3'>
                        <img 
                          src={profileImage} 
                          alt="profile" 
                          className='w-8 h-8 sm:w-10 sm:h-10 object-cover border border-gray-300 rounded-md shrink-0' 
                        />
                        <div className='flex flex-col gap-1 sm:gap-2 min-w-0 flex-1'>
                            <span className='text-xs sm:text-sm inline-flex items-center gap-1'>
                              <ProfileOutlined />kamali
                            </span>
                            <span className='text-xs sm:text-sm text-gray-600 inline-flex items-start gap-1 leading-relaxed'>
                              <SmileOutlined className='shrink-0 mt-0.5' />
                              <span>Welcome To Our Cloud Kitchen – Your Go-To Spot For Tasty, Homemade Foods.</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default CardSection
