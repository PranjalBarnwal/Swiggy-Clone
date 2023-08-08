import { useEffect, useState } from "react";
import { FETCH_RESTAURANT } from "./links";

const useGetRestaurant = () => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    try {
      const response = await fetch(FETCH_RESTAURANT);
      const data = await response.json();
      const restaurantList =
        data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
         
      setRestaurant(restaurantList);
    } catch (error) {
      console.log(error);
    }
  }

  return restaurant;
};

export default useGetRestaurant;
