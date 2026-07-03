import {
  BookUser,
  Heart,
  HelpCircle,
  LayoutDashboard,
  LucideListOrdered,
  Verified,
} from "lucide-react";
import { UserSidebarItem } from "../Sidebar/UserSideBar";
import type { user } from "../../types/types";

interface CustomerAccountProps {
  user?: user;
  isLoading: Boolean;
  isError: Boolean;
}

export const CustomerAccount = ({
  user,
  isLoading,
  isError,
}: CustomerAccountProps) => {
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading user.</p>;

  return (
    <>
      <div className="">
        <div className="p-8 h-full w-full ">
          <div className="flex flex-col">
            <div className="flex flex-col gap-3 ">
              <h1 className="text-2xl font-semibold">My Account</h1>
              <div className="mt-6 flex flex-col justify-center items-center">
                <div className="overflow-hidden rounded-full w-32 h-32 border border-slate-200">
                  <img
                    src="https://ui-avatars.com/api/?name=User&background=e5e7eb&color=6b7280&size=256"
                    alt="Profile"
                  />
                </div>
                <div className="flex flex-col gap-1 justify-center items-center mt-2">
                  <h2 className="font-semibold">
                    {user?.lastName
                      ? `${user?.firstName} ${user?.lastName}`
                      : user?.firstName}
                  </h2>
                  <p className="text-sm text-slate-400">{user?.email}</p>
                  <div className="flex flex-row gap-1 justify-center items-center">
                    <Verified size={16} className="text-blue-500" />

                    <p>{user?.status ? "Active" : "Inactive"}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <div className="flex flex-col gap-8">
                <UserSidebarItem
                  item={{
                    title: "Dashboard",
                    icon: LayoutDashboard,
                    path: "",
                    isDisable: false,
                  }}
                />
                <UserSidebarItem
                  item={{
                    title: "Order",
                    icon: LucideListOrdered,
                    path: "orders",
                    isDisable: true,
                  }}
                />
                <UserSidebarItem
                  item={{
                    title: "Wishlist",
                    icon: Heart,
                    path: "wishlist",
                    isDisable: true,
                  }}
                />
                <UserSidebarItem
                  item={{
                    title: "Address",
                    icon: BookUser,
                    path: "address",
                    isDisable: true,
                  }}
                />

                <UserSidebarItem
                  item={{
                    title: "Help & Support",
                    icon: HelpCircle,
                    path: "help&support",
                    isDisable: true,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
