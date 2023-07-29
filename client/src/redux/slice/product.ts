import { Product } from './../../type/type';
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState={
products:Product[],
productDetail:Product|null,
IsLoading:boolean

}
const initialState:InitialState ={
    products:[],
    productDetail:null,
    IsLoading:false
    

}




const productSlice= createSlice({
    name:"product",
    initialState,
    reducers:{
      getProducts:(state, action:PayloadAction<Product[]>)=>{
          state.products=action.payload
          state.IsLoading=true
        
      },
      getProductDetail:(state, action:PayloadAction<Product>)=>{
         state.productDetail=action.payload
      },
      
    }

})

export const ProductAction= productSlice.actions
const productReducer=productSlice.reducer
export default productReducer