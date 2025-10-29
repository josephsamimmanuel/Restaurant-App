import React, { useState } from 'react'
import CardSection from './CardSection'
import TabbedSection from './TabbedSection'
import ToggleButton from './ToggleButton'
import FoodItems from './FoodItems'

const images = [
  { id: 1, image: 'https://madhurasrecipe.com/wp-content/uploads/2022/12/Chicken-Biryani-Featured.jpg' },
  { id: 2, image: 'https://i.ytimg.com/vi/W0jLSeot5hU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCbEwMJlPney2C0kskyGXS5xxy5Og' },
  { id: 3, image: 'https://i.ytimg.com/vi/mPOL882IZNE/maxresdefault.jpg' },
  { id: 4, image: 'https://www.shutterstock.com/image-photo/tasty-butter-chicken-curry-dish-600nw-1153329448.jpg' },
]

const profileImage = 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png'

const foodItems = [
  // 🥣 BREAKFAST ITEMS
  {
    id: 1,
    name: 'Wheat Rava Upma',
    price: 60,
    foodTime: 'breakfast',
    foodType: 'Veg',
    foodDescription: 'Healthy South Indian dish made from wheat rava, cooked with vegetables and mild spices.',
    image: 'https://images.herzindagi.info/image/2022/Jan/dalia-upma-easy-recipe_main.jpg'
  },
  {
    id: 2,
    name: 'Ragi Ball (Ragi Mudde)',
    price: 70,
    foodTime: 'breakfast',
    foodType: 'Veg',
    foodDescription: 'Traditional Karnataka-style nutritious dish made from ragi flour and water.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/RAGI_MUDDE.JPG'
  },
  {
    id: 3,
    name: 'Wheat Ball (Gothumai Kali)',
    price: 65,
    foodTime: 'breakfast',
    foodType: 'Veg',
    foodDescription: 'Soft wheat balls made with jaggery and ghee, a healthy Tamil breakfast.',
    image: 'https://i.ytimg.com/vi/fAqJh1deC3Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCJjKRPdBZRAg2b5rC3eNSbQh7GCA'
  },
  {
    id: 4,
    name: 'Moong Dal Dosa',
    price: 80,
    foodTime: 'breakfast',
    foodType: 'Veg',
    foodDescription: 'Protein-rich dosa made from moong dal, served with chutney and sambar.',
    image: 'https://www.indianveggiedelight.com/wp-content/uploads/2017/08/FullSizeRender-36.jpg'
  },
  {
    id: 5,
    name: 'Green Dal Dosa',
    price: 80,
    foodTime: 'breakfast',
    foodType: 'Veg',
    foodDescription: 'Crispy dosa made from green gram (mung beans) batter, light and healthy.',
    image: 'https://www.nehascookbook.com/wp-content/uploads/2022/10/Moong-dal-dosa-WS.jpg'
  },
  {
    id: 6,
    name: 'Aadai Dosa',
    price: 85,
    foodTime: 'breakfast',
    foodType: 'Veg',
    foodDescription: 'Thick and crispy dosa made from a mix of lentils and rice batter, rich in protein.',
    image: 'https://i0.wp.com/paattiskitchen.com/wp-content/uploads/2022/11/kmc_20221109_220439.jpg?resize=1024%2C576&ssl=1'
  },
  {
    id: 7,
    name: 'Millet Upma Dosa',
    price: 90,
    foodTime: 'breakfast',
    foodType: 'Veg',
    foodDescription: 'Unique dosa made using millet grains and upma-style texture, a fiber-rich meal.',
    image: 'https://www.flavourstreat.com/wp-content/uploads/2019/04/mixed-millet-dosa-recipe.jpg'
  },
  {
    id: 8,
    name: 'Kanchipuram Idli',
    price: 75,
    foodTime: 'breakfast',
    foodType: 'Veg',
    foodDescription: 'Flavored idli with ginger, pepper, and cumin — a Tamil Nadu specialty.',
    image: 'https://vanitascorner.com/wp-content/uploads/2018/01/Idlis-of-kanchipuram.jpg'
  },
  {
    id: 9,
    name: 'Perurad Dosa',
    price: 85,
    foodTime: 'breakfast',
    foodType: 'Veg',
    foodDescription: 'Traditional South Indian dosa known for its large size and crispy edges.',
    image: 'https://i.ytimg.com/vi/VfXb8gilvGk/maxresdefault.jpg'
  },

  // 🍛 LUNCH / DINNER ITEMS
  {
    id: 10,
    name: 'Chicken Gravy',
    price: 150,
    foodTime: 'lunch',
    foodType: 'Non-Veg',
    foodDescription: 'Rich and flavorful chicken gravy cooked with onion, tomato, and spices.',
    image: 'https://i.ytimg.com/vi/ny8oEOzOaas/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCvalp19Y7HIQbG-6kBPG2kNOD0EQ'
  },
  {
    id: 11,
    name: 'Paneer Butter Masala',
    price: 140,
    foodTime: 'lunch',
    foodType: 'Veg',
    foodDescription: 'Cottage cheese cubes in creamy butter-tomato gravy, mildly spiced.',
    image: 'https://i0.wp.com/aartimadan.com/wp-content/uploads/2023/11/Paneer-Butter-Masala-Restaurant-Style.jpg?fit=800%2C449&ssl=1'
  },
  {
    id: 12,
    name: 'Naan',
    price: 40,
    foodTime: 'lunch',
    foodType: 'Veg',
    foodDescription: 'Soft, fluffy Indian flatbread baked in tandoor, perfect with gravies.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz1UqXILbuYvsqb3PVlBL_-UGgVuY6DKw3SQ&s'
  },
  {
    id: 13,
    name: 'Mushroom Gravy',
    price: 130,
    foodTime: 'lunch',
    foodType: 'Veg',
    foodDescription: 'Creamy mushroom curry cooked with onions, tomatoes, and Indian spices.',
    image: 'https://i.ytimg.com/vi/RI3hQkmKlTg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBovpu5FeRCRdDwfKTlgbr2X-fsgw'
  },
  {
    id: 14,
    name: 'Butter Chicken',
    price: 160,
    foodTime: 'lunch',
    foodType: 'Non-Veg',
    foodDescription: 'Succulent chicken cooked in buttery tomato gravy with rich flavor.',
    image: 'https://www.shutterstock.com/image-photo/tasty-butter-chicken-curry-dish-600nw-1153329448.jpg'
  },
  {
    id: 15,
    name: 'Chicken Kolambu',
    price: 150,
    foodTime: 'dinner',
    foodType: 'Non-Veg',
    foodDescription: 'Tamil Nadu-style spicy chicken curry made with freshly ground masala.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl2VZz2VEQ0uzRMLiJIvoIvX9Kz4DLnQa5xw&s'
  },
  {
    id: 16,
    name: 'Roti',
    price: 30,
    foodTime: 'dinner',
    foodType: 'Veg',
    foodDescription: 'Soft whole wheat Indian flatbread served with any curry or gravy.',
    image: 'https://www.elmundoeats.com/wp-content/uploads/2017/11/Roti-Canai-3-500x500.jpg'
  },
  {
    id: 17,
    name: 'Kuruma (Veg Kurma)',
    price: 120,
    foodTime: 'dinner',
    foodType: 'Veg',
    foodDescription: 'Mixed vegetable curry cooked in coconut and spice gravy — South Indian style.',
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/veg-kurma-vegetable-korma-recipe-500x375.jpg'
  },
  {
    id: 18,
    name: 'Ghee Rice',
    price: 110,
    foodTime: 'dinner',
    foodType: 'Veg',
    foodDescription: 'Aromatic basmati rice cooked with ghee, cashews, and mild spices.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHn5ScuKRgBoicSHlOuQbZj64SY4LhtGiooA&s'
  },

  // 🥗 ADDITIONAL ITEMS
  {
    id: 19,
    name: 'Idly - 8 Nos (No Chutney, No Sambar)',
    price: 60,
    foodTime: 'breakfast',
    foodType: 'Veg',
    foodDescription: 'Soft steamed idlis served plain without chutney or sambar.',
    image: 'https://i.ytimg.com/vi/LQPm20CSLSg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA60DWr-kDAvVz6m-91-5jTXNuThA'
  },
  {
    id: 20,
    name: 'Chinna Vengayam Sambar - 450ml',
    price: 70,
    foodTime: 'lunch',
    foodType: 'Veg',
    foodDescription: 'Aromatic sambar made with small onions and spices, perfect for rice or idli.',
    image: 'https://i.ytimg.com/vi/kSGM8t3TA6I/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBnZedBjjL03R5cu3i2hdkOJj1uEg'
  },
  {
    id: 21,
    name: 'Thakkali Sadam - 750ml (Order Side Dish Separate)',
    price: 90,
    foodTime: 'lunch',
    foodType: 'Veg',
    foodDescription: 'South Indian tomato rice made with aromatic spices and curry leaves.',
    image: 'https://i.ytimg.com/vi/TNPIkj39lZQ/maxresdefault.jpg'
  },
  {
    id: 22,
    name: 'White Channa Sundal - 450ml',
    price: 70,
    foodTime: 'dinner',
    foodType: 'Veg',
    foodDescription: 'Protein-rich chickpea snack tempered with coconut and mustard seeds.',
    image: 'https://i.ytimg.com/vi/Z6t9xycdBhM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCQVFXuc3Ric0iPbXlIOBQ0NUuVOg'
  },
  {
    id: 23,
    name: 'Keerai Bonda - 8 Nos (No Chutney, No Sambar)',
    price: 65,
    foodTime: 'breakfast',
    foodType: 'Veg',
    foodDescription: 'Crispy spinach bondas served plain without chutney or sambar.',
    image: 'https://i.ytimg.com/vi/5uhLM-ykGas/maxresdefault.jpg'
  },
  {
    id: 24,
    name: 'Kaikari Paruppu Sambar - 450ml',
    price: 75,
    foodTime: 'lunch',
    foodType: 'Veg',
    foodDescription: 'Vegetable lentil sambar rich in flavor, perfect with rice or dosa.',
    image: 'https://i.ytimg.com/vi/dFn7_JGW0sI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDI-AO6TpJnS-xRByeajKjXYQJghQ'
  },
  {
    id: 25,
    name: 'Kadamba Sambar Sadam - 750ml',
    price: 90,
    foodTime: 'lunch',
    foodType: 'Veg',
    foodDescription: 'A one-pot Tamil-style rice dish made with sambar and vegetables.',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjct91fvMyzobhjRDhFEowNXL4koWj7b2xlpy3GtTBBI26-33O77vPP9F7cjFxWHKi7p65Uh7DjEONuxiccoGIrHl75SL_X3LRcmq9Ppf_WDzH8kTxSoD6736d8_EagiCYmkRy_--wp_GDGu6AQ-zK3iZo_RvaSczM_ds8JHvKqlojludNz_eq4SFNN4A/w1200-h630-p-k-no-nu/Polish_20230531_181433906.jpg'
  },
  {
    id: 26,
    name: 'Kara Chutney - 250ml',
    price: 40,
    foodTime: 'breakfast',
    foodType: 'Veg',
    foodDescription: 'Spicy South Indian chutney made from red chilies, onion, and tamarind.',
    image: 'https://i.ytimg.com/vi/_2QxiPTVtrM/maxresdefault.jpg'
  },
  {
    id: 27,
    name: "Plain Veetu Dosa - 6 Nos (No Chutney, No Sambar)",
    price: 70,
    foodTime: 'dinner',
    foodType: 'Veg',
    foodDescription: 'Homemade-style crispy plain dosa served without chutney or sambar.',
    image: 'https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg'
  },
  {
    id: 28,
    name: "Kara Pidi Kozhukattai - 6 Nos",
    price: 65,
    foodTime: 'breakfast',
    foodType: 'Veg',
    foodDescription: 'Spicy steamed rice dumplings — a traditional South Indian delicacy.',
    image: 'https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2017/08/Kara-Pidi-Kozhukattai-6.jpg?resize=720%2C480&ssl=1'
  }
];


  const masalaItems= [
    {
      id: 1,
      name: 'Andhra Paruppu Podi',
      price: 120,
      foodTime: 'anytime',
      foodType: 'Veg',
      foodDescription:
        'A traditional Andhra-style spicy lentil powder made with roasted dal, red chilies, and garlic — perfect with hot rice and ghee.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrWu0vBXLaYJT6chQFZ1Do4vHal3P-9K4sUw&s'
    },
    {
      id: 2,
      name: 'Sambar Powder',
      price: 90,
      foodTime: 'lunch',
      foodType: 'Veg',
      foodDescription:
        'A flavorful South Indian spice mix of coriander, cumin, and red chilies used to prepare authentic sambar.',
      image:
        'https://dakshindelight.com/cdn/shop/files/sambar-dd.jpg?v=1726769297'
    },
    {
      id: 3,
      name: 'Rasam Powder',
      price: 80,
      foodTime: 'lunch',
      foodType: 'Veg',
      foodDescription:
        'A tangy and aromatic spice blend with pepper, cumin, and garlic, used to make traditional South Indian rasam.',
      image:
        'https://i.ytimg.com/vi/FYKaWvt4hP4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAPuF2lbTcRKB4SD_aKMqSieP4yIw'
    },
    {
      id: 4,
      name: 'Kuzhambu Milagai Podi',
      price: 100,
      foodTime: 'lunch',
      foodType: 'Veg',
      foodDescription:
        'A rich, spicy South Indian curry powder made with red chilies, coriander seeds, and aromatic spices for kuzhambu dishes.',
      image:
        'https://paattiskitchen.com/wp-content/uploads/2022/12/kmc_20221129_211625.jpg'
    },
    {
      id: 5,
      name: 'Idli Podi',
      price: 85,
      foodTime: 'breakfast',
      foodType: 'Veg',
      foodDescription:
        'A coarse, spicy powder made with roasted lentils and red chilies — enjoyed best with idli or dosa and sesame oil.',
      image:
        'https://www.thendralnaturals.com/wp-content/uploads/2023/08/idli-podi.jpg'
    }
  ]  

function Dishes() {
  const [activeTab, setActiveTab] = useState('breakfast')
  const [toggleButton, setToggleButton] = useState("Home Food");


  // Filter items by selected foodTime
  const filteredItems = foodItems.filter(item => item.foodTime === activeTab)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-4 sm:py-6 lg:py-8 flex flex-col gap-6 sm:gap-8">
        {/* Top Carousel Section */}
        <CardSection images={images} profileImage={profileImage} />

        {/* Toggle Button Section- Home Food, Home Masalas */}
        <ToggleButton toggleButton={toggleButton} setToggleButton={setToggleButton} />

        {toggleButton === "Home Food" && (
          <>
            <TabbedSection activeTab={activeTab} setActiveTab={setActiveTab} />
            <FoodItems filteredItems={filteredItems} activeTab={activeTab} />
          </>
        )}
        {toggleButton === "Home Masalas" && (
          <>
            <FoodItems filteredItems={masalaItems} activeTab={activeTab} />
          </>
        )}

      </div>
    </div>
  )
}

export default Dishes