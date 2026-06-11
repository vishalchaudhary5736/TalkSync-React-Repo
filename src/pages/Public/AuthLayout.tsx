import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-slate-200 flex items-center justify-center p-4">
      {/* Card */}
      <div className="w-full max-w-7xl h-187.5 flex rounded-3xl overflow-hidden shadow-2xl">
        {/* Left Section */}
        <div className="hidden lg:flex w-1/2 bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 text-white flex-col justify-center px-20">
          <div className="max-w-md">
            <h1 className="text-6xl font-bold mb-6">
              Chat<span className="text-indigo-400">App</span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              Connect with friends, teams and communities in real time.
            </p>

            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-3">
                <span>⚡</span>
                <p>Lightning-fast messaging</p>
              </div>

              <div className="flex items-center gap-3">
                <span>🔒</span>
                <p>Secure authentication</p>
              </div>

              <div className="flex items-center gap-3">
                <span>🌍</span>
                <p>Stay connected anywhere</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-slate-100 flex items-center justify-center p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
