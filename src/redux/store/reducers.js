import { combineReducers } from "redux";
import headerSlice from "../Container/headerSlice";

const appReducer = combineReducers({
  header: headerSlice,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
