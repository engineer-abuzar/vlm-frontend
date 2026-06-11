import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Star } from "lucide-react";
import { bgCss } from "@/helper/CssHelper";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import RegistrationStepper from "@/components/basic/teacher/RegistrationStepper";
import InstructionsCard from "@/components/basic/teacher/InstructionsCard";
import VideoPreviewCard from "@/components/basic/teacher/VideoPreviewCard";
import SubjectSelector from "@/components/basic/teacher/SubjectSelector";

const TeacherDemoVideo: React.FC = () => {
  return (
    <div className={cn("min-h-screen flex flex-col p-4 pb-12 relative overflow-x-hidden", bgCss)}>
      {/* Decorative Assets */}
      <div className="absolute top-24 -right-2 text-purple-500/30 blur-[1px]">
        <Star size={20} fill="currentColor" />
      </div>
      <div className="absolute bottom-[20%] -left-3 text-cyan-500/20 blur-[1px] rotate-45">
        <Star size={16} fill="currentColor" />
      </div>

      {/* Stepper Header (Reusing existing component) */}
      <RegistrationStepper currentStep={3} />

      <div className="max-w-xl mx-auto w-full space-y-6">
        {/* Instructions */}
        <InstructionsCard />

        {/* Video Upload Area */}
        <VideoPreviewCard />

        {/* Subject Selection */}
        <SubjectSelector />

        {/* Action Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-4"
        >
          <Button className="w-full h-16 rounded-full text-lg font-black tracking-tighter uppercase transition-all flex items-center justify-center gap-3 bg-[#1A2E5D] hover:bg-[#254185] border border-blue-400/20 shadow-2xl text-white group">
            Submit for Review
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default TeacherDemoVideo;