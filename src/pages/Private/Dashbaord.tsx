import { AdminNavbar } from "./AdminNavbar";
import { SideBarLayout } from "../Layout/SideBarLayout";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <>
      <div className="w-full h-full flex flex-row ">
        <SideBarLayout/>
        {/* <Sidebar/> */}
        <div className="flex-1">
          <div className="w-full h-full flex flex-col">
            <div className="h-28"><AdminNavbar/></div>
            <div className="flex-1 h-full w-full">
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
