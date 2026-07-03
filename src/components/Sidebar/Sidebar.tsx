

import { sidebarItems } from "./Sidebar.config";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  return (
    <>
      {sidebarItems.map((item) => (
        <SidebarItem key={item.path} item={item} />
      ))}
    </>
  );
};