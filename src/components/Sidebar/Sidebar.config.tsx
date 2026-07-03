// sidebar.config.ts

import { Home, User, Folder, ShoppingBag } from "lucide-react";

export const sidebarItems = [
  {
    title: "Dashboard",
    icon: Home,
    path: "/admin/dashboard",
    section: null,
  },
  {
    title: "Customers",
    icon: User,
    path: "/admin/customers",
    section: "USERS",
  },
  {
    title: "Categories",
    icon: Folder,
    path: "/admin/categories",
    section: "MANAGE",
  },
  {
    title: "Products",
    icon: ShoppingBag,
    path: "/admin/products",
    section: "MANAGE",
  },
];