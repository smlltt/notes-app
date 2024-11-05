import { useEffect } from "react";
import { fetchUser } from "../../react-query/fetchers";
import { useUser } from "../../react-query/queries";
import { getFirstName, getInitials } from "../../utils";
import useAuthStore from "../../zustand/auth";

const ProfileInfo = () => {
  const { clearToken } = useAuthStore();

  const { data, isLoading } = useUser();

  if (!data || isLoading) return null;
  const fullName = data.data.user.fullName;
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 flex items-center justify-center bg-slate-100 rounded-full">
        {getInitials(fullName)}
      </div>
      <div>
        <div className="text-lg font-medium">{getFirstName(fullName)}</div>
        <button className=" text-primary underline" onClick={clearToken}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
