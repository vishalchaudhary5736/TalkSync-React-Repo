import { NavLink } from "react-router-dom";

export const UserSidebarItem = ({ item }: { item: any }) => {
  const Icon = item.icon;

  if (item.isDisable) {
    return (
      <div  className="flex items-center gap-2 p-3 rounded-lg text-gray-400 cursor-not-allowed opacity-50">
        <Icon size={18} />
        <span>{item.title}</span>
      </div>
    );
  }
  
  return (
    <NavLink
      to={item.path}
      end = {item.path === ""}
      className={({ isActive }) =>
        `flex items-center gap-2 p-3 rounded-lg transition-all duration-200 ${
          isActive
            ? "bg-blue-950 text-white"
            : "text-gray-500 hover:bg-slate-700"
        }`
      }
    >
      <Icon size={18} />
      <span>{item.title}</span>
    </NavLink>
  );
};
