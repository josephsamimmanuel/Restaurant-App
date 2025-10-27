import React from 'react'


function FoodItems({ filteredItems, activeTab }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    {filteredItems.map(food => (
      <div key={food.id} className="flex flex-col sm:flex-row gap-3 overflow-hidden shadow-sm hover:shadow-md transition py-4">
        {/* Text Content */}
        <div className="p-3 sm:p-4 flex flex-col justify-between gap-2 flex-1">
          <div className="flex flex-col gap-1">
            <h3 className="text-base sm:text-lg font-semibold line-clamp-2">{food.name}</h3>
            <span className="text-green-600 font-medium text-sm sm:text-base">₹{food.price}</span>
            <span className="text-gray-500 text-xs sm:text-sm">{food.time}</span>
            <span className={`text-xs sm:text-sm font-medium ${food.foodType === 'Veg' ? 'text-green-600' : 'text-red-600'}`}>
              {food.foodType}
            </span>
          </div>
        </div>
        
        {/* Image and Button */}
        <div className="relative w-full sm:w-40 md:w-44 shrink-0">
          <img 
            src={food.image} 
            alt={food.name} 
            className="w-full h-32 sm:h-48 md:h-64 lg:h-32 object-cover p-2" 
          />
          <button className="absolute bottom-0 right-14 bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-sm font-medium shadow-lg transition">
            Add
          </button>
        </div>
      </div>
    ))}
    {filteredItems.length === 0 && (
      <p className="text-center col-span-full text-gray-500">No dishes available for {activeTab}.</p>
    )}
  </div>
  )
}

export default FoodItems
