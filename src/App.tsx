import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import SplashPage from "@/pages/SplashPage";
import RoleSelectPage from "@/pages/RoleSelectPage";
import LoginPage from "@/pages/LoginPage";
import OtpPage from "@/pages/OtpPage";
import ComingSoonPage from "@/pages/ComingSoonPage";
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
import ShortLiveSessions from "./pages/student/ShortLiveSession";
import SubjectSelection from "./pages/student/SubjectSelection";
import PlanScreen from "./pages/student/PlanScreen";
import PaymentFailed from "./pages/student/PaymentFailed";
import DoubtSubmitted from "./pages/student/DoubtSubmitted";
import Coupon from "./pages/student/Coupon";
import PlanUpgrade from "./pages/student/PlanUpgrade";
import ReferralReward from "./pages/student/ReferralReward";
import EditProfile from "./pages/student/EditProfile";
import { PATHS } from "@/routes/paths";
import AddChild from "./pages/Parent/Addchild";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
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
          {/* Public auth */}
          <Route path={PATHS.SPLASH} element={<SplashPage />} />
          <Route path={PATHS.ROLE_SELECT} element={<RoleSelectPage />} />
          <Route path={PATHS.LOGIN} element={<LoginPage />} />
          <Route path={PATHS.OTP} element={<OtpPage />} />
          <Route path={PATHS.COMING_SOON} element={<ComingSoonPage />} />

          {/* Onboarding */}
          <Route path={PATHS.CREATE_PROFILE} element={<CreateProfile />} />
          <Route path={PATHS.SUBJECT_SELECTION} element={<SubjectSelection />} />
          <Route path={PATHS.LEARNING_PLAN} element={<LearningPlan />} />
          <Route path={PATHS.COUPON} element={<Coupon />} />
          <Route path={PATHS.PLAN_SCREEN} element={<PlanScreen />} />
          <Route path={PATHS.PAYMENT_FAILED} element={<PaymentFailed />} />

          {/* Student tabs */}
          <Route element={<StudentLayout />}>
            <Route path={PATHS.STUDENT_DASHBOARD} element={<StudentDashboard />} />
            <Route path={PATHS.ASK_DOUBT} element={<AskDoubt />} />
            <Route path={PATHS.MCQ} element={<Mcq />} />
            <Route path={PATHS.LIVE_CLASSES} element={<LiveClasses />} />
            <Route path={PATHS.PROFILE} element={<EditProfile />} />
            <Route path={PATHS.VIDEO_UPLOAD} element={<VideoUpload />} />
            <Route path={PATHS.REFERRAL_REWARD} element={<ReferralReward />} />
          </Route>

          {/* Student flows (immersive) */}
          <Route path={PATHS.AUDIO_CALL} element={<AudioCall />} />
          <Route path={PATHS.LIVE_SESSION} element={<LiveSession />} />
          <Route path={PATHS.SHORT_LIVE_SESSION} element={<ShortLiveSessions />} />
          <Route path={PATHS.SESSION_FEEDBACK} element={<SessionFeedback />} />
          <Route path={PATHS.SESSION_HISTORY} element={<SessionHistory />} />
          <Route path={PATHS.DOUBT_SUBMITTED} element={<DoubtSubmitted />} />
          <Route path={PATHS.SPINNER} element={<Spinner />} />
          <Route path={PATHS.REFER_EARN} element={<ReferEarn />} />
          <Route path={PATHS.REFERRAL_HISTORY} element={<ReferralHistory />} />
          <Route path={PATHS.PLAN_UPGRADE} element={<PlanUpgrade />} />



          {/* Parent Module */} 
            <Route path={PATHS.PARENT_MODULE} element={<AddChild />} />
          {/* Protected legacy */}
          <Route element={<ProtectedRoute />}>
            <Route path={PATHS.DASHBOARD} element={<DashboardPage />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to={PATHS.SPLASH} replace />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
