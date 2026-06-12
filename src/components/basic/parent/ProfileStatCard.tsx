// src/components/profile/StatCard.tsx
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  subLabel?: string;
  borderColor: string;
  iconColor: string;
  index: number;
}

export const StatCard: React.FC<StatCardProps> = ({
  icon,
  value,
  label,
  subLabel,
  borderColor,
  iconColor,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    className={cn(
      "w-full p-4 rounded-3xl border bg-white/5 backdrop-blur-md flex flex-col gap-1",
      borderColor
    )}
  >
    <div className={cn("flex items-center gap-2", iconColor)}>
      {React.cloneElement(icon as React.ReactElement, { size: 18 })}
      <span className="text-2xl font-bold text-white">{value}</span>
    </div>
    <p className="text-lg font-medium text-zinc-300 leading-tight">{label}</p>
    {subLabel && <p className="text-zinc-500 text-sm font-medium">{subLabel}</p>}
  </motion.div>
);