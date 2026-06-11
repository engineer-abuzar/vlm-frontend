import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/lib/auth-api";
import type { LoginPayload, Role } from "@/types";

export function useSendOtp() {
  return useMutation({
    mutationFn: (payload: LoginPayload) => authApi.sendOtp(payload),
  });
}

export function useVerifyOtp() {
  return useMutation({
    mutationFn: ({ phone, otp }: { phone: string; otp: string }) =>
      authApi.verifyOtp(phone, otp),
    onSuccess: (data) => {
      localStorage.setItem("vlm_token", data.token);
    },
  });
}

// ── Select Role ────────────────────────────────────────────
export function useSelectRole() {
  return useMutation({
    mutationFn: (role: Role) => authApi.selectRole(role),
  });
}

// ── Google OAuth ───────────────────────────────────────────
export function useGoogleAuth() {
  return useMutation({
    mutationFn: authApi.getGoogleAuthUrl,
    onSuccess: ({ url }) => {
      window.location.href = url;
    },
  });
}
