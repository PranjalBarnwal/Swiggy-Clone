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
      state.filteredRestaurantList = action.payload;
    },
    filterRestaurantByName: (state, action) => {
      const searchText = action.payload.toLowerCase();
      state.filteredRestaurantList = state.restaurantList.filter(
        (restaurant) => {
          return restaurant.info.name.toLowerCase().includes(searchText);
        }
      );
    },
    filterRestaurantByRating: (state, action) => {
      const rating = +action.payload; // + typecasts string to number
      state.filteredRestaurantList = state.restaurantList.filter(
        (restaurant) => {
          return restaurant.info.avgRating >= rating;
        }
      );
    },
    filterRestaurantByVeg: (state) => {
      state.filteredRestaurantList = state.restaurantList.filter(
        (restaurant) => {
          return restaurant.info.veg === true;
        }
      );
    },
  },
});

export const {
  setRestaurantList,
  filterRestaurantByName,
  filterRestaurantByVeg,
  filterRestaurantByRating,
} = restaurantSlice.actions;
export default restaurantSlice.reducer;
