import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="h-screen bg-slate-100 p-10">
      <div className="h-full bg-white rounded-3xl shadow-lg overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
