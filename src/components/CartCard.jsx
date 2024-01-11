import React, { cloneElement, useState } from "react";
import { MENU_ITEM_IMG } from "../helper/links";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../helper/cartSlice";

const CartCard = ({ info }) => {
  const dispatch = useDispatch();

 
  const dishName = info?.name;
  const dishImg = info?.imageId;
  const amount = Math.ceil(info?.price / 100);
  const count2=info?.count;
 
 
  const [count, setCount] = useState(count2);
  // console.log(itemCount);
  return (
    <div className="flex-col p-5">
      <div className="rounded-xl w-64 h-44 overflow-hidden relative">
        <img
          className="w-full h-full object-cover"
          src={MENU_ITEM_IMG + dishImg}
          alt=""
        />
      </div>
      <div className="px-4 h-30">
        <div className="font-semibold text-lg overflow-hidden whitespace-nowrap overflow-ellipsis">
          <div className="w-40 truncate">{dishName}</div>
        </div>
        <div className="font-semibold text-lg">₹ {amount}</div>
        <div className="counter flex space-x-7">
          <button
            onClick={() => {
              setCount((count)=>Number(count) + 1);
              dispatch(addItem(info));
            }}
            className="border px-3 py-1"
            >
            +
          </button>

          <div>{count2}</div>
          
          
          <button
            onClick={() => {
              console.log(count+"this is count");
              dispatch(removeItem(info));
              setCount((count)=>(count - 1));
              
            }}
            className="border px-3 py-1"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
