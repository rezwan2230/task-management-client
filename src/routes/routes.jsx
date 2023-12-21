
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Home/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Main from "../layouts/Main";
import Dashboard from "../layouts/Dashboard";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import OverView from "../pages/OverView/OverView";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
          path : '/',
          element : <Home></Home>
        },
        {
          path : 'about',
          element : <About></About>
        },
        {
          path : 'contact',
          element : <Contact></Contact>
        },
      ]
    },
    {
      path : '/dashboard',
      element : <Dashboard></Dashboard>,
      children : [
        {
          path : 'overview',
          element : <OverView></OverView>
        }
      ]
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
  