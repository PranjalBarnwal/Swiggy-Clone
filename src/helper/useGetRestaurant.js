//need to think on this code
//why using  useEffect when we are not using useGetRestaurant as a hook but a function to be called which does not retuns anything and just sets the value in the store
//why using  dispatch as dependency array
//why returning null ? is it compulsory?

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRestaurantList } from "./restaurantSlice";
import { FETCH_RESTAURANT } from "./links";

const useGetRestaurant = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getRestaurant() {
      try {
        const response = await fetch(FETCH_RESTAURANT);
        const data = await response.json();
        const restaurantList =
          data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants ||
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants ||
          data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants ||
          data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        dispatch(setRestaurantList(restaurantList));
        // console.log(restaurantList);
      } catch (error) {
        console.log(error);
      }
    }

    getRestaurant();
  }, [dispatch]); //why using dispatch here??

  return null;
};

export default useGetRestaurant;
