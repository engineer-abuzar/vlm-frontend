import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProfileStatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  subLabel?: string;
  variant?: "yellow" | "cyan" | "zinc";
}

const ProfileStat_Card: React.FC<ProfileStatCardProps> = ({
  icon,
  value,
  label,
  subLabel,
  variant = "zinc",
}) => {
  const variantStyles = {
    yellow: "border-yellow-500/30 bg-yellow-500/[0.02] text-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.05)]",
    cyan: "border-cyan-500/30 bg-cyan-500/[0.02] text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.05)]",
    zinc: "border-white/10 bg-white/[0.02] text-zinc-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      className={cn(
        "p-5 rounded-[22px] border backdrop-blur-md flex flex-col gap-1 transition-all duration-300",
        variantStyles[variant]
      )}
    >
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <span className="text-2xl font-black tracking-tighter text-white">{value}</span>
      </div>
      <div className="space-y-0.5">
        <h4 className="text-[17px] font-bold text-zinc-100 tracking-tight">{label}</h4>
        {subLabel && (
          <p className="text-[14px] font-medium text-zinc-500">{subLabel}</p>
        )}
      </div>
    </motion.div>
  );
};

export default ProfileStat_Card;