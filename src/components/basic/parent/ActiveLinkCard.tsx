import React from "react";
import { Badge } from "@/components/ui/badge";

interface ActiveLinkCardProps {
  title: string;
  date: string;
  id: string;
  link: string;
}

const ActiveLinkCard: React.FC<ActiveLinkCardProps> = ({ title, date, id, link }) => {
  return (
    <div className="p-5 rounded-[28px] border border-white/5 bg-white/[0.02] backdrop-blur-md space-y-4">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h4 className="text-[15px] font-bold text-zinc-100 tracking-tight">{title}</h4>
          <p className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest">
            {date} • {id}
          </p>
        </div>
        <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-[9px] font-black uppercase rounded-lg px-2">
          Active
        </Badge>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 h-10 px-4 rounded-xl bg-cyan-400/5 border border-cyan-400/10 flex items-center">
          <span className="text-[13px] font-medium text-cyan-400/80 truncate">{link}</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-[10px] font-bold text-zinc-500 hover:text-white uppercase transition-colors">Copy Link</button>
          <button className="text-[10px] font-bold text-zinc-500 hover:text-white uppercase transition-colors">Share</button>
          <button className="text-[10px] font-bold text-zinc-500 hover:text-white uppercase transition-colors">Track</button>
        </div>
      </div>
    </div>
  );
};

export default ActiveLinkCard;