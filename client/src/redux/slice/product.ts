import { Product } from './../../type/type';
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState={
products:Product[]
}
const initialState:InitialState ={
    products:[]
}




const productSlice= createSlice({
    name:"product",
    initialState,
    reducers:{
      getProducts:(state, action:PayloadAction<Product[]>)=>{
          state.products=action.payload
        
      }
    }

})

export const ProductAction= productSlice.actions
const productReducer=productSlice.reducer
export default productReducer