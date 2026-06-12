import React from "react";
import { UserPlus, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ReferralTypeCardProps {
  type: "student" | "teacher";
  bonus: string;
  variant: "gold" | "cyan";
}

const ReferralTypeCard: React.FC<ReferralTypeCardProps> = ({ type, bonus, variant }) => {
  const isGold = variant === "gold";

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "flex-1 p-6 rounded-[32px] border transition-all duration-500 flex flex-col items-center text-center gap-4",
        isGold 
          ? "border-yellow-500/30 bg-yellow-500/[0.02] shadow-[0_10px_30px_rgba(234,179,8,0.05)]" 
          : "border-cyan-500/30 bg-cyan-500/[0.02] shadow-[0_10px_30px_rgba(34,211,238,0.05)]"
      )}
    >
      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Referral Type</span>
      
      <div className={cn(
        "w-12 h-12 rounded-2xl flex items-center justify-center border",
        isGold ? "bg-yellow-500/10 border-yellow-500/20 text-yellow-500" : "bg-cyan-500/10 border-cyan-500/20 text-cyan-400"
      )}>
        {type === "student" ? <UserPlus size={24} /> : <GraduationCap size={24} />}
      </div>

      <div className="space-y-1">
        <h3 className="text-lg font-black text-white uppercase tracking-tight">Refer {type}</h3>
        <p className="text-[10px] font-medium text-zinc-400 leading-tight">
          Unlocks Rewards<br />
          {type === "student" ? "Student" : "Teacher"} Bonus: <span className={isGold ? "text-yellow-500" : "text-cyan-400"}>{bonus}</span>
        </p>
      </div>

      <Button 
        className={cn(
          "w-full h-11 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all",
          isGold 
            ? "bg-gradient-to-br from-yellow-400 to-yellow-600 text-black hover:brightness-110 shadow-[0_0_20px_rgba(234,179,8,0.2)]" 
            : "bg-gradient-to-br from-blue-600 to-blue-800 text-white hover:brightness-110 shadow-[0_0_20px_rgba(37,99,235,0.2)]"
        )}
      >
        Share Link
      </Button>
    </motion.div>
  );
};

export default ReferralTypeCard;