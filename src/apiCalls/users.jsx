import { axiosInstance } from './index'

// Register User
export const registerUser = async (userData) => {
    try {
        const response = await axiosInstance.post('/users/register', userData)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

// Login User
export const loginUser = async (userData) => {
    try {
        const response = await axiosInstance.post('/users/login', userData)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

// Get User Details
export const getUserDetails = async () => {
    try {
        const response = await axiosInstance.get('/users/me')
        return response.data
    } catch (error) {
        return error.response.data
    }
}