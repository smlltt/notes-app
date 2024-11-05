import { createBrowserRouter, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { routes } from "./routes";
import { FC, ReactElement, useEffect } from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../zustand/auth";
import useNavigationState from "../zustand/navigation";

interface PrivateRouteProps {
  children: ReactElement;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const { token } = useAuthStore();
  const { updatePathName } = useNavigationState();
  const location = useLocation();

  useEffect(() => {
    updatePathName(location.pathname);
  }, [location, updatePathName]);

  return token ? children : <Navigate to={routes.login} />;
};

const AuthRoute: FC<PrivateRouteProps> = ({ children }) => {
  const { token } = useAuthStore();
  const { pathName: previousPathName } = useNavigationState();
  //redirects back to the last visited page if the user is logged in

  return token ? <Navigate to={previousPathName} /> : children;
};

export const router = createBrowserRouter([
  {
    path: routes.default,
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: routes.dasboard,
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: routes.login,
    element: (
      <AuthRoute>
        <Login />
      </AuthRoute>
    ),
  },
  {
    path: routes.signUp,
    element: (
      <AuthRoute>
        <SignUp />
      </AuthRoute>
    ),
  },
]);
