import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  ChevronLeft, 
  MessageCircle, 
  Star, 
  Trophy, 
  Users, 
  Home, 
  GraduationCap, 
  BarChart3, 
  UserCircle,
  Sparkles
} from "lucide-react";
import { bgCss } from "@/helper/CssHelper";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import ProfileStatCard from "@/components/basic/parent/profileStat_Card";
import ReviewCard from "@/components/basic/parent/ReviewCard";

const StudentProfile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={cn("min-h-screen flex flex-col items-center p-4 pb-28 relative overflow-x-hidden", bgCss)}>
      
      {/* App Bar Navigation */}
      <header className="w-full max-w-xl flex items-center justify-between py-4 mb-4 z-50">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button className="flex flex-col items-center gap-1 group">
          <div className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
            <MessageCircle size={28} />
          </div>
          <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">Message</span>
        </button>
      </header>

      <div className="w-full max-w-xl mx-auto space-y-6">
        
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />
            <Avatar className="w-28 h-28 border-4 border-white/5 ring-4 ring-white/5 shadow-2xl relative z-10">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Evelyn" />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-2 -right-2 text-purple-500/40 blur-[1px]">
              <Sparkles size={24} fill="currentColor" />
            </div>
          </div>
          <div className="space-y-1">
            <h1 className="text-3xl font-black text-white tracking-tight">Dr. Evelyn Reed</h1>
            <p className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest">
              Senior Mathematics & Physics Instructor
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="space-y-3">
          <ProfileStatCard 
            variant="yellow"
            icon={<Star size={20} fill="currentColor" />}
            value="4.9"
            label="Rating"
            subLabel="320 ratings"
          />
          <ProfileStatCard 
            variant="cyan"
            icon={<Trophy size={20} />}
            value="12"
            label="Years Experience"
          />
          <ProfileStatCard 
            variant="zinc"
            icon={<Users size={20} />}
            value="5,000+"
            label="Total Students Taught"
          />
        </div>

        {/* About Card */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-7 rounded-[32px] border border-white/5 bg-white/[0.01] backdrop-blur-xl space-y-6"
        >
          <div className="space-y-3">
            <h3 className="text-[13px] font-black text-zinc-100 uppercase tracking-widest border-b border-white/5 pb-2">
              About Dr. Reed
            </h3>
            <p className="text-[13px] text-zinc-400 font-medium leading-relaxed">
              Ph.D. in Physics. Passionate about simplifying complex concepts and fostering critical thinking skills.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-[13px] font-black text-zinc-100 uppercase tracking-widest border-b border-white/5 pb-2">
              Subjects Taught
            </h3>
            <ul className="grid grid-cols-2 gap-y-2 text-[13px] text-zinc-400 font-medium">
              <li>Algebra</li>
              <li>Calculus</li>
              <li>Mechanics</li>
              <li>Quantum Physics</li>
            </ul>
          </div>
        </motion.div>

        {/* Reviews Section */}
        <div className="pt-4 space-y-4">
          <h2 className="text-lg font-black text-white ml-2 tracking-tight">Student Reviews</h2>
          <ReviewCard 
            reviewId={1}
            reviewerName="Sarah J."
            date="Aug 15, 2024"
            rating={5}
            avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
            comment="Dr. Reed's explanations are incredibly clear. Changed my understanding of Calculus! Highly recommend."
          />
          <ReviewCard 
            reviewId={2}
            reviewerName="Mark D."
            date="Aug 10, 2024"
            rating={5}
            avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Mark"
            comment="Extremely patient and passionate. The problem-solving sessions are invaluable. Thank you!"
          />
        </div>
      </div>

      {/* Persistent Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full bg-[#0a0a0a]/95 border-t border-white/5 backdrop-blur-lg px-8 py-4 flex items-center justify-between z-50">
        <NavItem icon={<Home />} label="Home" />
        <NavItem icon={<GraduationCap />} label="Learning" />
        <NavItem icon={<BarChart3 />} label="Analytics" />
        <NavItem icon={<UserCircle />} label="Profile" active />
      </nav>
    </div>
  );
};

// Internal Navigation Helper
const NavItem = ({ icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <button className={cn(
    "flex flex-col items-center gap-1.5 transition-all duration-300",
    active ? "text-cyan-400" : "text-zinc-600 hover:text-zinc-400"
  )}>
    <div className={cn("relative transition-transform duration-300", active && "scale-110 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]")}>
      {React.cloneElement(icon, { size: 24, strokeWidth: active ? 2.5 : 1.5 })}
    </div>
    <span className="text-[10px] font-bold tracking-tight">{label}</span>
  </button>
);

export default StudentProfile;