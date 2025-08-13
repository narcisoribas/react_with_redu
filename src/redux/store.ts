import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "../feactures/products/productSlice";
import {categorySlice } from "./../feactures/category/categorySlice"

export const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        categories: categorySlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, 
        }),
});



export type RootState = ReturnType <typeof store . getState>;
export type AppDispatch = typeof store.dispatch ;
