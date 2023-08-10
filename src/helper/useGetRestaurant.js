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
          data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        dispatch(setRestaurantList(restaurantList));
      } catch (error) {
        console.log(error);
      }
    }

    getRestaurant();
  }, [dispatch]);

  return null;
};

export default useGetRestaurant;
