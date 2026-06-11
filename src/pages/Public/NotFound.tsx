import { MessageCircleOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-stone-950 px-4">
      <MessageCircleOff size={80} className="text-indigo-500" />

      <h1 className="mt-6 text-7xl font-bold text-white">404</h1>

      <h2 className="mt-2 text-2xl font-semibold text-white">
        Lost in the conversation?
      </h2>

      <p className="mt-3 max-w-md text-center text-slate-400">
        The page you're looking for may have been moved, deleted, or never
        existed.
      </p>

      <button
        onClick={() => navigate("/login")}
        className="mt-8 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
      >
        Return to Login
      </button>
    </div>
  );
};

export default NotFound;
