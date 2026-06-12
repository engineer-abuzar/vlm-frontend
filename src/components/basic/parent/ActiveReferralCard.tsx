import React from "react";
import { Badge } from "@/components/ui/badge";
import { Copy, Share2, TrendingUp } from "lucide-react";

interface ActiveReferralCardProps {
  title: string;
  date: string;
  referralId: string;
  link: string;
  status: "active" | "expired";
}

export const ActiveReferralCard: React.FC<ActiveReferralCardProps> = ({
  title,
  date,
  referralId,
  link,
}) => {
  return (
    <div className="p-5 rounded-3xl border border-cyan-900/20 bg-cyan-950/5 backdrop-blur-sm mb-4">
      <div className="flex justify-between items-start mb-2">
        <h5 className="text-white font-bold text-sm leading-snug max-w-[70%]">{title}</h5>
        <Badge className="bg-emerald-500/10 text-emerald-500 border-none hover:bg-emerald-500/20 text-[10px] px-3">
          Active
        </Badge>
      </div>

      <div className="text-[11px] text-zinc-500 mb-4 font-medium">
        {date} • <span className="text-zinc-400">{referralId}</span>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-1 bg-cyan-950/30 border border-cyan-800/30 rounded-xl px-4 py-2 flex items-center overflow-hidden">
          <span className="text-cyan-400 text-xs font-medium truncate">{link}</span>
        </div>
        
        <div className="flex items-center gap-4 text-zinc-500 ml-1">
          <button className="flex items-center gap-1.5 text-[11px] font-bold hover:text-white transition-colors">
            <Copy size={14} /> Copy Link
          </button>
          <button className="flex items-center gap-1.5 text-[11px] font-bold hover:text-white transition-colors">
            <Share2 size={14} /> Share
          </button>
          <button className="flex items-center gap-1.5 text-[11px] font-bold hover:text-white transition-colors">
            <TrendingUp size={14} /> Track
          </button>
        </div>
      </div>
    </div>
  );
};