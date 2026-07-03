import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className=" bg-slate-100 w-screen h-screen overflow-hidden ">
        <Outlet />
    </div>
  );
};

export default Layout;
