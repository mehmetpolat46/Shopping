import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/productSlice";

export default configureStore({
  reducer: {
    cart: cartSlice,
  },
});
