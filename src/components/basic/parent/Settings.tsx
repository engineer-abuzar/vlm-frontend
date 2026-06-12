import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SettingsCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  label?: string;
  variant?: "default" | "cyan" | "yellow" | "green" | "red";
  onClick?: () => void;
  isProfile?: boolean;
  avatarUrl?: string;
}

const SettingsCard: React.FC<SettingsCardProps> = ({
  icon,
  title,
  subtitle,
  label,
  variant = "default",
  onClick,
  isProfile,
  avatarUrl,
}) => {
  const variants = {
    default: "bg-white/5 border-white/10 text-white",
    cyan: "bg-cyan-500/5 border-cyan-500/30 text-cyan-400",
    yellow: "bg-yellow-500/5 border-yellow-500/30 text-yellow-400",
    green: "bg-green-500/5 border-green-500/30 text-green-400",
    red: "bg-red-500/5 border-red-500/30 text-red-500",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "relative flex items-center gap-4 p-5 rounded-[28px] border cursor-pointer backdrop-blur-md transition-all duration-300",
        variants[variant]
      )}
    >
      {/* Icon or Avatar Section */}
      <div className="shrink-0">
        {isProfile ? (
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 bg-zinc-800">
            <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className={cn(
            "w-12 h-12 rounded-2xl flex items-center justify-center border transition-all",
            variants[variant]
          )}>
            {icon}
          </div>
        )}
      </div>

      {/* Text Section */}
      <div className="flex-1 overflow-hidden">
        {label && (
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
            {label}
          </span>
        )}
        <h3 className={cn(
          "text-lg font-bold leading-tight truncate",
          variant === "default" || isProfile ? "text-white" : ""
        )}>
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs font-medium text-zinc-400 mt-0.5 truncate">
            {subtitle}
          </p>
        )}
      </div>

      {/* Action Section */}
      {!isProfile && <ChevronRight size={20} className="text-white/40" />}
      {isProfile && <ChevronRight size={20} className="text-white/40" />}
    </motion.div>
  );
};

export default SettingsCard;