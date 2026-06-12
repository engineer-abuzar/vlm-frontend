import React from "react";
import { motion } from "framer-motion";
import { Heart, MessageSquare, Eye, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export type DoubtStatus = "SOLVED" | "PENDING" | "IN REVIEW";

interface DoubtCardProps {
  subject: string;
  title: string;
  description: string;
  status: DoubtStatus;
  likes: number;
  comments: number;
  time: string;
  views: number;
  iconLetter: string;
}

const statusStyles: Record<DoubtStatus, string> = {
  SOLVED: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  PENDING: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  "IN REVIEW": "bg-blue-500/10 text-blue-400 border-blue-500/30",
};

const Doubt_Card: React.FC<DoubtCardProps> = ({ 
  subject, title, description, status, likes, comments, time, views, iconLetter 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-zinc-900/40 border border-white/10 rounded-3xl p-5 backdrop-blur-sm hover:bg-zinc-800/50 transition-colors"
    >
      <div className="flex gap-4">
        {/* Subject Avatar */}
        <div className="flex flex-col items-center gap-2">
          <div className="h-14 w-14 rounded-full border border-white/10 bg-zinc-800/80 flex items-center justify-center text-xl font-black text-white">
            {iconLetter}
          </div>
          <span className="text-[9px] font-black uppercase text-zinc-500 tracking-widest">{subject}</span>
        </div>

        <div className="flex-1 space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="text-sm font-bold text-zinc-100 leading-tight pr-2">
              {subject} doubt: {title}
            </h3>
            <Badge className={cn("text-[9px] font-black px-2 py-0.5 rounded-full border", statusStyles[status])}>
              {status}
            </Badge>
          </div>
          
          <p className="text-xs text-zinc-400 line-clamp-1">
            {description}
          </p>

          {/* Stats Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-white/5">
            <div className="flex items-center gap-4 text-zinc-500">
              <span className="flex items-center gap-1 text-[11px] font-medium"><Heart size={13} /> {likes}</span>
              <span className="flex items-center gap-1 text-[11px] font-medium"><MessageSquare size={13} /> {comments}</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-500 text-[10px] font-medium">
              <span className="flex items-center gap-1"><Clock size={12} /> {time}</span>
              <span className="flex items-center gap-1"><Eye size={12} /> {views}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Doubt_Card;