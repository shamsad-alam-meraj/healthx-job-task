import { createSlice } from "@reduxjs/toolkit";
import { shoppingListItem } from "../../helpers/shoppingCart";
import { favouriteListItem } from "../../helpers/favouriteProduct";
// import { shoppingCart } from "helpers/shoppingCart";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: shoppingListItem() ?? [],
    favourites: favouriteListItem() ?? [],
  },
  reducers: {
    getCartList: (state, action) => {
      state.items = action.payload;
    },
    getFavouriteList: (state, action) => {
      state.favourites = action.payload;
    },
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    addToFavourite: (state, action) => {
      state.favourites.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    removeFromFavourite: (state, action) => {
      state.favourites = state.favourites.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const {
  addToCart,
  addToFavourite,
  getCartList,
  getFavouriteList,
  removeFromCart,
  removeFromFavourite,
} = cartSlice.actions;
export const { actions, reducer } = cartSlice;
export default reducer;
