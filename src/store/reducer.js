import { createSlice } from "@reduxjs/toolkit";


export const titleSlice=createSlice({
    name:'titleReducer',
    initialState:{
        final:0
    },
    reducers:{
        getAdd(state,action){
            state.final = action.payload
        }
    }
})
export const {getAdd} = titleSlice.actions


export default titleSlice.reducer