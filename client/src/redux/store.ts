
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/product";
import userReducer from "./slice/user";
import cartReducer from "./slice/cart";
import orderReducer from "./slice/order";





const store =configureStore({
    reducer:{
        product:productReducer,
        user:userReducer,
        cart:cartReducer,
        order:orderReducer
    }
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



export default store