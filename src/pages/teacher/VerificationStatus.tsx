import React from "react";
import { motion } from "framer-motion";
import { 
  FileEdit, 
  Send, 
  CalendarCheck, 
  UserSearch, 
  ShieldCheck, 
  Info,
  Star
} from "lucide-react";
import { bgCss } from "@/helper/CssHelper";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import TimelineItem from "@/components/basic/teacher/TimelineItem";

const VerificationStatus: React.FC = () => {
  const steps = [
    {
      id: "draft",
      icon: <FileEdit />,
      title: "Draft",
      description: "Profile in Draft",
      status: "completed" as const,
    },
    {
      id: "submitted",
      icon: <Send />,
      title: "Submitted",
      description: "Verification Submitted",
      status: "completed" as const,
    },
    {
      id: "scheduled",
      icon: <CalendarCheck />,
      title: "Interview Scheduled",
      description: "Interview Scheduled",
      status: "completed" as const,
    },
    {
      id: "review",
      icon: <UserSearch />,
      title: "Under Review",
      description: "Application Under Review (Estimated 2-3 days)",
      status: "active" as const,
    },
    {
      id: "approved",
      icon: <ShieldCheck />,
      title: "Approved",
      description: "Verification Approved (Start Teaching Soon)",
      status: "pending" as const,
    },
  ];

  return (
    <div className={cn("min-h-screen flex flex-col items-center p-4 pb-12 relative overflow-hidden", bgCss)}>
      
      {/* Decorative Assets */}
      <div className="absolute top-1/4 -left-4 text-cyan-400/20 blur-[1px] rotate-45">
        <Star size={16} fill="currentColor" />
      </div>
      <div className="absolute top-[40%] -right-3 text-purple-500/30 blur-[1px]">
        <Star size={20} fill="currentColor" />
      </div>
      <div className="absolute bottom-[20%] -left-3 text-cyan-500/20 blur-[1px]">
        <Star size={16} fill="currentColor" />
      </div>
      <div className="absolute bottom-10 right-4 text-zinc-600/30 blur-[1px]">
        <Star size={12} fill="currentColor" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          "w-full max-w-xl p-8 rounded-[48px] border border-white/10 mt-6",
          "bg-white/[0.02] backdrop-blur-3xl shadow-2xl relative"
        )}
      >
        <header className="text-center mb-12">
          <h1 className="text-3xl font-black text-white tracking-tight mb-2">
            Verification Status
          </h1>
          <p className="text-zinc-500 text-sm font-medium tracking-wide">
            Keep track of your application progress.
          </p>
        </header>

        {/* Timeline Content */}
        <div className="px-2 mb-12">
          {steps.map((step, index) => (
            <TimelineItem
              key={step.id}
              icon={step.icon}
              title={step.title}
              description={step.description}
              status={step.status}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Footer Info */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] text-zinc-600 font-bold tracking-widest uppercase">
            Verification ID: VLM-100234 | Applicant: Dr. Eleanor Reed
          </p>
        </div>
      </motion.div>

      {/* Floating Action Button */}
      <div className="fixed bottom-0 left-0 w-full p-8 flex justify-center bg-gradient-to-t from-black to-transparent pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xl pointer-events-auto"
        >
          <Button
            variant="outline"
            className={cn(
              "w-full h-14 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md",
              "text-zinc-300 font-bold flex items-center justify-center gap-3 hover:bg-white/5 transition-all"
            )}
          >
            Have Questions? Contact Support
            <div className="w-6 h-6 rounded-full border border-zinc-500 flex items-center justify-center">
              <Info size={14} className="text-zinc-500" />
            </div>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default VerificationStatus;