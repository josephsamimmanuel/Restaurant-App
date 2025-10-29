import React from 'react'
import { PlusOutlined } from '@ant-design/icons'

function FoodItems({ filteredItems, activeTab }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {filteredItems.map(food => (
        <div
          key={food.id}
          className="flex flex-col sm:flex-row gap-3 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white"
        >
          {/* Text Content */}
          <div className="p-3 sm:p-4 flex flex-col justify-between gap-2 flex-1 min-w-0">
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <h3 className="text-base sm:text-md font-semibold line-clamp-2 text-gray-800">
                {food.name}
              </h3>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-green-600 font-bold text-sm sm:text-base">
                  ₹{food.price}
                </span>
                <span
                  className={`text-xs sm:text-sm font-medium px-2 py-0.5 rounded ${food.foodType === 'Veg'
                      ? 'bg-green-100 text-green-700 border border-green-300'
                      : 'bg-red-100 text-red-700 border border-red-300'
                    }`}
                >
                  {food.foodType}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed">
                {food.foodDescription}
              </p>
            </div>
          </div>

          {/* Image and Button */}
          <div className="relative w-full h-40 sm:h-full sm:w-36 md:w-40 lg:w-44 shrink-0 group py-6 px-2">
            {food.isOffer && (
              <p className="absolute top-2 right-2 text-xs sm:text-sm text-white bg-green-600 rounded-md px-2 py-1 font-semibold shadow-md z-20">
                {food.offePercentage}
              </p>
            )}

            <img
              src={food.image}
              alt={food.name}
              className="w-full h-40 sm:h-40 object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg z-10 relative"
            />

            {/* Add Button */}
            <button
              className="absolute bottom-2 right-2 sm:bottom-2 sm:right-11 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-md text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 z-30"
              onClick={() => console.log(`Added ${food.name}`)}
            >
              <PlusOutlined />
              <span className='text-xs sm:text-sm font-medium ml-1'>Add</span>
            </button>
          </div>

        </div>
      ))}

      {filteredItems.length === 0 && (
        <div className="col-span-full flex flex-col items-center justify-center py-12">
          <p className="text-center text-gray-500 text-base sm:text-lg">
            No dishes available for {activeTab}.
          </p>
        </div>
      )}
    </div>
  )
}

export default FoodItems
