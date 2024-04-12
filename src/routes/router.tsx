import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Signup from "../pages/Signup";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },

  {
    path: "/admin",
    element: <App />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },

      {
        path: "dashboard",
        element: <AdminDashboard />,
      },

      {
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
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
