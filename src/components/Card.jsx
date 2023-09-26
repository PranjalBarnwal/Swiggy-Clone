import React from "react";
import { RESTAURANT_IMG } from "../helper/links";
import { MdStars } from "react-icons/md";

const Card = ({ info }) => {
  const resName = info?.name;
  const resImg = info?.cloudinaryImageId;
  const resRating = info?.avgRating;
  const resArea = info?.areaName;
  const resCuisines = info?.cuisines;
  const cuisineItems =
    resCuisines && resCuisines.map((cuisine) => cuisine).join(",");
  const bannerText =
    info?.aggregatedDiscountInfoV3?.header +
    " " +
    info?.aggregatedDiscountInfoV3?.subHeader;

  return (
    <>
      {info && (
        <div>
          <div className="rounded-xl w-64 h-44 overflow-hidden relative">
            <div className="relative">
              <img
                className="w-full h-full object-cover"
                src={RESTAURANT_IMG + resImg}
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            </div>
            {info?.aggregatedDiscountInfoV3?.header&&info?.aggregatedDiscountInfoV3?.subHeader&& (
              <div className="absolute bottom-1 left-3 font-extrabold text-xl text-white">
                {bannerText}
              </div>
            )}
          </div>
          <div className="px-4 h-30">
            <div className="font-semibold text-lg  overflow-hidden whitespace-nowrap overflow-ellipsis">
              {resName}
            </div>
            <div className="flex items-center gap-2">
              <MdStars className="text-green-700 text-xl"/>
              {resRating}
            </div>
            <div className="font-light">{resArea}</div>
            <div className="font-light  overflow-hidden whitespace-nowrap overflow-ellipsis">
              {cuisineItems}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
