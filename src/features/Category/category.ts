import { baseApi } from "../../services/baseApi";

export const categoryApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        fetchCategoryList:builder.query({
            query:({page,limit,sortBy,sortOrder,name,status})=>({
                url:'/admin/categories/list',
                params:{
                    name,status,page,limit,sortBy,sortOrder
                }
            })
        })
    })
})

export const {useFetchCategoryListQuery} = categoryApi