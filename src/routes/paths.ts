export const PATHS = {
  // Public auth
  SPLASH: "/",
  ROLE_SELECT: "/role-select",
  LOGIN: "/login",
  OTP: "/otp",
  COMING_SOON: "/coming-soon",

  // Onboarding
  CREATE_PROFILE: "/create-profile",
  SUBJECT_SELECTION: "/subject-selection",
  LEARNING_PLAN: "/learning-plan",
  COUPON: "/coupon",
  PLAN_SCREEN: "/plan-screen",
  PAYMENT_FAILED: "/payment-failed",

  // Student tabs (StudentLayout)
  STUDENT_DASHBOARD: "/student-dashboard",
  ASK_DOUBT: "/ask-doubt",
  MCQ: "/mcq",
  LIVE_CLASSES: "/live-classes",
  PROFILE: "/profile",

  // Student flows
  VIDEO_UPLOAD: "/video-upload",
  DOUBT_SUBMITTED: "/doubt-submitted",
  AUDIO_CALL: "/audio-call",
  LIVE_SESSION: "/live-session",
  SHORT_LIVE_SESSION: "/short-live-session",
  SESSION_FEEDBACK: "/session-feedback",
  SESSION_HISTORY: "/session-history",
  SPINNER: "/spinner",
  REFER_EARN: "/refer-earn",
  REFERRAL_HISTORY: "/referral-history",
  REFERRAL_REWARD: "/referral-reward",
  PLAN_UPGRADE: "/plan-upgrade",

  // Legacy
  DASHBOARD: "/dashboard",
} as const;

export type AppPath = (typeof PATHS)[keyof typeof PATHS];
