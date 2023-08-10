import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "resData",
  initialState: {
    restaurantList: [],
  },
  reducers: {
    setRestaurantList: (state, action) => {
      state.restaurantList = action.payload;
    },
    filterRestaurant: (state, action) => {
      state.restaurantList = state.restaurantList.filter((restaurant) => {
        return restaurant.info.name
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });
    },
  },
});

export const { setRestaurantList, filterRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;
