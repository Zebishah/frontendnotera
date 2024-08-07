// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./src/Redux/RootReducer.jsx";

const Store = configureStore({
  reducer: rootReducer,
});

export default Store;
