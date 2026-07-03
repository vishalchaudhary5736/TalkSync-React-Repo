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
import { Dashboard } from "../pages/Private/Dashbaord";
import Layout from "../pages/Layout/Layout";
import { DashboardHome } from "../pages/Private/DashboardHome";
import { CategorySection } from "../components/Catagory/Category";
import { CustomerSection } from "../components/Customer/CustomerSection";
import { CustomerDetails } from "../components/Customer/customerDetail";
import { CustomerDashboard } from "../components/Customer/CustomerDashboard";
import { CategoryDetail } from "../components/Catagory/CategoryDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route element={<Layout />}>
          <Route element={<Dashboard />}>
            <Route index path="/dashboard" element={<DashboardHome />} />
            <Route path="/dashboard/customers" element={<CustomerSection />} />
            <Route
              path="/dashboard/customers/:id"
              element={<CustomerDetails />}
            >
              <Route index element={<h1><CustomerDashboard/></h1>} />
              <Route path="orders" element={<h1>hii</h1>} />
              <Route path="wishlist" element={<h1>bye</h1>} />
              <Route path="address" element={<h1>address</h1>} />
              <Route path="help&support" element={<h1>Help and suport</h1>} />
            </Route>
            <Route path="/dashboard/categories" element={<CategorySection />} />
            <Route path="/dashboard/categories/:id" element={<CategoryDetail />} />
            <Route path="products" element={<Dashboard />} />
          </Route>
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
