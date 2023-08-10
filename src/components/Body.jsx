import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useGetRestaurant from "./../helper/useGetRestaurant";
import Card from "./Card";

const Body = () => {
  // const dispatch = useDispatch();
  useGetRestaurant(); // Fetch and set the restaurant data

  const restaurantList = useSelector(
    (store) => store.restaurant.filteredRestaurantList
  );

  return (
    <div className="px-48">
      <h1 className="font-bold text-2xl py-5">
        Restaurant with online food delivery at your location
      </h1>

      <div className="flex">{/* Filter and sorting elements */}</div>

      <div className="flex flex-wrap justify-start gap-12">
        {restaurantList &&
          restaurantList.map((res) => (
            <div key={res.info.id} className="w-60">
              <Card {...res} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Body;
