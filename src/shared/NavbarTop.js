import React from "react";
import Logo from "../assets/images/logo/logo.png";
import { FaEnvelope, FaHeart, FaKey, FaPhoneVolume, FaSearch, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarTop = () => {
  return (
    <>
      <p className="flex items-center justify-center pt-5 lg:hidden">
        <FaPhoneVolume />
        <span className="mr-6">+880 889965215</span>
        <FaEnvelope />
        <span className="ml-2">gtaseller@gmail.com</span>
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-12 py-8">
        <div className="flex items-center">
          <div className="w-1/4">
            <img src={Logo} className="" alt="logo" />
            <p className="flex justify-center font-bold text-xl text-orange-500">GTA Seller</p>
          </div>
          <div className="w-full">
            <div className="flex pl-5">
              <input
                type="text"
                className="border border-orange-600 py-1 px-2 rounded rounded-r-none focus:outline-none focus:border-red-600"
                style={{ width: "100%" }}
                placeholder="Search your product here..."
              />
              <button className="btn rounded-l-none hover:bg-red-600 bg-orange-600 border-none">Search</button>
            </div>
          </div>
        </div>

        <div className="flex justify-evenly lg:ml-auto pt-8 lg:pt-0">
          <p className="flex lg:mr-8 items-center">
            <FaHeart className="mr-2" />
            My Wishlist
          </p>
          <p className="flex lg:mr-8 items-center">
            <FaShoppingCart className="mr-2" />
            My Cart
          </p>
          {/* <p className="flex lg:mr-20 items-center">
            <FaUserAlt className="mr-2" />
            User Name
          </p> */}
          <p className="flex lg:mr-20 items-center">
            <FaKey className="mr-2" />
            <Link to={"/login"}>Signup / Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default NavbarTop;
