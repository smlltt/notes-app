import { Link } from "react-router-dom";
import { routes } from "../../router/routes";
import { FC, ReactNode } from "react";

interface AuthCardProps {
  children: ReactNode;
  type: "login" | "signUp";
}

const AuthCard: FC<AuthCardProps> = ({ children, type }) => {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-xl pb-3 font-medium">
          {type === "login" ? "Login" : "Sign up"}
        </div>
        {children}
        <div className="flex items-center justify-center space-x-2 mt-4">
          <div>
            {type === "login"
              ? "Not registered yet?"
              : "Already have an account?"}{" "}
          </div>
          <Link
            to={type === "login" ? routes.signUp : routes.login}
            className="underline text-primary"
          >
            {type === "login" ? "  Create an account" : "Login"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
