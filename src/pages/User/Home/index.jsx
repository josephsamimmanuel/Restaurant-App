import React from 'react'
import Categories from './Categories'
import Brands from './Brands'
import Cards from './Cards'

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
    name: 'Muchin Crew',
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

const cardDetails = [{
  id: 1,
  restaurantName: 'Pizza Hut',
  rating: 4.8,
  category: 'Pizza, Fast Food',
  costForTwo: '₹ 100 for two',
  isOffers: true,
  offersText: '50% OFF',
  duration: '24 min',
  promoted: true,
  pureVeg: true,
  image: 'https://b.zmtcdn.com/data/pictures/8/20854718/12bf01ba16e38e0e17a1b696fccc443b_o2_featured_v2.jpg?output-format=webp'
},
{
  id: 2,
  restaurantName: 'Burger King',
  rating: 4.5,
  category: 'Fast Food',
  costForTwo: '₹ 500 for two',
  isOffers: false,
  offersText: '',
  duration: '28 min',
  promoted: false,
  pureVeg: false,
  image: 'https://b.zmtcdn.com/data/pictures/3/19057193/f7f95ea4eb814a808b304dce5303d0a5_o2_featured_v2.jpg?output-format=webp'
},
{
  id: 3,
  restaurantName: 'Pizza Hut',
  rating: 4.8,
  category: 'Pizza, Fast Food',
  costForTwo: '₹ 100 for two',
  isOffers: true,
  offersText: '50% OFF',
  duration: '28 min',
  promoted: false,
  pureVeg: false,
  image: 'https://b.zmtcdn.com/data/pictures/9/19064389/c15d6674c51833cd7da456a6f91eaf74_o2_featured_v2.jpg?output-format=webp'
},
{
  id: 4,
  restaurantName: 'Pizza Hut',
  rating: 4.8,
  category: 'Pizza, Fast Food',
  costForTwo: '₹ 100 for two',
  isOffers: true,
  offersText: '50% OFF',
  duration: '24 min',
  promoted: false,
  pureVeg: false,
  image: 'https://b.zmtcdn.com/data/pictures/6/19416856/5ed6b1bbb8f5992238bf8a80b2832e3e_o2_featured_v2.jpg?output-format=webp'
},
]

function Home() {
  return (
    <div className='container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8 flex flex-col gap-6 sm:gap-8 lg:gap-10'>
      {/* Categories Section */}
      <Categories categories={categories} />
      {/* Brands Section */}
      <Brands brands={brands} />
      {/* Restaurant Cards Section */}
      <Cards cardDetails={cardDetails} />
    </div>
  );
}

export default Home
