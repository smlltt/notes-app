import { getFirstName, getInitials } from "../../utils";

const ProfileInfo = () => {
  const name = "Test User";
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 flex items-center justify-center bg-slate-100 rounded-full">
        {getInitials(name)}
      </div>
      <div>
        <div className="text-lg font-medium">{getFirstName(name)}</div>
        <button
          className=" text-primary underline"
          onClick={() => console.log("logout")}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
