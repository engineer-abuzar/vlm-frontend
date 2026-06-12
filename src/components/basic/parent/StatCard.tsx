// src/components/reward/StatCard.tsx
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  subValue?: string;
  type: "referrals" | "points";
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, subValue, type }) => {
  return (
    <div className={cn(
      "p-6 rounded-[28px] border bg-zinc-950/50 flex flex-col justify-between h-36",
      type === "referrals" ? "border-cyan-900/30" : "border-zinc-800"
    )}>
      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-tight">
        {label}
      </p>
      <div>
        <div className="flex items-baseline gap-1">
          <span className={cn("text-2xl font-bold", type === 'points' ? "text-yellow-500" : "text-white")}>
            {value}
          </span>
          {type === "referrals" && (
            <span className="text-cyan-400 flex items-center gap-0.5 text-sm font-semibold">
              Referrals <ArrowUpRight size={14} />
            </span>
          )}
          {type === "points" && <span className="text-yellow-500/80 text-sm font-semibold">Pts</span>}
        </div>
        {subValue && <p className="text-[10px] text-zinc-500 mt-1 font-medium">{subValue}</p>}
      </div>
    </div>
  );
};