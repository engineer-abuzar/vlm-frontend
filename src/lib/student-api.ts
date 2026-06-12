/**
 * student-api.ts
 * Centralized API calls for all student-facing screens.
 * Replaces every hardcoded mock function in the frontend pages.
 */

import { apiClient } from '@/lib/api-client';

// ── Dashboard ─────────────────────────────────────────────────
export const studentApi = {
  // GET /student/dashboard
  getDashboard: async () => {
    const { data } = await apiClient.get('/student/dashboard');
    return data;
  },

  // GET /student/dashboard/stats
  getStats: async () => {
    const { data } = await apiClient.get('/student/dashboard/stats');
    return data;
  },

  // ── Profile ───────────────────────────────────────────────
  getProfile: async () => {
    const { data } = await apiClient.get('/student/profile');
    return data.data;
  },

  createProfile: async (payload: {
    fullName: string;
    nickname?: string;
    className?: string;
    board?: string;
    schoolName?: string;
    city?: string;
    state?: string;
  }) => {
    const { data } = await apiClient.post('/student/profile', payload);
    return data.data;
  },

  updateProfile: async (payload: {
    fullName?: string;
    nickname?: string;
    className?: string;
    board?: string;
    city?: string;
    state?: string;
  }) => {
    const { data } = await apiClient.patch('/student/profile', payload);
    return data.data;
  },

  // ── Subjects & Chapters ───────────────────────────────────
  getSubjects: async (className?: string) => {
    const params = className ? `?className=${className}` : '';
    const { data } = await apiClient.get(`/subjects${params}`);
    // Return simple array of subject names for AskDoubt compatibility
    return (data.subjects as any[]).map((s: any) => s.name);
  },

  getSubjectsFull: async (className?: string) => {
    const params = className ? `?className=${className}` : '';
    const { data } = await apiClient.get(`/subjects${params}`);
    return data.subjects;
  },

  getChaptersBySubjectName: async (subjectName: string, className?: string) => {
    const params = className ? `?className=${className}` : '';
    const { data: subjectsData } = await apiClient.get(`/subjects${params}`);
    const subject = (subjectsData.subjects as any[]).find(
      (s: any) => s.name.toLowerCase() === subjectName.toLowerCase()
    );
    if (!subject) return [];
    return (subject.chapters as any[]).map((c: any) => ({ id: c.id, name: c.name }));
  },

  getSubjectsWithIds: async (className?: string) => {
    const params = className ? `?className=${className}` : '';
    const { data } = await apiClient.get(`/subjects${params}`);
    return (data.subjects as any[]).map((s: any) => ({ id: s.id, name: s.name }));
  },

  getLiveClassesData: async () => {
    const [{ sessions }, teachers] = await Promise.all([
      studentApi.getMySessions({ type: 'VIDEO' }),
      studentApi.getAvailableTeachers({ limit: 5 }),
    ]);

    const activeSession = (sessions as any[]).find((s) => s.status === 'ACTIVE');
    const pendingSessions = (sessions as any[]).filter((s) => s.status === 'PENDING');

    const liveNow = activeSession
      ? {
        teacher: activeSession.teacher?.fullName ?? 'Teacher',
        topic: activeSession.topic ?? 'Live Class Session',
        startTime: activeSession.startedAt
          ? `Started ${new Date(activeSession.startedAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}`
          : 'Live Now',
        viewers: '0',
        tag: activeSession.type ?? 'LIVE',
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${activeSession.teacher?.fullName ?? 'teacher'}`,
        sessionId: activeSession.id,
      }
      : teachers?.length
        ? {
          teacher: teachers[0].fullName,
          topic: teachers[0].qualification ?? 'Expert Session Available',
          startTime: 'Available Now',
          viewers: '0',
          tag: 'LIVE',
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${teachers[0].fullName}`,
          sessionId: null,
        }
        : null;

    const upcoming = pendingSessions.map((s: any) => ({
      id: s.id,
      teacher: s.teacher?.fullName ?? 'Teacher',
      topic: s.topic ?? 'Upcoming Class',
      time: s.startedAt
        ? new Date(s.startedAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
        : 'TBD',
      date: s.startedAt
        ? new Date(s.startedAt).toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' })
        : 'Scheduled',
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${s.teacher?.fullName ?? s.id}`,
      sessionId: s.id,
    }));

    return { liveNow, upcoming };
  },

  getSessionDetails: async (sessionId?: string) => {
    if (!sessionId) {
      const { sessions } = await studentApi.getMySessions({ status: 'ACTIVE' });
      const active = (sessions as any[])[0];
      if (!active) return null;
      return studentApi.getSessionById(active.id);
    }
    return studentApi.getSessionById(sessionId);
  },

  getOrderSummary: async (planId: string) => {
    const plan = await studentApi.getPlanById(planId);
    // Note: This uses client-side calc because no coupon/discount API exists yet
    // In production, replace with: POST /api/v1/coupon/apply { planId, couponCode }
    const subtotal = Math.round(plan.price);
    const discountAmount = Math.round(subtotal * 0.15);
    const discountApplied = Math.round(discountAmount * 0.1);
    const total = subtotal - discountAmount;
    return {
      subtotal,
      discountAmount,
      discountApplied,
      shipping: 0,
      total,
      couponCode: 'VLM110',
      planName: plan.name,
    };
  },

  getChaptersBySubjectId: async (subjectId: string) => {
    const { data } = await apiClient.get(`/subjects/${subjectId}/chapters`);
    return data.chapters;
  },

  // ── Plans ─────────────────────────────────────────────────
  getPlans: async () => {
    const { data } = await apiClient.get('/plans');
    return data.plans;
  },

  getPlanById: async (id: string) => {
    const { data } = await apiClient.get(`/plans/${id}`);
    return data.plan;
  },

  // ── Subscription ──────────────────────────────────────────
  getMySubscription: async () => {
    const { data } = await apiClient.get('/subscriptions/me');
    return data.subscription;
  },

  activateTrial: async (planId?: string) => {
    const { data } = await apiClient.post('/subscriptions/trial', planId ? { planId } : {});
    return data;
  },

  cancelSubscription: async () => {
    const { data } = await apiClient.delete('/subscriptions/cancel');
    return data;
  },

  // ── Payments ──────────────────────────────────────────────
  createPaymentOrder: async (planId: string) => {
    const { data } = await apiClient.post('/payments/create-order', { planId });
    return data.data;
  },

  verifyPayment: async (payload: {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
    paymentId: string;
  }) => {
    const { data } = await apiClient.post('/payments/verify', payload);
    return data;
  },

  getPaymentHistory: async () => {
    const { data } = await apiClient.get('/payments/history');
    return data.payments;
  },

  // ── Doubts ────────────────────────────────────────────────
  submitDoubt: async (payload: {
    subjectId?: string;
    chapterId?: string;
    text?: string;
    sessionType?: string;
    images?: string[];
  }) => {
    const { data } = await apiClient.post('/doubts', payload);
    return data.doubt;
  },

  submitDoubtWithImages: async (formData: FormData) => {
    const { data } = await apiClient.post('/doubts', formData);
    return data.doubt;
  },


  getMyDoubts: async (params?: { status?: string; page?: number; limit?: number }) => {
    const query = new URLSearchParams();
    if (params?.status) query.set('status', params.status);
    if (params?.page) query.set('page', String(params.page));
    if (params?.limit) query.set('limit', String(params.limit));
    const { data } = await apiClient.get(`/doubts/me?${query.toString()}`);
    return data;
  },

  getDoubtById: async (id: string) => {
    const { data } = await apiClient.get(`/doubts/${id}`);
    return data.doubt;
  },

  // ── Sessions ──────────────────────────────────────────────
  getMySessions: async (params?: { type?: string; status?: string; page?: number }) => {
    const query = new URLSearchParams();
    if (params?.type) query.set('type', params.type);
    if (params?.status) query.set('status', params.status);
    if (params?.page) query.set('page', String(params.page));
    const { data } = await apiClient.get(`/sessions/me?${query.toString()}`);
    return data;
  },

  getSessionById: async (id: string) => {
    const { data } = await apiClient.get(`/sessions/${id}`);
    return data.session;
  },

  submitFeedback: async (payload: {
    sessionId?: string;
    doubtId?: string;
    rating: number;
    solved?: boolean;
    comment?: string;
  }) => {
    const { data } = await apiClient.post('/sessions/feedback', payload);
    return data.feedback;
  },

  // ── Teachers ──────────────────────────────────────────────
  getAvailableTeachers: async (params?: { page?: number; limit?: number }) => {
    const query = new URLSearchParams();
    if (params?.page) query.set('page', String(params.page));
    if (params?.limit) query.set('limit', String(params.limit));
    const { data } = await apiClient.get(`/teacher/available?${query.toString()}`);
    return data.teachers;
  },

  // ── Chat ──────────────────────────────────────────────────
  createOrGetChat: async (teacherId?: string) => {
    const studentProfile = await studentApi.getProfile();
    const { data } = await apiClient.post('/chat', {
      studentId: studentProfile.id,
      teacherId,
    });
    return data.chat;
  },

  getChatMessages: async (chatId: string, page = 1) => {
    const { data } = await apiClient.get(`/chat/${chatId}/messages?page=${page}`);
    return data;
  },

  sendChatMessage: async (chatId: string, payload: { senderId: string; senderType: string; content: string }) => {
    const { data } = await apiClient.post(`/chat/${chatId}/messages`, payload);
    return data.message;
  },

  // ── Referral ──────────────────────────────────────────────
  getReferralData: async () => {
    const { data } = await apiClient.get('/student/referral');
    return data;
  },

  getReferralHistory: async () => {
    const { data } = await apiClient.get('/student/referral/history');
    return data.referrals;
  },

  applyReferralCode: async (code: string) => {
    const { data } = await apiClient.post('/student/referral/apply', { code });
    return data;
  },

  // ── MCQ ───────────────────────────────────────────────────
  getDailyMcq: async () => {
    const { data } = await apiClient.get('/student/mcq/daily');
    return data;
  },

  submitMcqAttempt: async (questionId: string, selectedOpt: string) => {
    const { data } = await apiClient.post('/student/mcq/attempt', { questionId, selectedOpt });
    return data;
  },

  // ── Support Tickets ───────────────────────────────────────
  createTicket: async (subject: string, description: string) => {
    const { data } = await apiClient.post('/tickets', { subject, description });
    return data.ticket;
  },

  getMyTickets: async () => {
    const { data } = await apiClient.get('/tickets/me');
    return data.tickets;
  },
};
