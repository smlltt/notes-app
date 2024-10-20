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
      <div className="bg-white border-4 border-black p-8 rounded-none w-full max-w-md">
        <div className="text-2xl pb-3 font-bold text-black">
          {type === "login" ? "Login" : "Sign up"}
        </div>
        {children}
        <div className="flex items-center justify-center space-x-2 mt-4 text-black">
          <div>
            {type === "login"
              ? "Not registered yet?"
              : "Already have an account?"}{" "}
          </div>
          <Link
            to={type === "login" ? routes.signUp : routes.login}
            className="underline text-black hover:text-blue-600"
          >
            {type === "login" ? "  Create an account" : "Login"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
