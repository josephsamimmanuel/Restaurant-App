import React, { useState, useEffect, useRef } from 'react'
import { SearchOutlined, LogoutOutlined } from '@ant-design/icons'
import logo from '../../../public/logo.png'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../apiCalls/users'
import { setUser } from '../../redux/userSlice'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import DialogBox from '../DialogBox'
import { autoCompleteFoodItems } from '../../apiCalls/foodItems'
import { debounce } from 'lodash'

function LogoAuthSearch() {
  const [autoCompleteFoodItemsList, setAutoCompleteFoodItemsList] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [open, setOpen] = useState(false)
  const user = useSelector((state) => state?.user?.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const searchRef = useRef(null)

  const handleCancel = () => setOpen(false)

  const handleSearch = async (query) => {
    if (query.length > 2) {
      try {
        const response = await autoCompleteFoodItems(query)
        if (response) {
          setAutoCompleteFoodItemsList(response.foodItems)
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      setAutoCompleteFoodItemsList([])
    }
  }

  const debouncedSearch = debounce(handleSearch, 400)

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setAutoCompleteFoodItemsList([])
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleConfirm = async () => {
    try {
      const response = await logoutUser()
      if (response) {
        dispatch(setUser(null))
        sessionStorage.removeItem('token')
        toast.success(response.message)
        navigate('/')
      } else {
        toast.error(response.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full">
      {/* Main Header Container */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-3 sm:gap-4 lg:gap-6 px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4">

        {/* Logo */}
        <div className="flex items-center justify-center lg:justify-start w-full lg:w-auto shrink-0">
          <img
            src={logo}
            alt="logo"
            className="w-48 h-12 xs:w-56 xs:h-14 sm:w-64 sm:h-16 md:w-72 md:h-20 lg:w-64 lg:h-16 xl:w-72 xl:h-20 object-contain"
          />
        </div>

        {/* Search Section */}
        <div ref={searchRef} className="relative flex flex-col w-full lg:flex-1 items-center">
          <div className="flex items-center border border-gray-400 rounded-xl p-2 sm:p-2 md:p-2 gap-2 sm:gap-3 w-full max-w-full lg:max-w-2xl xl:max-w-3xl shadow-sm hover:shadow-md focus-within:shadow-lg focus-within:border-gray-500 transition-all duration-200 bg-white">
            <SearchOutlined className="text-gray-500 text-base sm:text-lg md:text-xl shrink-0" />
            <input
              type="text"
              placeholder="Search for Your Favorite Food"
              className="w-full text-xs sm:text-sm md:text-base lg:text-lg outline-none bg-transparent placeholder:text-gray-400"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                debouncedSearch(e.target.value)
              }}
            />
          </div>

          {/* Autocomplete */}
          {autoCompleteFoodItemsList.length > 0 && (
            <div className="absolute top-full left-0 right-0 flex flex-col gap-1 sm:gap-2 w-full h-28 overflow-y-auto max-w-full lg:max-w-2xl xl:max-w-3xl mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
              {autoCompleteFoodItemsList.map((foodItem, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2.5 sm:px-4 sm:py-3 hover:bg-gray-100 active:bg-gray-200 cursor-pointer transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg border-b border-gray-100 last:border-b-0"
                  onClick={() => {
                    setSearchQuery(foodItem.name)
                    setAutoCompleteFoodItemsList([])
                  }}
                >
                  <SearchOutlined className="text-gray-400 text-xs sm:text-sm shrink-0" />
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 truncate">
                    {foodItem.name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* User + Logout */}
        <div className="flex items-center gap-2 shrink-0 underline cursor-pointer">
          <p className="text-sm font-medium">{user?.fullName}</p>
          <LogoutOutlined onClick={() => setOpen(true)} />
        </div>
      </div>

      {/* Dialog */}
      <DialogBox
        open={open}
        handleCancel={handleCancel}
        handleConfirm={handleConfirm}
        title="Logout"
        message="Are you sure you want to logout?"
      />
    </div>
  )
}

export default LogoAuthSearch