import { axiosInstance } from './index'

// Add Masala Item
export const addMasalaItem = async (masalaItemData) => {
    try {
        const response = await axiosInstance.post('/masalaItems/add', masalaItemData)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

// Get All Masala Items
export const getAllMasalaItems = async () => {
    try {
        const response = await axiosInstance.get('/masalaItems/all')
        return response.data
    } catch (error) {
        return error.response.data
    }
}

// Get Masala Item by ID
export const getMasalaItemById = async (id) => {
    try {
        const response = await axiosInstance.get(`/masalaItems/${id}`)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

// Update Masala Item
export const updateMasalaItem = async (id, masalaItemData) => {
    try {
        const response = await axiosInstance.patch(`/masalaItems/${id}`, masalaItemData)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

// Delete Masala Item
export const deleteMasalaItem = async (id) => {
    try {
        const response = await axiosInstance.delete(`/masalaItems/${id}`)
        return response.data
    } catch (error) {
        return error.response.data
    }
}