import { createSlice } from "@reduxjs/toolkit";
import {User} from '../../type/type'

type InitialState={
    user:User[]
}

const initialState:InitialState={
    user:[]
}


const userSlice= createSlice({
    name:"user",
    initialState,
    reducers:{
        userProfile:(state, action)=>{

        }
    }
})

export const userAction=userSlice.actions
const userReducer =userSlice.reducer
export default userReducer