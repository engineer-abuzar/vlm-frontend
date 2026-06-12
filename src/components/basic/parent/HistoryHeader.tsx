// src/components/reward/HistoryHeader.tsx
import React from "react";
import { Calendar, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export const HistoryHeader: React.FC = () => {
  return (
    <motion.div 
      whileTap={{ scale: 0.98 }}
      className="w-full cursor-pointer space-y-3"
    >
      <div className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between px-5">
        <div className="flex items-center gap-4">
          <Calendar className="text-purple-500" size={24} />
          <span className="text-purple-500 font-black text-sm tracking-wider uppercase">
            View Full Referral History
          </span>
        </div>
        <ChevronRight className="text-purple-500" size={20} />
      </div>
      <p className="text-center text-zinc-500 text-xs font-medium">
        Detailed stats, rewards & status
      </p>
    </motion.div>
  );
};