import React from 'react'
import { FilterOutlined, DownOutlined } from '@ant-design/icons'

function FilterCusines() {
    return (
        <div className='flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide'>
            <div className='flex items-center gap-2 px-3 py-1.5 border border-green-900 rounded-md hover:bg-gray-50 transition cursor-pointer shrink-0'>
                <FilterOutlined className='text-sm' />
                <button className='text-black text-sm rounded-md outline-none whitespace-nowrap'>
                    Filter
                </button>
            </div>
            <button className='text-black px-3 py-1.5 text-sm rounded-md border border-green-900 hover:bg-gray-50 transition whitespace-nowrap shrink-0'>
                Pure Veg
            </button>
            <div className='flex items-center gap-2 px-3 py-1.5 border border-green-900 rounded-md hover:bg-gray-50 transition cursor-pointer shrink-0'>
                <button className='text-black text-sm rounded-md outline-none whitespace-nowrap'>
                    Cuisines
                </button>
                <DownOutlined className='text-xs' />
            </div>
        </div>
    )
}

export default FilterCusines
