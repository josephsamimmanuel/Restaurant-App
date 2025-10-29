import { createSlice } from '@reduxjs/toolkit'

const masalaItemsSlice = createSlice({
    name: 'masalaItems',
    initialState: {
        masalaItems: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        setMasalaItems: (state, action) => {
            state.masalaItems = action.payload
        },
    },
})

export const { setMasalaItems } = masalaItemsSlice.actions
export default masalaItemsSlice.reducer