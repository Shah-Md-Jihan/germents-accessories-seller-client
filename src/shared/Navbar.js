import React, { useContext } from "react";
import { FaEnvelope, FaPhoneVolume } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Dashboard from "./../Pages/Dashboard/Dashboard";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const menus = (
    <React.Fragment>
      <li>
        <Link to={"/"} className="font-bold">
          Home
        </Link>
      </li>
      <li>
        <a>Offers</a>
      </li>
      <li>
        <a>FAQ</a>
      </li>
      <li>
        <a>About Us</a>
      </li>
      <li>
        <a>Contact Us</a>
      </li>
      {user?.uid && (
        <li>
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
      )}
    </React.Fragment>
  );
  return (
    <nav>
      <div className="navbar bg-orange-600 text-white lg:px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content p-2 shadow bg-orange-600 rounded-0 w-52">
              {menus}
            </ul>
          </div>

          <div className="navbar-center hidden lg:flex lg:mr-auto">
            <ul className="menu menu-horizontal px-1">{menus}</ul>
          </div>
        </div>

        <div className="navbar-end">
          <label tabIndex={1} htmlFor="side_bar" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <p className="lg:flex items-center hidden">
            <FaPhoneVolume />
            <span className="mr-6">+880 889965215</span>
            <FaEnvelope />
            <span className="ml-2">gtaseller@gmail.com</span>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
