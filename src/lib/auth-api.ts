import { apiClient } from "@/lib/api-client";
import type { AuthUser,  Role } from "@/types";

export const authApi = {
  /**
   * Login via email + password
   */
  // loginWithEmail: async (payload: any): Promise<AuthUser> => {
  //   const { data } = await apiClient.post<AuthUser>("/auth/login", payload);
  //   return data;
  // },

  /**
   * Request OTP to phone number
   */
  sendOtp: async (payload:any) => {
    const { data } = await apiClient.post("/auth/sent-otp", payload);
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
