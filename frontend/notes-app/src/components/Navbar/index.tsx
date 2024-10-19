import { FC } from "react";
import SearchBarForm from "../Forms/SearchBarForm";
import ProfileInfo from "../ProfileInfo";

interface NavbarInterface {
  inDashboard?: boolean;
}

const Navbar: FC<NavbarInterface> = ({ inDashboard }) => {
  const isLoggedIn = true;
  return (
    <div className="flex bg-white flex-col sm:flex-row sm:justify-between px-6 py-2 drop-shadow sm:items-center">
      <div className="flex justify-between">
        <div className="text-xl font-medium text-black py-2">Notes</div>
        {inDashboard && (
          <div className="sm:hidden pb-3">
            <ProfileInfo />
          </div>
        )}
      </div>
      {isLoggedIn && inDashboard && (
        <>
          <SearchBarForm />
          <div className="hidden sm:block">
            <ProfileInfo />
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
