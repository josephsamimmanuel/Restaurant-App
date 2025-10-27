import React from 'react'

function TabbedSection({ activeTab, setActiveTab }) {
  return (
    <div className="flex justify-center items-center gap-3">
    {['breakfast', 'lunch', 'dinner'].map(tab => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`px-4 py-2 text-sm sm:text-base rounded-md border 
          ${activeTab === tab
            ? 'bg-green-600 text-white border-green-600'
            : 'text-black border-gray-300 hover:bg-gray-100'
          } transition`}
      >
        {tab.charAt(0).toUpperCase() + tab.slice(1)}
      </button>
    ))}
  </div>
  )
}

export default TabbedSection
