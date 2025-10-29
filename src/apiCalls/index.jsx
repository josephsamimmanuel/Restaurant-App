import axios from 'axios'
import { API_URL } from '../utils/constants'

export const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
    },
})

axiosInstance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (error) => {
    return Promise.reject(error)
})