import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

const Main = () => {
  const { isLoading, data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetch("http://127.0.0.1:8000/api/categories").then((res) => res.json()),
  });
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
            {categories?.map((category) => (
              <li key={category?.id}>
                <a>{category?.category_name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Main;
