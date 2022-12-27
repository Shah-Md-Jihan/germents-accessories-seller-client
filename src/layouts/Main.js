import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>

      <div className="drawer drawer-mobile">
        <input id="side_bar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="side_bar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64 bg-blue-100 text-base-content">
            <h1>Categories</h1>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Main;
