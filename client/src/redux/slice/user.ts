import { createSlice } from "@reduxjs/toolkit";
import {User} from '../../type/type'
import { PayloadAction } from "@reduxjs/toolkit";

type InitialState={
    user:User|null,
    token:string|null
}
const storedUser = localStorage.getItem('userData');
const parsedUser: User | null = storedUser ? JSON.parse(storedUser) : null;


const initialState: InitialState = {
  user: parsedUser,
  token: localStorage.getItem("userToken"),
};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userProfile: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("userToken", action.payload.token);
       localStorage.setItem("userData", JSON.stringify(action.payload.user));
       
    },
    userInformation:(state, action:PayloadAction<User>)=>{
      state.user=action.payload
    }
  },
});

export const userAction=userSlice.actions
const userReducer =userSlice.reducer
export default userReducer