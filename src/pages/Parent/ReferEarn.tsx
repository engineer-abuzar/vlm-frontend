import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  ChevronLeft, 
  Link2, 
  Star, 
  Copy, 
  Phone, 
  SendHorizontal, 
   
} from "lucide-react";
import { bgCss } from "@/helper/CssHelper";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";

import ReferralStepCard from "@/components/basic/parent/ReferralStepCard";

const ReferAndEarn: React.FC = () => {
  const navigate = useNavigate();
  const referralLink = "ref.earn.co/sarah_jones...";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className={cn("min-h-screen flex flex-col items-center p-4 pb-12 relative overflow-x-hidden", bgCss)}>
      {/* Decorative Assets */}
      <div className="absolute top-[15%] -left-4 text-cyan-400/20 blur-[1px] rotate-45">
        <Star size={16} fill="currentColor" />
      </div>
      <div className="absolute top-[40%] -right-3 text-purple-500/20 blur-[1px]">
        <Star size={24} fill="currentColor" />
      </div>
      <div className="absolute bottom-[30%] -left-3 text-cyan-500/20 blur-[1px]">
        <Star size={16} fill="currentColor" />
      </div>

      {/* Header Container (Constrained for Laptop) */}
      <header className="w-full max-w-xl flex items-center justify-between py-6 mb-4">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-white hover:opacity-70 transition-opacity">
          <ChevronLeft size={28} />
        </button>
        
        <h1 className="text-xl font-black text-white tracking-tight uppercase">
          Refer & Earn
        </h1>

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-none">Welcome,</p>
            <p className="text-sm font-black text-white">Sarah</p>
          </div>
          <Avatar className="w-10 h-10 border-2 border-white/10 shadow-xl">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="w-full max-w-xl mx-auto space-y-6">
        
        {/* Step Cards */}
        <ReferralStepCard 
          variant="cyan"
          stepNumber="1"
          title="Refer Students"
          description="Invite your friends, family, and classmates to join. Your unique link tracks their sign-up."
          linkText="Grow your network."
          icon={<Link2 />}
        />

        <ReferralStepCard 
          variant="gold"
          stepNumber="2"
          title="Earn Points"
          description="Get reward points for every successful sign-up via your link!"
          linkText="Accumulate points to unlock exciting rewards!"
          icon={<Star fill="currentColor" />}
        />

        {/* Link Input Section */}
        <div className="pt-6 space-y-8">
          <div className="flex items-center justify-between h-16 px-6 rounded-[22px] bg-zinc-950/60 border border-white/5 shadow-inner backdrop-blur-md">
            <span className="text-sm font-medium text-zinc-400 tracking-tight">
              {referralLink}
            </span>
            <button onClick={handleCopy} className="text-zinc-500 hover:text-white transition-colors">
              <Copy size={20} />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Button 
                onClick={handleCopy}
                className={cn(
                  "w-full h-16 rounded-[2.5rem] text-lg font-black uppercase tracking-widest transition-all",
                  "bg-gradient-to-r from-[#2b4b9b] via-[#1a2e5d] to-[#2b4b9b] bg-[length:200%_auto] hover:bg-right",
                  "border border-cyan-400/20 shadow-[0_10px_30px_rgba(30,58,138,0.4)] text-white"
                )}
              >
                Copy Link
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Button 
                className={cn(
                  "w-full h-16 rounded-[2.5rem] text-lg font-black uppercase tracking-widest transition-all",
                  "bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] hover:brightness-110",
                  "border border-purple-400/20 shadow-[0_10px_30px_rgba(124,58,237,0.3)] text-white"
                )}
              >
                Share
              </Button>
            </motion.div>
          </div>

          {/* Social Icons Footer */}
          <div className="flex justify-center items-center gap-8 pt-4">
            <SocialIcon icon={<Phone fill="currentColor" />} color="text-green-500 border-green-500/20 bg-green-500/5" />
            <SocialIcon icon={<SendHorizontal fill="currentColor" />} color="text-sky-400 border-sky-400/20 bg-sky-400/5" />
            <SocialIcon  color="text-blue-400 border-blue-400/20 bg-blue-400/5" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Internal Helper for Social Icons
const SocialIcon = ({ icon, color }: { icon?: React.ReactNode, color: string }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className={cn(
      "w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all shadow-lg",
      color
    )}
  >
    {React.cloneElement(icon as React.ReactElement, { size: 24 })}
  </motion.button>
);

export default ReferAndEarn;