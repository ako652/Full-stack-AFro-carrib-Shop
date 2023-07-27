import { PayloadAction } from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit'
import { Order } from '../../type/type'


type InitialState={
    orderList:Order[]
}

const initialState:InitialState={
    orderList:[]
}

const orderSlice=createSlice({
    name:'order',
    initialState,
    reducers:{
      getOrder:(state,action:PayloadAction<Order[]>)=>{
        state.orderList=action.payload
      }
    }
})


export const orderAction=orderSlice.actions
const orderReducer=orderSlice.reducer

export default orderReducer