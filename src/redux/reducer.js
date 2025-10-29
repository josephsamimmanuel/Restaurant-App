import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import foodItemsReducer from './foodItemsSlice'
import masalaItemsReducer from './masalaItemsSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        foodItems: foodItemsReducer,
        masalaItems: masalaItemsReducer,
    },
})