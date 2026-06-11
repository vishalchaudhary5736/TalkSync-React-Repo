import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes";
import PublicRoute from "./PublicRoutes";
import NotFound from "../pages/Public/NotFound";
import AuthLayout from "../pages/Public/AuthLayout";
import Login from "../pages/Public/Login";
import Register from "../pages/Public/Registration";
import ForgotPassword from "../pages/Public/ForgotPassword";
import VerifyOtp from "../pages/Public/OtpScreen";
import ResetPassword from "../pages/Public/ResetPassword";
import DashboardLayout from "../pages/Layout/DashboardLayout";
import ChatPage from "../pages/Private/Chat/ChatPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/chat" element={<ChatPage />} />
        </Route>
      </Route>

      <Route element={<PublicRoute />}>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
