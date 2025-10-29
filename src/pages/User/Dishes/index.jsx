import React, { useState, useEffect } from 'react'
import CardSection from './CardSection'
import TabbedSection from './TabbedSection'
import ToggleButton from './ToggleButton'
import FoodItems from './FoodItems'
import { useDispatch, useSelector } from 'react-redux'
import { setFoodItems } from '../../../redux/foodItemsSlice'
import { setMasalaItems } from '../../../redux/masalaItemsSlice'
import { getAllFoodItems } from '../../../apiCalls/foodItems'
import { getAllMasalaItems } from '../../../apiCalls/masalaItems'
import toast from 'react-hot-toast'

const images = [
  { id: 1, image: 'https://madhurasrecipe.com/wp-content/uploads/2022/12/Chicken-Biryani-Featured.jpg' },
  { id: 2, image: 'https://i.ytimg.com/vi/W0jLSeot5hU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCbEwMJlPney2C0kskyGXS5xxy5Og' },
  { id: 3, image: 'https://i.ytimg.com/vi/mPOL882IZNE/maxresdefault.jpg' },
  { id: 4, image: 'https://www.shutterstock.com/image-photo/tasty-butter-chicken-curry-dish-600nw-1153329448.jpg' },
]

const profileImage = 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png'

function Dishes() {
  const [activeTab, setActiveTab] = useState('breakfast')
  const [toggleButton, setToggleButton] = useState("Home Food");
  const dispatch = useDispatch()
  const foodItems = useSelector(state => state.foodItems.foodItems)
  const masalaItems = useSelector(state => state.masalaItems.masalaItems)

  useEffect(() => {
    if (toggleButton === "Home Food") {
      fetchFoodItems()
    } else {
      fetchMasalaItems()
    }
  }, [toggleButton])

  const fetchFoodItems = async () => {
    try {
    const response = await getAllFoodItems()
    if (response) {
      dispatch(setFoodItems(response.foodItems))
    } else {
      toast.error(response.message)
    }
    } catch (error) {
      console.log(error)
    }
  }

  const fetchMasalaItems = async () => {
    try {
    const response = await getAllMasalaItems()
    if (response) {
      dispatch(setMasalaItems(response.masalaItems))
    } else {
      toast.error(response.message)
    }
    } catch (error) {
      console.log(error)
    }
  }

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