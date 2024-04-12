import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signup from "../pages/Signup";
import { adminRoutes } from "./admin.route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/admin",
    element: <App />,
    children: adminRoutes,
  },

  {
    path: "/faculty",
    element: <App />,
    children: adminRoutes,
  },

  {
    path: "/student",
    element: <App />,
    children: adminRoutes,
  },

  {
    path: "/login",
    element: <App />,
  },

  {
    path: "/regester",
    element: <Signup />,
  },
]);
