import {
  Activity,
  CheckCheck,
  LocateFixed,
  Mail,
  MapPin,
  Phone,
  Timeline,
  User,
} from "lucide-react";
import CustomerStatsSection from "./CardSection";
import { useOutletContext } from "react-router-dom";
import type { user } from "../../types/types";
import { useFetchUserAnalyticsQuery } from "../../features/customer/customerApi";

interface CustomerDashboardProp {
  user: user;
  isLoading: Boolean;
  isError: Boolean;
}

export const CustomerDashboard = () => {
  const { user, isLoading } = useOutletContext<CustomerDashboardProp>();

  if (isLoading) {
    return <>Loading...</>;
  }
  console.log("user", user);
  
  const {
    data,
    isLoading: isAnalyticsLoading,
  } = useFetchUserAnalyticsQuery({ id: user._id });
  
  
  if (isAnalyticsLoading) {
    return <>Loading...</>;
  }
  console.log("Analytics", data);
  
  return (
    <>
      <div className="p-8">
        <CustomerStatsSection analytics={data.resdata} />
        <div className="mt-8">
          <h1>Profile Overview</h1>
          <div className="mt-8  grid grid-cols-2 gap-4">
             <div className="flex items-center">
                  <User size={18} className="text-gray-500 w-6" />
                  <span className="w-40 text-sm font-medium text-gray-600">
                    Full Name
                  </span>
                  <span className="flex-1 text-sm text-gray-900">
                    {user?.lastName
                      ? `${user?.firstName} ${user?.lastName}`
                      : user?.firstName}
                  </span>
                </div>

                <div className="flex items-center">
                  <Mail size={18} className="text-gray-500 w-6" />
                  <span className="w-40 text-sm font-medium text-gray-600">
                    Email
                  </span>
                  <span className="flex-1 text-sm text-gray-900">
                    {user?.email}
                  </span>
                </div>

                <div className="flex items-center">
                  <Phone size={18} className="text-gray-500 w-6" />
                  <span className="w-40 text-sm font-medium text-gray-600">
                    Phone
                  </span>
                  <span className="flex-1 text-sm text-gray-900">
                    {user?.mobileNumber
                      ? `${user.countryCode ?? ""} ${user.mobileNumber}`
                      : "N/A"}
                  </span>
                </div>

                <div className="flex items-center">
                  <Timeline size={18} className="text-gray-500 w-6" />
                  <span className="w-40 text-sm font-medium text-gray-600">
                    Registered Date
                  </span>
                  <span className="flex-1 text-sm text-gray-900">
                    {new Date(user?.createdAt).toLocaleString("en-IN", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    }) || null}
                  </span>
                </div>

                <div className="flex items-center">
                  <Activity size={18} className="text-gray-500 w-6" />
                  <span className="w-40 text-sm font-medium text-gray-600">
                    Status
                  </span>

                  <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    {user?.status || "Offline"}
                  </span>
                </div>

                <div className="flex items-start">
                  <MapPin size={18} className="text-gray-500 w-6" />

                  <span className="w-40 text-sm font-medium text-gray-600">
                    Address
                  </span>

                  <span className="flex-1 text-sm text-gray-900">
                    {user?.address}
                  </span>
                </div>
                <div className="flex items-start">
                  <LocateFixed size={18} className="text-gray-500 w-6" />

                  <span className="w-40 text-sm font-medium text-gray-600">
                    Geo Coordinates
                  </span>

                  <span className="flex-1 text-sm text-gray-900">
                    7.1254, 30.1254
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCheck size={18} className="text-gray-500 w-6" />

                  <span className="w-40 text-sm font-medium text-gray-600">
                    Online Status
                  </span>

                  <span className="flex-1 text-sm text-gray-900">
                    {user?.onlineStatus || "Offline"}
                  </span>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};
