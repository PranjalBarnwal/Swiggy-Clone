import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "resData",
  initialState: {
    restaurantList: [],
    filteredRestaurantList: [], 
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
      const rating = +action.payload; 
      state.filteredRestaurantList = state.restaurantList.filter(
        (restaurant) => {
          return restaurant.info.avgRating >= rating;
        }
      );
    },
    // filterRestaurantByVeg: (state) => {
    //   state.filteredRestaurantList = state.restaurantList.filter(
    //     (restaurant) => {
    //       return restaurant.info.veg === true;
    //     }
    //   );
    // },
    filterRestaurantByVegAndRating: (state, action) => {
      let rating = action.payload.isFilterByRating4 === true ? 4.0 : 0;

      console.log(action.payload, rating);
      state.filteredRestaurantList = state.restaurantList.filter(
        (restaurant) => {
          if(restaurant.info.veg===true) return restaurant.info.avgRating >= rating ;
          else if(restaurant.info.veg===undefined) return !(action.payload.isFilterByVeg) && restaurant.info.avgRating >= rating;
          


          //  return restaurant.info.veg === action.payload.isFilterByVeg && restaurant.info.avgRating >= rating;
        }
      );
    }
  },
});

export const {
  setRestaurantList,
  filterRestaurantByName,
  filterRestaurantByVegAndRating,
  filterRestaurantByRating,
} = restaurantSlice.actions;
export default restaurantSlice.reducer;
