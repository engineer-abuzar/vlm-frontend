import { useMutation, useQuery } from "@tanstack/react-query";
import { studentApi } from "@/lib/student-api";
import type { StudentProfile, Subscription, DashboardData, Plan, Session } from "@/types";

export function useCreateProfile() {
  return useMutation<any, Error, { fullName: string; nickname: string; className: string; board: string; city: string; state: string }>({
    mutationFn: (payload) => studentApi.createProfile(payload),
  });
}

export function useStudentProfile() {
  return useQuery<StudentProfile>({
    queryKey: ["studentProfile"],
    queryFn: studentApi.getProfile,
  });
}

export function useUpdateProfile() {
  return useMutation<any, Error, any>({
    mutationFn: (payload) => studentApi.updateProfile(payload),
  });
}

export function useDashboard() {
  return useQuery<DashboardData>({
    queryKey: ["dashboard"],
    queryFn: studentApi.getDashboard,
  });
}

export function useLiveClasses<T = any>() {
  return useQuery<T>({
    queryKey: ["liveClasses"],
    queryFn: studentApi.getLiveClasses,
  });
}

export function usePlans() {
  return useQuery<Plan[]>({
    queryKey: ["plans"],
    queryFn: studentApi.getPlans,
  });
}

export function useActivateTrial() {
  return useMutation<any, Error, any>({
    mutationFn: () => studentApi.activateTrial(),
  });
}

export function useSessionDetails(sessionId?: string) {
  return useQuery<Session>({
    queryKey: ["sessionDetails", sessionId],
    queryFn: () => studentApi.getSessionDetails(sessionId ?? ""),
    enabled: Boolean(sessionId),
  });
}

export function useMySubscription() {
  return useQuery<Subscription>({
    queryKey: ["mySubscription"],
    queryFn: studentApi.getMySubscription,
  });
}
