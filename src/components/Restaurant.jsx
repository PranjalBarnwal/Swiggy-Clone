import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdStars } from "react-icons/md";
import { BiSolidTimeFive } from "react-icons/bi";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { ImLeaf } from "react-icons/im";
import { BiFoodTag } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { MENU_ITEM_IMG } from "../helper/links";
import { addItem } from "../helper/cartSlice";
import toast from "react-hot-toast";

import useGetResData from "../helper/useGetResData";
import { useDispatch } from "react-redux";

const Restaurant = () => {
  const [data, setData] = useState({});
  const [menuTitle, setMenuTitle] = useState("Recommended");
  const [menu, setMenu] = useState([]);
  const { resid } = useParams();
  const resData = useGetResData(resid);

  useEffect(() => {
    setData(resData?.data?.cards[0].card.card.info);
    setMenuTitle(
      resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.title
    );
    setMenu(
      resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards
    );
    // console.log(resData?.data?.cards[0].card.card.info);
  }, [resData]);
  const distance = data?.sla?.lastMileTravelString;
  const deliveryTime = data?.sla?.deliveryTime;
  const costForTwo = data?.costForTwoMessage;
  const dispatch=useDispatch();
  const handleAddItem=(item)=>{
dispatch(addItem(item));
toast.success("Added to Cart");

  }

  // console.log(menu[0]?.card?.info?.name);
  // console.log(deliveryTime);
  return (
    <div className="mx-[21rem]">
      {data && (
        <>
          <section className="resinfo mt-10 pb-3 flex justify-between border-b border-gray-300 border-dashed">
            <div className="left ">
              <p className="text-xl font-bold text-gray-700">{data?.name}</p>
              <p className="text-xs mt-2 text-gray-500">
                {data?.cuisines?.join(",")}
              </p>
              <p className="text-sm text-gray-500">
                {data?.locality} {distance}
              </p>
            </div>
            <div className="flex items-center">
              <div className="p-1 right flex flex-col items-center justify-center border-gray-200  border-[1px]">
                <p className=" p-1 flex justify-center items-center text-sm font-bold text-green-600">
                  <MdStars className="text-green-600 text-xl" />
                  {data?.avgRating}{" "}
                </p>
                <p className="text-gray-500 flex items-center textcol justify-center text-xs font-semibold border-t-2 border-dashed">
                  {data?.totalRatingsString}
                </p>
              </div>
            </div>
          </section>
          <section className="middle">
            <div className="flex items-center pt-3 mb-5">
              <p className="flex text-l items-center font-bold text-gray-800 p-2">
                <BiSolidTimeFive className="text-2xl mr-2" />
                30 MINS
              </p>
              <p className="flex text-l items-center font-bold text-gray-800 p-2">
                <HiOutlineCurrencyRupee className="text-2xl mr-2" />
                {costForTwo}
              </p>
            </div>
          </section>
          <section className="menu">
            <p className="flex items-center text-gray-500 text-sm font-semibold pb-4 border-b-[1px]">
              <ImLeaf className="ml-2 mr-2 text-lg text-green-600" />
              Pure Veg
            </p>
            <p className="flex items-center text-gray-700 text-lg font-bold pt-4 pb-5 ">
              {menuTitle} ({menu.length})
            </p>
          </section>

          {/* // */}
         
          {menu.map((item, id) => {
          
            return (
              <div
                className="card flex justify-between pb-10 mt-5 mb-2 border-b-[1px] border-gray-500"
                key={id}
              >
                <section className="left">
                  <div className="flex items-center">
                    <BiFoodTag
                      className={
                        item?.card?.info?.isVeg
                          ? "text-green-400 text-xl"
                          : "text-red-400 text-xl"
                      }
                    />

                    {item?.card?.info?.ribbon?.text == "Bestseller" && (
                      <span className="flex items-center text-yellow-600 font-semibold text-sm">
                        <AiFillStar />
                        Bestseller
                      </span>
                    )}
                  </div>
                  <div className="left ml-[2px]">
                    <div>{item?.card?.info?.name}</div>
                    <div className="font-thin ">
                      ₹{Number(item?.card?.info?.price) / 100}
                    </div>
                    <div className="mt-2 font-thin text-gray-700 text-sm">
                      {item?.card?.info?.description}
                    </div>
                  </div>
                </section>
                <section className="right relative flex flex-col items-center">
                  <div className="w-[7vw] h-[6vw] overflow-hidden rounded-md ">
                    <img
                      className="w-full h-full object-cover "
                      src={MENU_ITEM_IMG + item?.card?.info?.imageId}
                      alt=""
                    />
                  </div>
                  <button onClick={()=>{
                    const { id, name, price, imageId } = item?.card?.info;
                    handleAddItem({id,name,price,imageId})}} className="absolute bottom-[-10px] flex items-center justify-center w-[5vw] text-center border-2 bg-white border-gray-300 rounded text-sm p-1 text-green-500 font-bold">
                    Add
                  </button>
                </section>
              </div>
            );
          })}
          {/* //
          // */}
        </>
      )}
      <footer></footer>
    </div>
  );
};

export default Restaurant;
