import { configureStore } from "@reduxjs/toolkit";
import categories from "./categoriesSlice"
const store = configureStore({
    reducer: { categories },
    devTools: true,
  });
  export default store;