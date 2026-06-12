// src/pages/TeacherProfile.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  ChevronLeft, MessageSquare, Star, Trophy, Users, 
  Home, HelpCircle, LayoutGrid, User 
} from "lucide-react";
import { motion } from "framer-motion";
import { bgCss } from "@/helper/CssHelper";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { StatCard } from "@/components/basic/parent/StatCard";
import ReviewCard  from "@/components/basic/parent/ReviewCard";

const TeacherProfile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={cn("h-screen w-full flex justify-center overflow-hidden", bgCss)}>
      <div className="w-full max-w-xl flex flex-col relative h-full">
        
        {/* Header Navigation */}
        <header className="p-6 flex items-center justify-between z-10">
          <button 
            onClick={() => navigate(-1)}
            className="h-11 w-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <ChevronLeft className="text-white" size={20} />
          </button>
          
          <button className="flex flex-col items-center group">
            <MessageSquare className="text-cyan-400 group-active:scale-90 transition-transform" size={28} />
            <span className="text-[10px] font-black text-cyan-400 uppercase tracking-tighter">Message</span>
          </button>
        </header>

        {/* Scrollable Content */}
        <ScrollArea className="flex-1 px-6 pb-28">
          <div className="flex flex-col items-center pt-2">
            
            {/* Identity Section */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative mb-6"
            >
              <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full" />
              <Avatar className="h-32 w-32 border-4 border-white/5 ring-4 ring-cyan-500/20">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Evelyn" />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </motion.div>
            
            <h1 className="text-3xl font-bold text-white mb-1 tracking-tight">Dr. Evelyn Reed</h1>
            <p className="text-zinc-400 text-sm font-semibold tracking-wide mb-8">
              Senior Mathematics & Physics Instructor
            </p>

            {/* Stats Section */}
            <div className="w-full space-y-3 mb-6">
              <StatCard 
                index={0}
                icon={<Star className="fill-yellow-500" />}
                value="4.9"
                label="Rating"
                subLabel="320 ratings"
                borderColor="border-yellow-500/30"
                iconColor="text-yellow-500"
              />
              <StatCard 
                index={1}
                icon={<Trophy />}
                value="12"
                label="Years Experience"
                borderColor="border-cyan-500/30"
                iconColor="text-cyan-400"
              />
              <StatCard 
                index={2}
                icon={<Users />}
                value="5,000+"
                label="Total Students Taught"
                borderColor="border-zinc-800"
                iconColor="text-zinc-500"
              />
            </div>

            {/* About Card */}
            <div className="w-full p-6 rounded-[32px] bg-white/5 border border-white/10 mb-8 space-y-6">
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">About Dr. Reed</h3>
                <Separator className="bg-white/10" />
                <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                  Ph.D. in Physics. Passionate about simplifying complex concepts and fostering critical thinking skills.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Subjects Taught</h3>
                <Separator className="bg-white/10" />
                <div className="flex flex-col gap-1 text-sm text-zinc-400 font-medium">
                  <span>Algebra</span><span>Calculus</span><span>Mechanics</span><span>Quantum Physics</span>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="w-full space-y-2">
              <ReviewCard 
                id={1}
                rating={5}
                author="Sarah J."
                date="Aug 15, 2024"
                avatarUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                text="Dr. Reed's explanations are incredibly clear. Changed my understanding of Calculus! Highly recommend."
              />
              <ReviewCard 
                id={2}
                rating={5}
                author="Mark D."
                date="Aug 10, 2024"
                avatarUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=Mark"
                text="Extremely patient and passionate. The problem-solving sessions are invaluable. Thank you!"
              />
            </div>
          </div>
        </ScrollArea>

        {/* Bottom Navigation */}
        <nav className="absolute bottom-0 left-0 right-0 h-20 bg-[#0a0a0c]/90 backdrop-blur-xl border-t border-white/5 flex items-center justify-around px-6">
          <NavIcon icon={Home} label="Home" />
          <NavIcon icon={HelpCircle} label="Learning" />
          <NavIcon icon={LayoutGrid} label="Analytics" />
          <NavIcon icon={User} label="Profile" active />
        </nav>
      </div>
    </div>
  );
};

const NavIcon = ({ icon: Icon, label, active }: { icon: any; label: string; active?: boolean }) => (
  <button className={cn(
    "flex flex-col items-center gap-1 transition-all active:scale-95",
    active ? "text-cyan-400" : "text-zinc-500"
  )}>
    <Icon size={24} strokeWidth={active ? 2.5 : 2} />
    <span className="text-[10px] font-bold">{label}</span>
  </button>
);

export default TeacherProfile;