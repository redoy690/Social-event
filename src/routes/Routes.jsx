
import { createBrowserRouter, } from "react-router-dom";
import Root from "../layouts/Root";
import Details from "../pages/Details/Details";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('/data.json') 
      },
      {
         path:'/services/:id',
         element:<Details></Details>,
         loader: () => fetch('/data.json')
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

export default routes;