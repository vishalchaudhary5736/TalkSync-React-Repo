import { NavLink } from "react-router-dom";

export const SidebarItem = ({ item }: { item: any }) => {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `flex items-center gap-2 p-3 rounded-lg transition-all duration-200 ${
          isActive
            ? "bg-blue-950 text-white"
            : "text-gray-300 hover:bg-slate-700"
        }`
      }
    >
      <Icon size={18} />
      <span>{item.title}</span>
    </NavLink>
  );
};
