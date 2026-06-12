import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { studentApi } from "@/lib/student-api";

export function useDashboard() {
  return useQuery({
    queryKey: ["dashboardData"],
    queryFn: () => studentApi.getDashboard(),
  });
}

export function useStudentProfile() {
  return useQuery({
    queryKey: ["studentProfile"],
    queryFn: () => studentApi.getProfile(),
  });
}

export function usePlans() {
  return useQuery({
    queryKey: ["plans"],
    queryFn: () => studentApi.getPlans(),
  });
}

export function useMySubscription() {
  return useQuery({
    queryKey: ["mySubscription"],
    queryFn: () => studentApi.getMySubscription(),
  });
}

export function useSubjects(className?: string) {
  return useQuery({
    queryKey: ["subjects", className],
    queryFn: () => studentApi.getSubjectsWithIds(className),
  });
}

export function useLiveClasses() {
  return useQuery({
    queryKey: ["liveClasses"],
    queryFn: () => studentApi.getLiveClassesData(),
  });
}

export function useSessionDetails(sessionId?: string) {
  return useQuery({
    queryKey: ["sessionInfo", sessionId],
    queryFn: () => studentApi.getSessionDetails(sessionId),
    enabled: true,
  });
}

export function useCreateProfile() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: studentApi.createProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["studentProfile"] });
    },
  });
}

export function useUpdateProfile() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: studentApi.updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["studentProfile"] });
      queryClient.invalidateQueries({ queryKey: ["dashboardData"] });
    },
  });
}

export function useActivateTrial() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (planId?: string) => studentApi.activateTrial(planId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mySubscription"] });
      queryClient.invalidateQueries({ queryKey: ["dashboardData"] });
    },
  });
}

export function useOrderSummary(planId: string | null) {
  return useQuery({
    queryKey: ["orderSummary", planId],
    queryFn: () => studentApi.getOrderSummary(planId!),
    enabled: !!planId,
  });
}
