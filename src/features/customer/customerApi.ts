import { baseApi } from "../../services/baseApi";

export const CustomerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ page, limit, status, name, sortBy, sortOrder }) => ({
        url: "/admin/customer/list",
        params: {
          page,
          limit,
          status,
          name,
          sortBy,
          sortOrder,
        },
      }),
      providesTags: ["Users"],
    }),
    fetchUser:builder.query({
        query:({id})=>({
            url:`/admin/customer/${id}`,
        })
    }),
    fetchUserAnalytics:builder.query({
        query:({id})=>({
            url:`/admin/customer/analytics/${id}`,
        })
    })
  }),
});

export const { useGetUsersQuery,useFetchUserQuery ,useFetchUserAnalyticsQuery} = CustomerApi;
