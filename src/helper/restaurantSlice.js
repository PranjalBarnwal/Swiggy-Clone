import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "resData",
  initialState: {
    restaurantList: [],
    filteredRestaurantList: [], // New state for filtered list
  },
  reducers: {
    setRestaurantList: (state, action) => {
      state.restaurantList = action.payload;
      state.filteredRestaurantList=action.payload;
    },
    filterRestaurantByName: (state, action) => {
      const searchText = action.payload.toLowerCase();
      state.filteredRestaurantList = state.restaurantList.filter(
        (restaurant) => {
          return restaurant.info.name.toLowerCase().includes(searchText);
        }
      );
    },
  },
});

export const { setRestaurantList, filterRestaurantByName } = restaurantSlice.actions;
export default restaurantSlice.reducer;
