import { createSlice } from "@reduxjs/toolkit";


export const dataSlice = createSlice({
    name: "data",
    initialState: {
        value: {

        }
    }, 
    reducers: {
        initialise : (state, action) => {
            state.value = action.payload
        }
    }
})

export const {initialise} = dataSlice.actions

export default dataSlice.reducer