import { baseApi } from "../../services/baseApi";
import type {
  loginInterface,
  signup,
  signupType,
  getProfile,
} from "../../types/types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation<signupType, signup>({
      query: (body) => ({
        url: "/user/register",
        method: "POST",
        body,
      }),
    }),

    login: builder.mutation<signupType, loginInterface>({
      query: (body) => ({
        url: "/admin/login",
        method: "POST",
        body,
      }),
    }),
    getProfile: builder.query<getProfile, void>({
      query: () => ({
        url: "/user/profile",
        method: "GET",
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useGetProfileQuery } =
  authApi;
