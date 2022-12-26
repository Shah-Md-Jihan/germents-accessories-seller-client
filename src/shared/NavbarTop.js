import React from "react";
import Logo from "../assets/images/logo/logo.png";
import { FaHeart, FaShoppingCart, FaUserAlt } from "react-icons/fa";

const NavbarTop = () => {
  return (
    <div className="p-4 flex items-center">
      <div className="w-1/4">
        <img src={Logo} className="w-full" alt="logo" />
      </div>

      <div className="w-full">
        <div className="px-10 flex">
          <input
            type="text"
            className="border border-orange-600 py-1 px-2 rounded rounded-r-none focus:outline-none focus:border-red-600"
            style={{ width: "100%" }}
          />
          <button className="btn rounded-l-none hover:bg-red-600 bg-orange-600 border-none">Get started</button>
        </div>
      </div>

      <div className="flex justify-evenly w-2/3">
        <p className="flex m-0 items-center">
          <FaHeart className="mr-4" />
          My Wishlist
        </p>
        <p className="flex m-0 items-center">
          <FaShoppingCart className="mr-4" />
          My Cart
        </p>
        <p className="flex m-0 items-center">
          <FaUserAlt className="mr-4" />
          User Name
        </p>
      </div>
    </div>
  );
};

export default NavbarTop;
