import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: "data",
    initialState: {
        value: {},
        headerVal: "",
        authStatus: false,
        user: {}
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

        },
        setUser: (state, action) =>{
            state.user = action.payload

        }
    }
})

export const {initialise, setHeader, setAuthStatus, setUser} = dataSlice.actions

export default dataSlice.reducer