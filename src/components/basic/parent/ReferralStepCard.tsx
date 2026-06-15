import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ReferralStepCardProps {
  icon: React.ReactNode;
  stepNumber: string;
  title: string;
  description: string;
  linkText?: string;
  variant: "cyan" | "gold";
}

const ReferralStepCard: React.FC<ReferralStepCardProps> = ({
  icon,
  stepNumber,
  title,
  description,
  linkText,
  variant,
}) => {
  const themes = {
    cyan: "border-cyan-500/30 bg-cyan-500/[0.02] shadow-[0_0_20px_rgba(34,211,238,0.1)]",
    gold: "border-yellow-500/30 bg-yellow-500/[0.02] shadow-[0_0_20px_rgba(234,179,8,0.1)]",
  };

  const iconColors = {
    cyan: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20 shadow-[0_0_15px_rgba(34,211,238,0.3)]",
    gold: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20 shadow-[0_0_15px_rgba(234,179,8,0.3)]",
  };

  const textColors = {
    cyan: "text-cyan-400",
    gold: "text-yellow-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "flex items-start gap-5 p-6 rounded-[32px] border backdrop-blur-xl transition-all duration-300",
        themes[variant]
      )}
    >
      <div className={cn("shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center border", iconColors[variant])}>
        {React.cloneElement(icon as React.ReactElement, { size: 32, strokeWidth: 1.5 })}
      </div>

      <div className="flex-1 space-y-2">
        <h3 className="text-zinc-100 font-black text-lg tracking-tight">
          <span className="mr-1">{stepNumber}.</span> {title}
        </h3>
        <p className="text-zinc-400 text-[13px] font-medium leading-relaxed pr-2">
          {description}
        </p>
        {linkText && (
          <p className={cn("text-[13px] font-black uppercase tracking-widest pt-1", textColors[variant])}>
            {linkText}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default ReferralStepCard;
