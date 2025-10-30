import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import foodItemsReducer from './foodItemsSlice'
import masalaItemsReducer from './masalaItemsSlice'
import loaderReducer from './loaderSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        foodItems: foodItemsReducer,
        masalaItems: masalaItemsReducer,
        loader: loaderReducer,
    },
})