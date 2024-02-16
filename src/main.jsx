import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import configureAppStore from "./redux/store/store.js";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
const { store } = configureAppStore();
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer position="top-center" autoClose={2000} transition:Bounce />
      <App />
    </Provider>
  </React.StrictMode>
);
