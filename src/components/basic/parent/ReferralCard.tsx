import React from "react";
import { Users, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ReferralCardProps {
  title: string;
  subtitle: string;
  rewardText: string;
  variant: "student" | "teacher";
  onShare: () => void;
}

export const ReferralCard: React.FC<ReferralCardProps> = ({
  title,
  subtitle,
  rewardText,
  variant,
  onShare,
}) => {
  const isStudent = variant === "student";

  return (
    <div
      className={cn(
        "relative flex flex-col items-center p-5 rounded-[28px] border bg-black/40 backdrop-blur-md transition-all duration-300",
        isStudent 
          ? "border-yellow-500/30 shadow-[0_0_20px_rgba(234,179,8,0.1)]" 
          : "border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.1)]"
      )}
    >
      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">
        Referral Type
      </span>

      <div className={cn(
        "p-3 rounded-2xl mb-4 border",
        isStudent ? "bg-yellow-500/10 border-yellow-500/20" : "bg-cyan-500/10 border-cyan-500/20"
      )}>
        {isStudent ? (
          <Users className="text-yellow-500 h-7 w-7" />
        ) : (
          <GraduationCap className="text-cyan-500 h-7 w-7" />
        )}
      </div>

      <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
      <p className="text-zinc-400 text-[11px] mb-1">{subtitle}</p>
      <p className={cn("text-[11px] font-bold mb-6", isStudent ? "text-yellow-500/80" : "text-cyan-500/80")}>
        {rewardText}
      </p>

      <Button
        onClick={onShare}
        className={cn(
          "w-full h-11 rounded-full font-bold text-xs tracking-wider transition-transform active:scale-95",
          isStudent 
            ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-300" 
            : "bg-gradient-to-r from-indigo-600 to-blue-700 text-white hover:from-indigo-500"
        )}
      >
        SHARE LINK
      </Button>
    </div>
  );
};