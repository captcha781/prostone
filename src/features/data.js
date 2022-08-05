import { createSlice } from "@reduxjs/toolkit";


export const dataSlice = createSlice({
    name: "data",
    initialState: {
        value: {
            
        },
        headerVal: ""
    }, 
    reducers: {
        initialise : (state, action) => {
            state.value = action.payload
        },
        setHeader : (state, action) => {
            state.headerVal = action.payload
        }
    }
})

export const {initialise, setHeader} = dataSlice.actions

export default dataSlice.reducer