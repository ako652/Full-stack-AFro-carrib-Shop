import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Cart, Product } from "../../type/type";

type InitialState = {
  cart: Cart[];
  totalsum:number
};

const initialState: InitialState = {
  cart: [],
  totalsum:0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action: PayloadAction<Product>) => {
      const IsExisting = state.cart.find(
        (item) => item.title === action.payload.title
      );
      if (!IsExisting) {
        const newItem = { ...action.payload, quantity: 1 };
        state.cart.push(newItem);
      } else {
        IsExisting.quantity = IsExisting.quantity + 1;
      }
      const totalSum = state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      state.totalsum = totalSum;
    },
   
    decreaseQty: (state, action: PayloadAction<Cart>) => {
      const IsExisting = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (IsExisting && IsExisting.quantity > 1) {
        IsExisting.quantity = IsExisting.quantity - 1;
      } else {
        state.cart = state.cart.filter(
          (item) => item._id !== action.payload._id
        );
      }
      const totalSum = state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      state.totalsum = totalSum;
    },
    deleteCartItem: (state, action: PayloadAction<Cart>) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload._id);
      const totalSum = state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      state.totalsum = totalSum;
    },
   
  },
});

export const cartAction = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
