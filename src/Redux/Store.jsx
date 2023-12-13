import { configureStore } from "@reduxjs/toolkit";
import { BasketReducer } from "./Reducer";

export const store = configureStore({
    reducer:{
        BasketReducer
    }
})