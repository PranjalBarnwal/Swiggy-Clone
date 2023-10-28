import React from "react";
import { MENU_ITEM_IMG } from "../helper/links";

const CartCard = ({ info }) => {
  const dishName = info?.name;
  const dishImg = info?.imageId;
  const amount = Math.ceil(info?.price/100);

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
        <div className="font-semibold text-lg">
        ₹ {amount}
        </div>
      </div>
    </div>
  );
};

export default CartCard;
