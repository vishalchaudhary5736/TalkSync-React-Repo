import { useState, type ReactNode } from "react";
import { Pagination } from "../Pagination";
import { useFetchCategoryListQuery } from "../../features/Category/category";

type Category = {
  _id: string;
  name: string;
  description: string;
  status: "active" | "inactive";
  parentId: string | null;
  slug: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type Column<T> = {
  header: string;
  accessor: keyof T;
  render?: (row: T) => ReactNode;
};

export const CategorySection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10);

  const {data,isLoading} = useFetchCategoryListQuery({page:currentPage,limit:limit,})
  console.log('Category=>',data)

  if(isLoading){
    return (<>Loading.......</>)
  }


  const columns: Column<Category>[] = [
    {
      header: "Category Name",
      accessor: "name",
    },
    {
      header: "Slug",
      accessor: "slug",
    },
    {
      header: "Description",
      accessor: "description",
      render: (category) => (
        <p className="max-w-sm truncate" title={category.description}>
          {category.description}
        </p>
      ),
    },
    {
      header: "Status",
      accessor: "status",
      render: (category) => (
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
            category.status === "active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          <span
            className={`mr-2 h-2 w-2 rounded-full ${
              category.status === "active" ? "bg-green-500" : "bg-red-500"
            }`}
          />
          {category.status.charAt(0).toUpperCase() + category.status.slice(1)}
        </span>
      ),
    },
    {
      header: "Created At",
      accessor: "createdAt",
      render: (category) =>
        new Date(category.createdAt).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
    },
  ];

  const paginatedCategories = data.resdata
  const totalPages =data.totalPage

  return (
    <div className="p-8 pt-20 h-full w-full">
      <div className="flex flex-col gap-4 h-full">
        <div className="p-2">
        <div className="flex w-full justify-between">
            <h2 className="text-xl font-semibold">Categories</h2>
            <div className="p-3 text-white cursor-pointer bg-green-400 w-44 rounded-xl text-center">Create Category</div>
        </div>
        </div>
        <div className="flex-1 overflow-auto">
          <table className="w-full ">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.accessor}
                    className="bg-gray-50 px-6 py-4 text-left text-sm font-semibold text-gray-700"
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {paginatedCategories.map((category:Category) => (
                <tr
                 onClick={() =>
                    (window.location.href = `/dashboard/categories/${category._id}`)
                  }
                  key={category._id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  {columns.map((column) => (
                    <td
                      key={String(column.accessor)}
                      className="px-6 py-4 text-sm text-gray-600 border-b border-slate-200"
                    >
                      {column.render
                        ? column.render(category)
                        : category[column.accessor]}
                    </td>
                  ))}
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
