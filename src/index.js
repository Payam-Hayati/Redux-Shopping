import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Import Store Requirements
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// Import Reducer
import productsSlice from "./reducers/Products";

// Create Store
const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
