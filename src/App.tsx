import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import SplashPage from "@/pages/SplashPage";
import RoleSelectPage from "@/pages/RoleSelectPage";
import LoginPage from "@/pages/LoginPage";
import OtpPage from "@/pages/OtpPage";
import DashboardPage from "@/pages/DashboardPage";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import CreateProfile from "./pages/CreateProfile";
import LearningPlan from "./pages/student/LearningPlan";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentLayout from "./components/layout/StudentLayout";
import AskDoubt from "./pages/student/AskDoubt";
import AudioCall from "./pages/student/AudioCall";
import Mcq from "./pages/student/Mcq";
import Spinner from "./pages/student/Spinner";
import LiveClasses from "./pages/student/LiveClasses";
import VideoUpload from "./pages/student/VideoUpload";
import ReferEarn from "./pages/ReferEarn";
import ReferralHistory from "./pages/student/ReferralHistory";
import LiveSession from "./pages/student/LiveSession";
import SessionFeedback from "./pages/student/SessionFeedBack";
import SessionHistory from "./pages/student/SessionHistory";
// import ShortSessions from "./pages/student/ShortLiveSession";
import ShortLiveSessions from "./pages/student/ShortLiveSession";
import SubjectSelection from "./pages/student/SubjectSelection";
import PlanScreen from "./pages/student/PlanScreen";
import PaymentFailed from "./pages/student/PaymentFailed";
import DoubtSubmitted from "./pages/student/DoubtSubmitted";
import Coupon from "./pages/student/Coupon";
import PlanUpgrade from "./pages/student/PlanUpgrade";
import ReferralReward from "./pages/student/ReferralReward";
import EditProfile from "./pages/student/EditProfile";
// ── TanStack Query client ──────────────────────────────────
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,   // 5 min
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<SplashPage />} />
          <Route path="/role-select" element={<RoleSelectPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/otp" element={<OtpPage />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/refer-earn" element={<ReferEarn />} />
          <Route path="/referral-history" element={<ReferralHistory />} />
          


          {/* Student routes */}
          <Route path="/learning-plan" element={<LearningPlan />} />


          <Route path="/live-session" element={<LiveSession />} />
          <Route path="/short-live-session" element={<ShortLiveSessions />} />
          <Route path="/session-feedback" element={<SessionFeedback />} />
          <Route path="/session-history" element={<SessionHistory />} />

          <Route path="/subject-selection" element={<SubjectSelection />} />

          <Route path="/plan-screen" element={<PlanScreen />} />
          <Route path="/plan-upgrade" element={<PlanUpgrade />} />

          <Route path="/payment-failed" element={<PaymentFailed />} />

          <Route path="/doubt-submitted" element={<DoubtSubmitted />} />

          <Route path="/coupon" element={<Coupon />} />


          <Route element={<StudentLayout />}>

            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/ask-doubt" element={<AskDoubt />} />
            <Route path="/audio-call" element={<AudioCall />} />
            <Route path="/Mcq" element={<Mcq />} />
            <Route path="/live-classes" element={<LiveClasses />} />
            <Route path="/video-upload" element={<VideoUpload />} />
            <Route path="/referral-reward" element={<ReferralReward />} />
            <Route path="/profile" element={<EditProfile />} />

          </Route>
            <Route path="/spinner" element={<Spinner />} />



          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
