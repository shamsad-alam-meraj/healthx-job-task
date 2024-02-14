import { combineReducers } from "redux";
import headerSlice from "../Container/headerSlice";
import cartSlice from "../Container/cartSlice";

const appReducer = combineReducers({
  header: headerSlice,
  cart: cartSlice,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
