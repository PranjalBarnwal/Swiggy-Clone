import React, { useEffect, useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import useGetRestaurant from "./../helper/useGetRestaurant";
import Card from "./Card";
import { Link } from "react-router-dom";
import {
  filterRestaurantByRating,
  filterRestaurantByVeg,
  setRestaurantList,
} from "../helper/restaurantSlice";

const Body = () => {
  const mainRestaurantList = useSelector(
    (store) => store.restaurant.restaurantList
  );
  const restaurantList = useSelector(
    (store) => store.restaurant.filteredRestaurantList
  );
  const dispatch = useDispatch();
  useGetRestaurant();
  const [isFilterByRating4, setIsFilterByRating4] = useState(false);
  const [isFilterByVeg, setIsFilterByVeg] = useState(false);

  const filterByVeg = () => {
    setIsFilterByVeg(!isFilterByVeg);
    if (!isFilterByVeg) {
      dispatch(filterRestaurantByVeg()); // Apply the filter
    } else {
      dispatch(setRestaurantList(mainRestaurantList)); // Reset the filter
    }
  };

  const filterByRating4 = () => {
    setIsFilterByRating4(!isFilterByRating4); // Toggle the state
    if (!isFilterByRating4) {
      dispatch(filterRestaurantByRating(4.0)); // Apply the filter
    } else {
      dispatch(filterRestaurantByRating(0)); // Reset the filter
    }
  };

  return (
    <div className="px-48">
      <h1 className="font-bold text-2xl py-5">
        Restaurant with online food delivery at your location
      </h1>

      <div className="flex scroll-auto mb-5 font-normal  text-sm text-gray-500">
        <div className="border-gray-300 border rounded-full px-2 py-1 flex items-center gap-1 cursor-pointer">
          Filter
          <BiFilterAlt />
        </div>
        <div className="border-gray-300 border rounded-full px-2 py-1 ml-4 flex items-center gap-1 cursor-pointer">
          Sort By
          <IoIosArrowDown />
        </div>
        <div
          className={`border-gray-300 border rounded-full px-2 py-1 ml-4 cursor-pointer ${
            isFilterByRating4 ? "bg-orange-300 text-gray-800" : ""
          }`}
          onClick={filterByRating4}
        >
          Ratings 4.0+
        </div>
        <div
          className={`border-gray-300 border rounded-full px-2 py-1 ml-4 cursor-pointer ${
            isFilterByVeg ? "bg-orange-300 text-gray-800" : ""
          }`}
          onClick={filterByVeg}
        >
          Pure Veg
        </div>
        <div className="border-gray-300 border rounded-full px-2 py-1 ml-4 cursor-pointer">
          Rs300-Rs600
        </div>
        <div className="border-gray-300 border rounded-full px-2 py-1 ml-4 cursor-pointer">
          Less than Rs300
        </div>
      </div>

      <div className="flex flex-wrap justify-start gap-12">
        {restaurantList &&
          restaurantList.map((res) => (
            <Link
              className="w-60 hover:scale-95 transition-all"
              to={"/restaurant/" + res.info.id}
              key={res.info.id}
            >
              <Card {...res} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
