import React from "react";
import { bgCss } from "@/helper/CssHelper";
import { cn } from "@/lib/utils";
import TeacherRequestCard from "@/components/basic/teacher/TeacherRequestCard";
import { toast } from "sonner";

const DirectRequestNotification: React.FC = () => {
  const handleAccept = () => {
    toast.success("Request accepted! Connecting to session...");
  };

  const handleDecline = () => {
    toast.error("Request declined");
  };

  return (
    <div className={cn("min-h-screen flex items-center justify-center p-6", bgCss)}>
      {/* Background Decorators */}
      <div className="absolute top-1/4 -right-10 w-40 h-40 bg-purple-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-10 w-40 h-40 bg-cyan-500/10 blur-[100px] pointer-events-none" />
      
      <div className="w-full max-w-xl">
        <TeacherRequestCard 
          onAccept={handleAccept} 
          onDecline={handleDecline} 
        />
      </div>
    </div>
  );
};

export default DirectRequestNotification;