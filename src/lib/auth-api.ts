import { apiClient } from "@/lib/api-client";
<<<<<<< HEAD
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
=======
import type { LoginPayload, Role, VerifyOtpResponse } from "@/types";

export const authApi = {
  sendOtp: async (payload: LoginPayload) => {
>>>>>>> origin/sumit
    const { data } = await apiClient.post("/auth/sent-otp", payload);
    return data;
  },

<<<<<<< HEAD
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
=======
  verifyOtp: async (phone: string, otp: string): Promise<VerifyOtpResponse> => {
    const { data } = await apiClient.post<VerifyOtpResponse>("/auth/otp/verify", { phone, otp });
    return data;
  },

  selectRole: async (role: Role) => {
    const { data } = await apiClient.post("/auth/role", { role });
    if (data.token) {
      localStorage.setItem("vlm_token", data.token);
    }
    return data;
  },

  getMe: async () => {
    const { data } = await apiClient.get("/auth/me");
    return data.user;
  },

  logout: async () => {
    const { data } = await apiClient.post("/auth/logout");
    localStorage.removeItem("vlm_token");
    return data;
  },

>>>>>>> origin/sumit
  getGoogleAuthUrl: async (): Promise<{ url: string }> => {
    const { data } = await apiClient.get<{ url: string }>("/auth/google");
    return data;
  },
};
