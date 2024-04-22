import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signup from "../pages/Signup";
import { adminPaths } from "./admin.route";
import { routeGenerator } from "../utils/routeGenerator";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/admin",
    element: <App />,
    children: routeGenerator(adminPaths),
  },

  {
    path: "/faculty",
    element: <App />,
    children: routeGenerator(adminPaths),
  },

  {
    path: "/student",
    element: <App />,
    children: routeGenerator(adminPaths),
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
