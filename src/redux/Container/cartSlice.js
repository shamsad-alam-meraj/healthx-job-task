import { createSlice } from "@reduxjs/toolkit";
import { shoppingListItem } from "../../helpers/shoppingCart";
// import { shoppingCart } from "helpers/shoppingCart";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: shoppingListItem() ?? [],
  },
  reducers: {
    getCartList: (state, action) => {
      state.items = action.payload;
    },
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, getCartList, removeFromCart } = cartSlice.actions;
export const { actions, reducer } = cartSlice;
export default reducer;
