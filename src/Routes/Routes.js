import { createBrowserRouter } from "react-router-dom";
import DashboardLayouts from "../layouts/DashboardLayouts";
import Main from "../layouts/Main";
import AddCategory from "../Pages/Dashboard/AddCategory";
import AllCategories from "../Pages/Dashboard/AllCategories";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Products from "../Pages/Dashboard/Products";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayouts></DashboardLayouts>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/add/category",
        element: <AddCategory></AddCategory>,
      },
      {
        path: "/dashboard/all/categories",
        element: <AllCategories></AllCategories>,
      },
      {
        path: "/dashboard/products",
        element: <Products></Products>,
      },
    ],
  },
]);
