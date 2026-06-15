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
import SubjectSelection from "./pages/SubjectSelection";
import PlanScreen from "./pages/student/PlanScreen";
import PaymentFailed from "./pages/student/PaymentFailed";
import DoubtSubmitted from "./pages/student/DoubtSubmitted";
import Coupon from "./pages/student/Coupon";
import PlanUpgrade from "./pages/student/PlanUpgrade";
import ReferralReward from "./pages/student/ReferralReward";
import EditProfile from "./pages/student/EditProfile";
import { PATHS } from "@/routes/paths";
import TeacherRegistration from "./pages/teacher/TeacherRegistration";
import TeacherQualificationDetails from "./pages/teacher/TeacherQualificationDetails";
import BasicProfileDetails from "./pages/teacher/stepper/BasicProfileDetails";
import TeacherExperienceDetails from "./pages/teacher/stepper/TeacherExperienceDetails";
import TeacherClassSelection from "./pages/teacher/stepper/TeacherClassSelection";
import IndividualClassSelection from "./pages/teacher/IndividualClassSelection";
import BoardSelection from "./pages/teacher/stepper/BoardSelection";
import LanguageSelection from "./pages/teacher/stepper/LanguageSelection";
import DocumentUpload from "./pages/teacher/stepper/DocumentUpload";
import InterviewScheduling from "./pages/teacher/InterviewScheduling";
import TeacherDemoVideo from "./pages/teacher/TeacherDemoVideo";
import ProfileReview from "./pages/teacher/ProfileReview";
import InterviewConfirmation from "./pages/teacher/InterviewConfirmation";
import VerificationStatus from "./pages/teacher/VerificationStatus";
import ApplicationRejected from "./pages/teacher/ApplicationRejected";
import Dashboard from "./pages/teacher/Dashboard";
import AvailabilityStatus from "./pages/teacher/AvailabilityStatus";
import TimeSlotAvailability from "./pages/teacher/TimeSlotAvailability";
import DirectRequestNotification from "./pages/teacher/DirectRequestNotification";
import TeacherSession from "./pages/teacher/TeacherSession";
import SessionWarningPage from "./pages/teacher/SessionWarningPage";
import ResolveDoubtPage from "./pages/teacher/ResolveDoubtPage";
import AudioCallInitiated from "./pages/teacher/AudioCallInitiated";
import WhiteboardSession from "./pages/teacher/WhiteboardSession";
import RecordingLibrary from "./pages/teacher/RecordingLibrary";
import CreateLiveClassRequest from "./pages/teacher/CreateLiveClassRequest";
import LiveClassRequestStatus from "./pages/teacher/LiveClassRequestStatus";
import TeacherSessionCompletion from "./pages/teacher/TeacherSessionCompletion";
import Notifications from "./pages/teacher/Notifications";
import HelpCenter from "./pages/teacher/HelpCenter";
import CreateSupportTicket from "./pages/teacher/CreateSupportTicket";
import TicketDetail from "./pages/TicketDetail";
import TeachSessionHistory from "./pages/teacher/TeachSessionHistory";
import SessionDetail from "./pages/teacher/SessionDetail";
import PerformanceAnalytics from "./pages/teacher/PerformanceAnalytics";
import Requests from "./pages/teacher/Requests";
import AccountStatus from "./pages/teacher/AccountStatus";
import AccountBlocked from "./pages/teacher/AccountBlocked";
import ConnectionLost from "./pages/teacher/ConnectionLost";
import ProfileReviewStatus from "./pages/teacher/ProfileReviewStatus";
import UploadError from "./pages/teacher/UploadError";
import SessionInterruption from "./pages/SessionInterruption";
import WithdrawalProcessing from "./pages/WithdrawalProcess";
import WithdrawalFailed from "./pages/teacher/WithdrawalFailed";
import ReferralRewardCredited from "./pages/teacher/ReferralRewardCredited";
import InvalidReferralStatus from "./pages/teacher/InvalidReferralStatus";
import ApplicationStatus from "./pages/teacher/ApplicationStatus";
import RecordingProcessing from "./pages/teacher/RecordingProcessing";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import TeacherLogin from "./pages/teacher/TeacherLogin";
import ChatSession from "./pages/teacher/ChatSession";
import RequestsPage from "./pages/teacher/RequestsPage";
import WithdrawalProcess from "./pages/WithdrawalProcess";

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

          {/* Onboarding STUDENT */}
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

          {/* Onboarding TEACHER */}
          <Route path={PATHS.TEACHER_REGISTRATION} element={<TeacherRegistration />} />
          <Route path={PATHS.QUALIFICATION_DETAILS} element={<TeacherQualificationDetails />} />
          <Route path={PATHS.BASICPROFILE_DETAILS} element={<BasicProfileDetails />} />
          <Route path={PATHS.EXPERIENCE_DETAILS} element={<TeacherExperienceDetails />} />
          <Route path={PATHS.TEACHERCLASS_SELECTION} element={<TeacherClassSelection />} />
          <Route path={PATHS.CLASS_SELECTION} element={<IndividualClassSelection />} />
          <Route path={PATHS.BOARDSELECTION_CARD} element={<BoardSelection />} />
          <Route path={PATHS.LANGUAGAE_SELECTION} element={<LanguageSelection />} />
          <Route path={PATHS.DOCUMENT_UPLOAD} element={<DocumentUpload />} />
          <Route path={PATHS.INTERVIEW_SCHEDULING} element={<InterviewScheduling />} />
          <Route path={PATHS.VIDEO_DEMO} element={<TeacherDemoVideo />} />
          <Route path={PATHS.PROFILE_REVIEW} element={<ProfileReview />} />
          <Route path={PATHS.INTERVIEW_CONFIRM} element={<InterviewConfirmation />} />
          <Route path={PATHS.VERIFICATION_STATUS} element={<VerificationStatus />} />
          <Route path={PATHS.APPLICATION_REJECTED} element={<ApplicationRejected />} />
          <Route path={PATHS.TEACHER_DASHBOARD} element={<Dashboard />} />
          <Route path={PATHS.AVAILABILITY_STATUS} element={<AvailabilityStatus />} />
          <Route path={PATHS.SLOT_AVAILABLILITY} element={<TimeSlotAvailability />} />
          <Route path={PATHS.REQUEST_NOTIFICATION} element={<DirectRequestNotification />} />
          <Route path={PATHS.TEACHER_SESSION} element={<TeacherSession />} />
          <Route path={PATHS.SESSION_WARNING} element={<SessionWarningPage />} />
          <Route path={PATHS.RESOLVE_DOUBT} element={<ResolveDoubtPage />} />
          <Route path={PATHS.AUDIO_CALLINITIIATED} element={<AudioCallInitiated />} />
          <Route path={PATHS.TEACHERLIVE_SESSION} element={<LiveSession />} />
          <Route path={PATHS.WHITEBOARD_SESSION} element={<WhiteboardSession />} />
          <Route path={PATHS.RECORDING_LIBRARY} element={<RecordingLibrary />} />
          <Route path={PATHS.LIVE_CLASS} element={<CreateLiveClassRequest />} />
          <Route path={PATHS.LIVECLASS_REQUEST} element={<LiveClassRequestStatus />} />
          <Route path={PATHS.SESSION_COMPLETION} element={<TeacherSessionCompletion />} />
          <Route path={PATHS.TEACHER_NOTIFICATION} element={<Notifications />} />
          <Route path={PATHS.HELP_CENTRE} element={<HelpCenter />} />
          <Route path={PATHS.SUPPORT_TICKET} element={<CreateSupportTicket />} />
          <Route path={PATHS.TICKET_DETAILS} element={<TicketDetail />} />
          <Route path={PATHS.TEACHERSESSION_HISTORY} element={<TeachSessionHistory/>} />
          <Route path={PATHS.SESSION_DEATILS} element={<SessionDetail/>} />
          <Route path={PATHS.PERFORMANCE_ANALYTICS} element={<PerformanceAnalytics/>} />
          <Route path={PATHS.REQUEST} element={<Requests/>} />
          <Route path={PATHS.ACCOUNT_STATUS} element={<AccountStatus/>} />
          <Route path={PATHS.ACCOUNT_BLOCKED} element={<AccountBlocked/>} />
          <Route path={PATHS.CONNECTION_LOST} element={<ConnectionLost/>} />
          <Route path={PATHS.REVIEW_STATUS} element={<ProfileReviewStatus/>} />
          <Route path={PATHS.UPLOAD_ERROR} element={<UploadError/>} />
          <Route path={PATHS.SESSION_INTERRUPTION} element={<SessionInterruption/>} />
          <Route path={PATHS.WITHDRAWAL_PROCESSING} element={<WithdrawalProcessing/>} />
          <Route path={PATHS.WITHDRAWAL_FAILED} element={<WithdrawalFailed/>} />
          <Route path={PATHS.REFERRAL_CREDITED} element={<ReferralRewardCredited/>} />
          <Route path={PATHS.INVALID_REFERRAL} element={<InvalidReferralStatus/>} />
          <Route path={PATHS.APPLICATION_STATUS} element={<ApplicationStatus/>} />
          <Route path={PATHS.RECORDING_PROCESSING} element={<RecordingProcessing/>} />
          <Route path={PATHS.TEACHERDASH_BOARD} element={<TeacherDashboard/>} />
          <Route path={PATHS.TEACHER_LOGIN} element={<TeacherLogin/>} />
          <Route path={PATHS.CHAT_SESSION} element={<ChatSession/>} />
          <Route path={PATHS.TEACHERTICKET_DETAILS} element={<TicketDetail/>} />
          <Route path={PATHS.SESSSION_HISTORY} element={<SessionHistory/>} />
          <Route path={PATHS.REQUEST_PAGE} element={<RequestsPage/>} />
          
          






          
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
