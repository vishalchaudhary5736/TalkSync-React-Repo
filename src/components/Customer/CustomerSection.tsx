import { useState, type ReactNode } from "react";
import { Pagination } from "../Pagination";
import { useGetUsersQuery } from "../../features/customer/customerApi";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  onlineStatus: string;
  createdAt: string;
};

export const CustomerSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10);

  const { data, isLoading, isError } = useGetUsersQuery({
    page: currentPage,
    limit,
  });

  const users: User[] = data?.data || [];
  const totalPages = data?.totalPage || 1;

  const columns = [
    "Name",
    "Email",
    "Address",
    "Online Status",
    "Registered Date",
  ];

  return (
    <div className="p-8 pt-20 h-full w-full">
      <div className="flex flex-col gap-4 h-full">
        <div className="p-2">
          <h2 className="text-xl font-semibold">Customers</h2>
        </div>
        <div className="flex-1 overflow-auto">
          <table className="w-full ">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column} className="bg-gray-50 px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  onClick={() =>
                    (window.location.href = `/dashboard/customers/${user._id}`)
                  }
                  key={user._id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-gray-600 border-b border-slate-200">
                    {[user.firstName ,user.lastName].filter(Boolean).join(" ")}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 border-b border-slate-200">
                    {user.email}
                  </td>
             <td className="px-6 py-4 text-sm text-gray-600 border-b border-slate-200">
                    {user.address || "N/A"}
                  </td> 
                  <td className="px-6 py-4 text-sm text-gray-600 border-b border-slate-200">
                    {user.onlineStatus}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 border-b border-slate-200">
                    {new Date(user.createdAt).toLocaleString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bottom-0 p-4 flex justify-end">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};
