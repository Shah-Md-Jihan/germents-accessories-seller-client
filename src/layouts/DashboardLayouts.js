import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Dashboard from "./../Pages/Dashboard/Dashboard";

const DashboardLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
        Open drawer
      </label>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayouts;
