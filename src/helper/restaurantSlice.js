import { createSlice } from "@reduxjs/toolkit";
import useGetRestaurant from "./useGetRestaurant";

const resList = useGetRestaurant();


const restaurantSlice = createSlice({
  name: "resData",
  initialState: {
    restaurantList: resList,
  },
  reducers: {
    filterRestaurant: (state, action) => {
      state.restaurantList = resList.filter((restaurant) => {
        return restaurant.info.name
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });
    },
  },
});

export const {filterRestaurant}=restaurantSlice.actions;
export default restaurantSlice.reducer;
