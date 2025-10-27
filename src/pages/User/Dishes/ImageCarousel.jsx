import React, { useRef, useState } from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

const ImageCarousel = ({ images }) => {
  const scrollRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const scroll = (direction) => {
    const newIndex =
      direction === 'left'
        ? Math.max(currentIndex - 1, 0)
        : Math.min(currentIndex + 1, images.length - 1)

    setCurrentIndex(newIndex)

    const { current } = scrollRef
    if (current) {
      const scrollAmount = current.clientWidth * newIndex
      current.scrollTo({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      {/* Left Arrow */}
      <button
        onClick={() => scroll('left')}
        disabled={currentIndex === 0}
        className={`absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 sm:p-2 z-10 shadow-md transition ${
          currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-80 hover:opacity-100'
        }`}
      >
        <LeftOutlined className="text-sm sm:text-base" />
      </button>

      {/* Image Container */}
      <div
        ref={scrollRef}
        className="flex overflow-hidden scroll-smooth w-full"
      >
        {images.map((image, index) => (
          <div
            key={image.id}
            className="shrink-0 w-full"
            style={{ minWidth: '100%' }}
          >
            <img
              src={image.image}
              alt={`Slide ${image.id}`}
              className="w-full h-48 sm:h-64 md:h-80 lg:h-[350px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll('right')}
        disabled={currentIndex === images.length - 1}
        className={`absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 sm:p-2 z-10 shadow-md transition ${
          currentIndex === images.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-80 hover:opacity-100'
        }`}
      >
        <RightOutlined className="text-sm sm:text-base" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index)
              const { current } = scrollRef
              if (current) {
                const scrollAmount = current.clientWidth * index
                current.scrollTo({ left: scrollAmount, behavior: 'smooth' })
              }
            }}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition ${
              currentIndex === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel