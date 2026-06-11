import type React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { LogOut } from "lucide-react";
import { logout } from "../features/auth/authSlice";
import { toast } from "react-toastify";

interface selectedUserType {
  selectedUser: any;
  setSelectedUser: React.Dispatch<React.SetStateAction<any>>;
}

const ChatList = ({ setSelectedUser, selectedUser }: selectedUserType) => {
  const dispatch = useAppDispatch();

  const handleSubmit = async () => {
    try {
      dispatch(logout());
      toast.success("Logout Successfull");
      // navigate("/chat");
    } catch (error: any) {
      console.error("logout", error);
      toast.error(error?.data?.message);
    }
  };

  const users = [
    {
      _id: "1",
      firstName: "Vishal",
      lastName: "Chaudhary",
      lastMessage: "Hii..........",
      onlineStatus: "online",
    },
    {
      _id: "2",
      firstName: "Rahul",
      lastName: "Chaudhary",
      lastMessage: "Hii..........",
      onlineStatus: "offline",
    },
  ];

  const user = useAppSelector((state) => state.auth.user);
  let name = user?.firstName;
  if (user?.lastName) name = name + " " + user?.lastName;
  const profilePicture =
    user?.profileImage || "https://i.pravatar.cc/150?img=3";
  const onlineStatus = user?.onlineStatus === "online" ? "Online" : "Offline";
  return (
    <div className="h-full w-80 border-r-2 border-slate-200 flex flex-col">
      {/* Logo */}
      <div className="m-4">
        <h1 className="text-2xl font-bold">
          Talk<span className="text-indigo-600">Sync</span>
        </h1>
      </div>

      {/* New Chat */}
      <div className="p-4">
        <button className="w-full bg-indigo-600 text-white py-4 px-4 rounded-xl">
          New Chat
        </button>
      </div>

      {/* Search */}
      <div className="py-1 px-4">
        <input
          placeholder="Search chats..."
          className="w-full px-4 py-3 bg-slate-100 rounded-xl outline-none"
        />
      </div>

      {/* Chat List */}
      <div className="overflow-y-auto h-1/2 p-2 space-y-1o hide-scrollbar">
        {users.map((user) => (
          <div className="flex item-center gap-3">
            <div className="relative flex items-center">
              <img
                src={profilePicture}
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
              {user.onlineStatus === "online" && (
                <span className="absolute bottom-4 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
              )}
            </div>
            <div
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`py-3 mb-2 pl-1 pr-28 rounded-xl cursor-pointer ${
                selectedUser?._id === user._id
                  ? "bg-indigo-100 border border-indigo-300"
                  : "hover:bg-slate-100"
              }`}
            >
              <h3 className="font-semibold">
                {user.firstName + " " + user.lastName}
              </h3>
              <p className="text-sm text-slate-500">{user?.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Profile Section */}
      <div className="flex-1 flex-col items-end px-4 pb-8">
        <div className=" flex items-center gap-3">
          <div className="relative">
            <img
              src={profilePicture}
              alt="profile"
              className="w-12 h-12 rounded-full"
            />
            {onlineStatus === "Online" && (
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            )}
          </div>

          <div>
            <h3 className="font-medium">{name || "Ajay Kumar"}</h3>
            <p className="text-sm text-green-500">{onlineStatus || "Online"}</p>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="flex items-center gap-2 w-full px-4 py-3 my-6  text-red-600 bg-red-50 rounded-lg transition-colors"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default ChatList;
