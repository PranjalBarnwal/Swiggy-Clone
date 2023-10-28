import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./restaurantSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
    cart:cartSlice
  },
});

export default store;
