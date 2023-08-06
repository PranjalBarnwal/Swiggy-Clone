import React from "react";
import logo from "./../../assets/logo.png";
import {AiOutlineSearch} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {FiLifeBuoy} from "react-icons/fi";
import {BiSolidOffer} from "react-icons/bi";
import {LuShoppingCart} from "react-icons/lu";
const Header = () => {
  return (
    <div className="flex justify-around p-1 items-center list-none shadow text-gray-700 font-medium">
      <div className="w-8 flex justify-around items-center">
        <img src={logo} alt="" />
        <li className="ml-10 border-b-2 border-gray-600 font-bold  hover:text-orange-600 hover:border-orange-600">Home</li>
      </div>
      <div className="flex justify-around p-3 items-center list-none">
      <li className="flex items-center ml-16  hover:text-orange-600"><AiOutlineSearch className="m-2 text-[20px]"/>Search</li>
      <li className="flex items-center ml-16 relative  hover:text-orange-600"><BiSolidOffer className="m-2 text-[20px]"/>Offers<span className="text-[10px] font-extrabold text-orange-400 absolute top-0 left-20">NEW</span> </li>
      <li className="flex items-center ml-16  hover:text-orange-600"><FiLifeBuoy className="m-2 text-[20px]"/>Help</li>
      <li className="flex items-center ml-16  hover:text-orange-600"><AiOutlineUser className="m-2 text-[20px]"/>Username</li>
      <li className="flex items-center ml-16  hover:text-orange-600"><LuShoppingCart className="m-2 text-[20px]"/>Cart</li>
      </div>
    </div>
  );
};

export default Header;
