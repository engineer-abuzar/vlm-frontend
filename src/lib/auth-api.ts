import { apiClient } from "@/lib/api-client";
import type { AuthUser, LoginPayload, Role } from "@/types";

export const authApi = {
  /**
   * Login via email + password
   */
  loginWithEmail: async (payload: Required<Pick<LoginPayload, "email" | "password">>): Promise<AuthUser> => {
    const { data } = await apiClient.post<AuthUser>("/auth/login", payload);
    return data;
  },

  /**
   * Request OTP to phone number
   */
  requestOtp: async (phone: string): Promise<{ message: string }> => {
    const { data } = await apiClient.post<{ message: string }>("/auth/otp/request", { phone });
    return data;
  },

  /**
   * Verify OTP
   */
  verifyOtp: async (phone: string, otp: string): Promise<AuthUser> => {
    const { data } = await apiClient.post<AuthUser>("/auth/otp/verify", { phone, otp });
    return data;
  },

  /**
   * Select role after authentication
   */
  selectRole: async (role: Role): Promise<AuthUser> => {
    const { data } = await apiClient.post<AuthUser>("/auth/role", { role });
    return data;
  },

  /**
   * Google OAuth redirect
   */
  getGoogleAuthUrl: async (): Promise<{ url: string }> => {
    const { data } = await apiClient.get<{ url: string }>("/auth/google");
    return data;
  },
};
