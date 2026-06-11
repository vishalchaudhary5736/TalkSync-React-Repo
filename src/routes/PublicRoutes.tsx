import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";

const PublicRoute = () => {
  const token = useAppSelector((state) => state.auth.token);
  return token ? <Navigate to="/chat" /> : <Outlet />;
};

export default PublicRoute;
