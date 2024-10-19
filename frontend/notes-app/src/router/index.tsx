import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { routes } from "./routes";

export const router = createBrowserRouter([
  {
    path: routes.dasboard,
    element: <Home />,
  },
  {
    path: routes.login,
    element: <Login />,
  },
  {
    path: routes.signUp,
    element: <SignUp />,
  },
]);
