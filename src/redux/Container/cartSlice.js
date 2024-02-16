import { createSlice } from "@reduxjs/toolkit";
import { shoppingListItem } from "../../helpers/shoppingCart";
import { favouriteListItem } from "../../helpers/favouriteProduct";
import { tweetListItem } from "../../helpers/tweetProduct";
// import { shoppingCart } from "helpers/shoppingCart";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: shoppingListItem() ?? [],
    favourites: favouriteListItem() ?? [],
    tweets: tweetListItem() ?? [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    addToFavourite: (state, action) => {
      state.favourites.push(action.payload);
    },
    addToTweet: (state, action) => {
      state.tweets.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    removeFromFavourite: (state, action) => {
      state.favourites = state.favourites.filter(
        (item) => item.id !== action.payload.id
      );
    },
    removeFromTweet: (state, action) => {
      state.tweets = state.tweets.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const {
  addToCart,
  addToFavourite,
  addToTweet,
  removeFromCart,
  removeFromFavourite,
  removeFromTweet,
} = cartSlice.actions;
export const { actions, reducer } = cartSlice;
export default reducer;
