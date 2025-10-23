import React from 'react'

const categories = [
  {
    id: 1,
    name: 'Pizza',
    image: 'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png'
  },
  {
    id: 2,
    name: 'Briyani',
    image: 'https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png'
  },
  {
    id: 3,
    name: 'Burger',
    image: 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png'
  },
  {
    id: 4,
    name: 'Chicken',
    image: 'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png'
  },
  {
    id: 5,
    name: 'Shawarma',
    image: 'https://b.zmtcdn.com/data/o2_assets/2f34540e0b12058f5f8b9390c3a3fb4a1648972281.png'
  },
  {
    id: 6,
    name: 'Parotta',
    image: 'https://b.zmtcdn.com/data/dish_photos/03a/21948feb4ea122ab37acf633ed7ec03a.jpg'
  },
  {
    id: 7,
    name: 'Chat',
    image: 'https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png'
  },
  {
    id: 8,
    name: 'South Indian',
    image: 'https://b.zmtcdn.com/data/o2_assets/e1b5ebed94e25d832f8dea96824537521678798686.png'
  },
  {
    id: 9,
    name: 'Cake',
    image: 'https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png'
  },
  {
    id: 10,
    name: 'Sandwich',
    image: 'https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png'
  },
  {
    id: 11,
    name: 'Momos',
    image: 'https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png'
  },
  {
    id: 12,
    name: 'Paratha',
    image: 'https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png'
  },
]

const brands = [
  {
    id: 1,
    name: 'ibaco',
    duration: '20-30 min',
    image: 'https://b.zmtcdn.com/data/brand_creatives/logos/29ba9d19096d3d116909a4363082089c_1556007154.png?output-format=webp'
  },
  {
    id: 2,
    name: 'Muchin Crwe',
    duration: '20-30 min',
    image: 'https://b.zmtcdn.com/data/brand_creatives/logos/dab5bcd566375920b3b01ff9424c46221750566379.png?output-format=webp'
  },
  {
    id: 3,
    name: 'Malgudi Coffee House',
    duration: '20-30 min',
    image: 'https://b.zmtcdn.com/data/brand_creatives/logos/fb81c2431252f8856043871483aecf5b1702122743.png?output-format=webp'
  },
  {
    id: 4,
    name: 'Kings Pizza Corner',
    duration: '20-30 min',
    image: 'https://b.zmtcdn.com/data/brand_creatives/logos/cb51d05e5e6180d6417f8160fc8afc951706704026.png?output-format=webp'
  },
  {
    id: 5,
    name: 'Ary cakes and Nuts',
    duration: '20-30 min',
    image: 'https://b.zmtcdn.com/data/brand_creatives/logos/17e2784ba984ab9943e3a8969d59fd5e_1644418457.png?output-format=webp'
  },
]

function Home() {
  return (
    <div className='container mx-auto px-2 sm:px-4 py-3 sm:py-4 flex flex-col gap-3 sm:gap-4 lg:gap-6'>
      <h1 className='text-3xl font-bold border-b border-gray-300 pb-4'>Inspiration for your first order</h1>
      <div className='flex flex-wrap gap-4 '>
        {categories.map((category) => (
          <div key={category.id} className='flex flex-col items-center gap-2'>
            <img src={category.image} alt={category.name} className='w-40 h-40 object-cover rounded-full' />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
      <h1 className='text-3xl font-bold border-b border-gray-300 pb-4'>Top brands for you</h1>
      <div className='flex flex-wrap gap-4 '>
        {brands.map((brand) => (
          <div key={brand.id} className='flex flex-col items-center gap-2 '>
            <img src={brand.image} alt={brand.name} className='w-40 h-40 object-cover rounded-full' />
            <p>{brand.name}</p>
            <p>{brand.duration}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
