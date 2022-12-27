import { createBrowserRouter } from "react-router-dom";
import DashboardLayouts from "../layouts/DashboardLayouts";
import Main from "../layouts/Main";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

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
    ],
  },
]);
