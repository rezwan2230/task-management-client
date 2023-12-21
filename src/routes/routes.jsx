
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Home/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Main from "../layouts/Main";
import Dashboard from "../layouts/Dashboard";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
          path : '/',
          element : <Home></Home>
        }
      ]
    },
    {
      path : '/dashboard',
      element : <Dashboard></Dashboard>

    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/signup",
      element: <SignUp></SignUp>,
    },
  ]);
  