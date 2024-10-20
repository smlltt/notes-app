import { FC } from "react";
import SearchBarForm from "../Forms/SearchBarForm";
import ProfileInfo from "../ProfileInfo";

interface NavbarInterface {
  inDashboard?: boolean;
}

const Navbar: FC<NavbarInterface> = ({ inDashboard }) => {
  const isLoggedIn = true;
  return (
    <div className="flex bg-green-300 border-black border-4 flex-col sm:flex-row sm:justify-between px-6 py-3 sm:items-center">
      <div className="flex justify-between items-center border-b-4 sm:border-b-0 border-black pb-3 sm:pb-0">
        <div className="text-2xl font-bold text-black py-2">Notes</div>
        {inDashboard && (
          <div className="sm:hidden">
            <ProfileInfo />
          </div>
        )}
      </div>
      {isLoggedIn && inDashboard && (
        <div className="flex flex-col sm:flex-row sm:space-x-4 sm:items-center mt-4 sm:mt-0">
          <SearchBarForm />
          <div className="hidden sm:block">
            <ProfileInfo />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
