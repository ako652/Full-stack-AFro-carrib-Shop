import { createSlice } from "@reduxjs/toolkit";
import {User} from '../../type/type'

type InitialState={
    user:User|null
}

const initialState:InitialState={
    user:null
}


const userSlice= createSlice({
    name:"user",
    initialState,
    reducers:{
        userProfile:(state, action)=>{
           state.user=action.payload
        }
    }
})

export const userAction=userSlice.actions
const userReducer =userSlice.reducer
export default userReducer