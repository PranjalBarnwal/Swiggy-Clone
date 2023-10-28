import React,{useState} from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FiLifeBuoy } from "react-icons/fi";
import { BiSolidOffer } from "react-icons/bi";
import { LuShoppingCart } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { filterRestaurantByName } from "../helper/restaurantSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  // const [searchText, setSearchText] = useState("");
  const cartItems=useSelector(store=>store.cart.items);
  console.log(cartItems);
  const handleSearch = (e) => {
    // const text = e.target.value;
    // setSearchText(text);
    dispatch(filterRestaurantByName(e.target.value));
  };

 
  return (
    <div className="flex justify-around p-1 items-center list-none shadow text-gray-700 font-medium">
      <div className="w-8 flex justify-around items-center">
        <img src={logo} alt="" />
        <Link
          to="/"
          className="ml-10 border-b-2 border-gray-600 font-bold  hover:text-orange-600 hover:border-orange-600"
        >
          Home
        </Link>
      </div>

      <div className="flex justify-around p-3 items-center list-none">
        <div
          to="/search"
          className="flex items-center ml-16  hover:text-orange-600"
        >
          <AiOutlineSearch className="m-2 text-[20px]" />
          <input
            className="p-2 border-gray-200 border-2 focus:outline-gray-200 "
            type="text"
            placeholder="search restaurants"
            // value={searchText}
            onChange={handleSearch}
          />
        </div>
        <li className="flex items-center ml-16 relative  hover:text-orange-600">
          <BiSolidOffer className="m-2 text-[20px]" />
          Offers
          <span className="text-[10px] font-extrabold text-orange-400 absolute top-0 left-20">
            NEW
          </span>{" "}
        </li>
        <li className="flex items-center ml-16  hover:text-orange-600">
          <FiLifeBuoy className="m-2 text-[20px]" />
          Help
        </li>
        <li className="flex items-center ml-16  hover:text-orange-600">
          <AiOutlineUser className="m-2 text-[20px]" />
          Username
        </li>
        <Link
          to="/cart"
          className="flex items-center ml-16  hover:text-orange-600"
        >
          <LuShoppingCart className="m-2 text-[20px]" />
          Cart{" "+cartItems.length}
        </Link>
      </div>
    </div>
  );
};

export default Header;
