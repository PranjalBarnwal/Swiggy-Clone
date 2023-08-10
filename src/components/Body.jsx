import React, { useEffect } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import useGetRestaurant from "../helper/useGetRestaurant";
import Card from "./Card";

const Body = () => {
   const restaurant = useGetRestaurant();

  return (
    <div className="px-48">
      <h1 className="font-bold text-2xl py-5">
        Restaurant with online food delivery at your location
      </h1>

      <div className="flex">{/* Filter and sorting elements */}</div>

      <div className="flex flex-wrap justify-start gap-12">
        {restaurant &&  
          restaurant.map((res, index) => (
            <div key={res.info.id} className="w-60">
              <Card  {...res} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Body;
