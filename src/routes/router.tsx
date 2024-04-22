import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signup from "../pages/Signup";
import { adminPaths } from "./admin.route";
import { routeGenerator } from "../utils/routeGenerator";
import { facultyPaths } from "./faculty.route";
import { studentPaths } from "./student.route";

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
    children: routeGenerator(facultyPaths),
  },

  {
    path: "/student",
    element: <App />,
    children: routeGenerator(studentPaths),
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
