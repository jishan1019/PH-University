import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signup from "../pages/Signup";
import { adminPaths } from "./admin.route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/admin",
    element: <App />,
    children: adminPaths,
  },

  {
    path: "/faculty",
    element: <App />,
    children: adminPaths,
  },

  {
    path: "/student",
    element: <App />,
    children: adminPaths,
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
