
import { createBrowserRouter, } from "react-router-dom";
import Root from "../layouts/Root";
import ContactUs from "../pages/ContactUs/ContactUs";
import Details from "../pages/Details/Details";
import EventList from "../pages/EventList/EventList";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/services/:id',
        element:
          <PrivateRoutes>
            <Details></Details>
          </PrivateRoutes>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/contactus',
        element:
          <PrivateRoutes>
            <ContactUs></ContactUs>
          </PrivateRoutes>
      },
      {
        path: '/eventlist',
        element:
          <PrivateRoutes>
            <EventList></EventList>
          </PrivateRoutes>
      }

    ]
  },
]);

export default routes;