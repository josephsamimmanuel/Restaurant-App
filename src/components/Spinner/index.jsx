import React from 'react'
import { useSelector } from 'react-redux'

function Spinner() {
  const loading = useSelector((state) => state.loader.loading)
  return (
    loading ? (<div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
    </div>): null
  )
}

export default Spinner