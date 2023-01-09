import { configureStore } from "@reduxjs/toolkit";
import titleReducer from "./reducer"

export default configureStore({
    reducer:{
        titleReducer
    }
})