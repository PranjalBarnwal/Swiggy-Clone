import React, { useEffect, useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import useGetRestaurant from "./../helper/useGetRestaurant";
import Card from "./Card";
import { Link } from "react-router-dom";
import {
  filterRestaurantByRating,
  filterRestaurantByVegAndRating,
  setRestaurantList,
} from "../helper/restaurantSlice";

const Body = () => {
  const [isFilterByRating4, setIsFilterByRating4] = useState(false);
  const [isFilterByVeg, setIsFilterByVeg] = useState(false);
  const dispatch = useDispatch();
  useGetRestaurant();

  useEffect(() => {
    dispatch(setRestaurantList(mainRestaurantList));

    if (isFilterByRating4 == true || isFilterByVeg == true)
      dispatch(
        filterRestaurantByVegAndRating({ isFilterByVeg, isFilterByRating4 })
      );
  }, [isFilterByVeg, isFilterByRating4]);

  const mainRestaurantList = useSelector(
    (store) => store.restaurant.restaurantList
  );

  const restaurantList = useSelector(
    (store) => store.restaurant.filteredRestaurantList
  );


  const filterByVeg = () => {
    setIsFilterByVeg((isFilterByVeg) => !isFilterByVeg);
  };

  const filterByRating4 = () => {
    setIsFilterByRating4((isFilterByRating4) => !isFilterByRating4);
  };

  return (
    <div className="px-48">
      <h1 className="font-bold text-2xl py-5">
        Restaurant with online food delivery at your location
      </h1>

      <div className="flex scroll-auto mb-5 font-normal  text-sm ">
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
            isFilterByRating4 ? "bg-orange-300" : ""
          }`}
          onClick={filterByRating4}
        >
          Ratings 4.0+
        </div>
        <div
          className={`border-gray-300 border rounded-full px-2 py-1 ml-4 cursor-pointer ${
            isFilterByVeg ? "bg-orange-300" : ""
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
              to={"/restaurant/" + res.info.id}
              key={res.info.id}
              className="w-60"
            >
              <Card {...res} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
