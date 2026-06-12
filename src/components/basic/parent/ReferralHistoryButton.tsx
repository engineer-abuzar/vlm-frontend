// --- src/components/reward/RewardComponents.tsx ---
import React from "react";
import { motion } from "framer-motion";
import  {  ArrowUpRight, Copy, Share2, LineChart, Calendar, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/**
 * The Purple Action Banner
 */
export const HistoryBanner = () => (
  <motion.div 
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    className="w-full mb-6"
  >
    <div className="bg-[#121214] border border-white/5 rounded-2xl p-4 flex items-center justify-between group cursor-pointer active:scale-[0.98] transition-all">
      <div className="flex items-center gap-3">
        <Calendar className="text-purple-500 h-5 w-5" />
        <span className="text-purple-500 font-bold text-sm tracking-wider uppercase">
          View Full Referral History
        </span>
      </div>
      <ChevronRight className="text-purple-500 h-5 w-5 group-hover:translate-x-1 transition-transform" />
    </div>
    <p className="text-center text-zinc-500 text-[10px] mt-2 font-medium">
      Detailed stats, rewards & status
    </p>
  </motion.div>
);

/**
 * Reusable Referral Type Card (Student/Teacher)
 */
interface ReferralCardProps {
  type: "Student" | "Teacher";
  bonus: string;
  icon: LucideIcon;
  theme: "gold" | "cyan";
  index: number;
}

export const ReferralCard: React.FC<ReferralCardProps> = ({ type, bonus, icon: Icon, theme, index }) => {
  const isGold = theme === "gold";
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "flex-1 p-6 rounded-[32px] border bg-black/40 backdrop-blur-md flex flex-col items-center text-center",
        isGold ? "border-yellow-500/20 shadow-[0_0_25px_rgba(234,179,8,0.05)]" : "border-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.05)]"
      )}
    >
      <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-4">Referral Type</span>
      <div className={cn(
        "h-14 w-14 rounded-2xl flex items-center justify-center mb-4 border",
        isGold ? "bg-yellow-500/10 border-yellow-500/40 text-yellow-500" : "bg-cyan-400/10 border-cyan-400/40 text-cyan-400"
      )}>
        <Icon size={28} />
      </div>
      <h3 className="text-white font-bold text-lg mb-1">Refer {type}</h3>
      <div className="mb-6">
        <p className="text-[10px] text-zinc-400">Unlocks Rewards</p>
        <p className={cn("text-[10px] font-bold", isGold ? "text-yellow-500/80" : "text-cyan-400/80")}>
          {type} Bonus: {bonus}
        </p>
      </div>
      <Button className={cn(
        "w-full rounded-full font-black text-[10px] tracking-widest h-11",
        isGold 
          ? "bg-gradient-to-b from-yellow-300 to-yellow-600 text-black" 
          : "bg-gradient-to-b from-blue-500 to-indigo-700 text-white"
      )}>
        SHARE LINK
      </Button>
    </motion.div>
  );
};

/**
 * Stats Item
 */
export const StatCard = ({ label, value, subValue, highlight }: { label: string; value: string; subValue?: string; highlight?: boolean }) => (
  <div className="flex-1 p-6 rounded-[28px] border border-white/5 bg-[#0d0d0f] flex flex-col justify-between h-36">
    <span className="text-[9px] text-zinc-500 font-black uppercase tracking-widest leading-tight">{label}</span>
    <div>
      <div className="flex items-baseline gap-1">
        <span className={cn("text-3xl font-bold tracking-tighter", highlight ? "text-yellow-500" : "text-white")}>{value}</span>
        {highlight ? (
           <span className="text-yellow-500/80 text-[10px] font-bold">Pts</span>
        ) : (
          <span className="text-cyan-400 flex items-center gap-0.5 text-[10px] font-bold">Referrals <ArrowUpRight size={12} /></span>
        )}
      </div>
      {subValue && <p className="text-[9px] text-zinc-600 mt-1 font-medium">{subValue}</p>}
    </div>
  </div>
);

/**
 * Active Referral Link Item
 */
export const ActiveLinkItem = ({ title, date, id, link }: { title: string; date: string; id: string; link: string }) => (
  <div className="p-5 bg-zinc-900/40 border border-white/5 rounded-[24px] mb-4">
    <div className="flex justify-between items-start mb-3">
      <h4 className="text-white font-bold text-sm pr-4">{title}</h4>
      <Badge className="bg-emerald-500/10 text-emerald-500 border-none px-3 py-0.5 text-[9px] font-bold uppercase">Active</Badge>
    </div>
    <p className="text-[10px] text-zinc-500 font-medium mb-4">{date} • {id}</p>
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-cyan-950/20 border border-cyan-500/10 rounded-xl px-4 py-2.5">
        <span className="text-cyan-400 text-[11px] font-medium truncate block">{link}</span>
      </div>
      <div className="flex gap-4 px-2 text-zinc-500">
        <Copy size={16} className="cursor-pointer hover:text-white transition-colors" />
        <Share2 size={16} className="cursor-pointer hover:text-white transition-colors" />
        <LineChart size={16} className="cursor-pointer hover:text-white transition-colors" />
      </div>
    </div>
  </div>
);