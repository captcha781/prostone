import { createSlice } from "@reduxjs/toolkit";


export const dataSlice = createSlice({
    name: "data",
    initialState: {
        value: {},
        headerVal: "",
        authStatus: {
            auth: false
        }
    }, 
    reducers: {
        initialise : (state, action) => {
            state.value = action.payload
        },
        setHeader : (state, action) => {
            state.headerVal = action.payload
        },
        setAuthStatus: (state, action) => {
            state.authStatus = action.payload
        }
    }
})

export const {initialise, setHeader, setAuthStatus} = dataSlice.actions

export default dataSlice.reducer