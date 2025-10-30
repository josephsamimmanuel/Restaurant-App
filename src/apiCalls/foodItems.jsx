import { axiosInstance } from './index'

// Add Food Item
export const addFoodItem = async (foodItemData) => {
    try {
        const response = await axiosInstance.post('/foodItems/add', foodItemData)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

// Get All Food Items
export const getAllFoodItems = async () => {
    try {
        const response = await axiosInstance.get('/foodItems/all')
        return response.data
    } catch (error) {
        return error.response.data
    }
}

// Get Food Item by ID
export const getFoodItemById = async (id) => {
    try {
        const response = await axiosInstance.get(`/foodItems/${id}`)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

// Update Food Item
export const updateFoodItem = async (id, foodItemData) => {
    try {
        const response = await axiosInstance.patch(`/foodItems/${id}`, foodItemData)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

// Delete Food Item
export const deleteFoodItem = async (id) => {
    try {
        const response = await axiosInstance.delete(`/foodItems/${id}`)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

// Auto Complete Food Items
export const autoCompleteFoodItems = async (query) => {
    try {
        const response = await axiosInstance.get(`/foodItems/auto-complete?query=${query}`)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

// Search Food Items
export const searchFoodItems = async (query) => {
    try {
        const response = await axiosInstance.get(`/foodItems/search?query=${query}`)
        return response.data
    } catch (error) {
        return error.response.data
    }
}