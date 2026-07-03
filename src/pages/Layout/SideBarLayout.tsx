import { Folder, Home, Menu, ShoppingBag, User } from "lucide-react";
import { SidebarItem } from "../../components/Sidebar/SidebarItem";

export const SideBarLayout = () => {
  return (
    <>
      <div className="w-[15%] bg-linear-to-b from-[#14213d] via-[#0f172a] to-[#09111f] text-white">
        <div className="flex flex-col w-full h-full">
          <div className="text-2xl font-bold h-20 border-b border-slate-600">
            <div className="flex items-center ">
              <div className="p-6">
                Admin<span className="text-indigo-400">Panel</span>
              </div>
              <div className="p-4 ">
                <Menu size={30} className="text-gray-300" />
              </div>
            </div>
          </div>
          <div className="flex-1 ">
            <div className="flex-1 flex flex-col h-full">
              <div className="flex flex-col p-6 gap-12">
                <div>
                  <div className=" overflow-hidden">
                    <SidebarItem
                      item={{
                        title: "Dashboard",
                        icon: Home,
                        path: "/dashboard",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="font-light text-sm text-gray-400">USERS</div>
                  <div className="mt-4 ml-2 flex flex-col font-inter">
                    <SidebarItem
                      item={{
                        title: "Customers",
                        icon: User,
                        path: "/dashboard/customers",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="font-light text-sm text-gray-400">
                    {" "}
                    MANAGE
                  </div>
                  <div className="mt-2 ml-2 flex flex-col gap-1">
                   

                    <SidebarItem
                      item={{
                        title: "Categories",
                        icon: Folder,
                        path: "/dashboard/categories",
                      }}
                    />
                    <SidebarItem
                      item={{
                        title: "Products",
                        icon: ShoppingBag,
                        path: "/dashboard/products",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-auto p-6 ">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <img
                      src="https://i.pravatar.cc/150"
                      alt="Profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></span>
                  </div>

                  <span className="font-bold">Admin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
