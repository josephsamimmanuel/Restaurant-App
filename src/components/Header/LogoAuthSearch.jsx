import React from 'react'
import { SearchOutlined, EnvironmentOutlined, LogoutOutlined } from '@ant-design/icons'
import logo from '../../../public/logo.png'
import { useSelector } from 'react-redux'
import { logoutUser } from '../../apiCalls/users'
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/userSlice'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
function LogoAuthSearch() {
    const user = useSelector((state) => state?.user?.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = async () => {
        try {
        const response = await logoutUser()
            if (response) {
                dispatch(setUser(null))
                sessionStorage.removeItem('token')
                toast.success(response.message)
                navigate('/login')
            } else {
                toast.error(response.message)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-4'>
            {/* Logo - Hidden on mobile, visible on tablet and up */}
            <div className='hidden sm:flex items-center shrink-0'>
                <img
                    src={logo}
                    alt='logo'
                    className='w-72 h-8 sm:w-72 sm:h-20'
                />
            </div>

            {/* Search Inputs - Full width on mobile, side by side on tablet+ */}
            <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full lg:w-auto lg:flex-1 lg:max-w-2xl lg:mx-4'>
                <div className='flex items-center border border-gray-300 rounded-md p-2 gap-2 w-full sm:w-auto sm:flex-1'>
                    <EnvironmentOutlined className='text-gray-500' />
                    <input
                        type='text'
                        placeholder='Search for location'
                        className='w-full sm:w-auto sm:min-w-[150px] rounded-md outline-none text-sm'
                    />
                </div>
                <div className='flex items-center border border-gray-300 rounded-md p-2 gap-2 w-full sm:w-auto sm:flex-1'>
                    <SearchOutlined className='text-gray-500' />
                    <input
                        type='text'
                        placeholder='Search for Restaurant'
                        className='w-full sm:w-auto sm:min-w-[150px] rounded-md outline-none text-sm'
                    />
                </div>
            </div>

            {/* Login/Signup Buttons */}
            <div className='flex items-center gap-2 shrink-0 underline cursor-pointer'>
                <p className='text-sm font-medium'>{user?.fullName}</p>
                <LogoutOutlined onClick={handleLogout} />
                {/* <div className='flex items-center'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Cart</button>
        </div>
        <div className='flex items-center'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>User Profile</button>
        </div> */}
            </div>
        </div>
    )
}

export default LogoAuthSearch
