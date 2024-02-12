import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import rootReducer from "./reducers";

export default function configureAppStore(preloadedState = {}) {
  const store = configureStore({
    reducer: rootReducer,
    // middleware: [thunk],
    preloadedState,
  });

  return { store };
}
