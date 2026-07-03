import { Bell, Search } from "lucide-react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { logout } from "../../features/auth/authSlice";

export const AdminNavbar = () => {
  const dispatch = useAppDispatch()

  const onLogout = ()=>{
    try {
      dispatch(logout())
    } catch (error) {
      console.log('Error=>',error)
    }
  }
  
  return (
    <>
      <div className="m-4 mt-10 flex flex-row justify-between">
        <div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <p className="text-sm">
              Welcome back, Admin! Here's what's happening with your store
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-8 items-center">
            <div className="relative w-95">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Search products, categories..."
                className="h-11 w-full rounded-md border border-slate-200 bg-white pl-10 pr-4 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-300"
              />
            </div>
            <div className="flex h-full">
              <div className="relative">
                <Bell size={22} />
                <div className="rounded-2xl absolute -top-3 -right-3 w-4 h-4 bg-red-600 flex items-center justify-center text-white text-xs">
                  <span>1</span>
                </div>
              </div>
            </div>
            <div className="flex w-20 bg-green-300 rounded-md">
           <button onClick={onLogout} className="overflow-hidden bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
