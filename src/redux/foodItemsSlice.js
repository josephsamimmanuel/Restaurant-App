import { createSlice } from '@reduxjs/toolkit'

const foodItemsSlice = createSlice({
    name: 'foodItems',
    initialState: {
        foodItems: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        setFoodItems: (state, action) => {
            state.foodItems = action.payload
        },
    },
})

export const { setFoodItems } = foodItemsSlice.actions
export default foodItemsSlice.reducer