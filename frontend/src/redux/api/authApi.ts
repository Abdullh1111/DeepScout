import { baseApi } from "./baseApi";
import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
} from "@/types/auth.interface";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (body) => ({ url: "/auth/login", method: "POST", body }),
      invalidatesTags: ["User"],
    }),
    register: builder.mutation<AuthResponse, RegisterRequest>({
      query: (body) => ({ url: "/auth/register", method: "POST", body }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
