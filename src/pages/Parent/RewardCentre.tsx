import React from "react";
import { 
  TrendingUp, 
  Home, 
  LayoutGrid, 
  Wallet, 
  Library, 
  UserCircle,
  ChevronRight,
  Calendar
} from "lucide-react";
import { bgCss } from "@/helper/CssHelper";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import ReferralTypeCard from "@/components/basic/parent/ReferralTypeCard";
import ActiveLinkCard from "@/components/basic/parent/ActiveLinkCard";

const RewardCenter: React.FC = () => {

  return (
    <div className={cn("min-h-screen flex flex-col items-center p-4 pb-28 relative overflow-x-hidden", bgCss)}>
      
      {/* Header */}
      <header className="w-full max-w-xl mx-auto flex items-center justify-between py-6 mb-2">
        <div className="space-y-0.5">
          <h1 className="text-xl font-black text-white tracking-tight uppercase">VLM Academy</h1>
          <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest">Refer & Earn Dashboard</p>
        </div>
        <div className="flex items-center gap-4">
           <h2 className="text-lg font-black text-white">Reward Center</h2>
           <Avatar className="w-11 h-11 border-2 border-white/10 ring-4 ring-white/5">
             <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Teacher" />
             <AvatarFallback>TH</AvatarFallback>
           </Avatar>
        </div>
      </header>

      <div className="w-full max-w-xl mx-auto space-y-6">
        
        {/* Referral Type Section */}
        <div className="flex gap-4">
          <ReferralTypeCard type="student" bonus="500 Pts" variant="gold" />
          <ReferralTypeCard type="teacher" bonus="1000 Pts" variant="cyan" />
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 rounded-[32px] border border-white/5 bg-white/[0.01] flex flex-col justify-between h-32">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Total Referrals</span>
            <div className="flex items-center gap-2">
               <span className="text-3xl font-black text-white">15</span>
               <div className="flex items-center gap-1 text-emerald-500">
                  <span className="text-[13px] font-bold">Referrals</span>
                  <TrendingUp size={16} />
               </div>
            </div>
          </div>
          
          <div className="p-6 rounded-[32px] border border-white/5 bg-white/[0.01] flex flex-col justify-between h-32 relative overflow-hidden">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Total Referral Points Earned</span>
            <div className="space-y-0.5">
               <h3 className="text-2xl font-black text-yellow-500 tracking-tight">175,000 <span className="text-xs uppercase ml-1">Pts</span></h3>
               <p className="text-[10px] font-bold text-zinc-500">INR Equivalent: ₹ 1,75,000</p>
            </div>
            <div className="absolute bottom-2 right-2 text-2xl opacity-40 grayscale group-hover:grayscale-0 transition-all">💰</div>
          </div>
        </div>

        {/* Active Links Section */}
        <section className="space-y-4 pt-2">
           <h3 className="text-lg font-black text-white tracking-tight ml-2">Active Referral Links</h3>
           <div className="space-y-4">
              <ActiveLinkCard 
                title="Mathematics Course for Grade 8"
                date="Oct 22, 2024"
                id="VLM-SR-54321"
                link="vlm.academy/ref/54321"
              />
              <ActiveLinkCard 
                title="Primary Teacher Training Program"
                date="Oct 21, 2024"
                id="VLM-TR-12345"
                link="vlm.academy/ref/12345"
              />
              <ActiveLinkCard 
                title="Science for K-12 Series"
                date="Oct 20, 2024"
                id="VLM-SR-98765"
                link="vlm.academy/ref/98765"
              />
           </div>
        </section>

        {/* Full History Footer Action */}
        <div className="pt-4 space-y-4">
          <Button 
            variant="ghost"
            className="w-full h-16 rounded-[24px] bg-white/[0.03] border border-white/5 flex items-center justify-between px-6 group"
          >
            <div className="flex items-center gap-4">
               <div className="p-2 rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-400">
                  <Calendar size={20} />
               </div>
               <span className="text-sm font-black text-purple-400 uppercase tracking-widest">View Full Referral History</span>
            </div>
            <ChevronRight size={20} className="text-purple-500 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-[10px] font-bold text-zinc-600 text-center uppercase tracking-widest">
            Detailed stats, rewards & status
          </p>
        </div>
      </div>

      {/* Persistent Navigation */}
      <nav className="fixed bottom-0 left-0 w-full bg-[#0a0a0a]/95 border-t border-white/5 backdrop-blur-xl px-8 py-4 flex items-center justify-between z-50">
        <NavItem icon={<Home />} label="Home" />
        <NavItem icon={<LayoutGrid />} label="Classes" />
        <NavItem icon={<Wallet />} label="Wallet" />
        <NavItem icon={<Library />} label="Library" />
        <NavItem icon={<UserCircle />} label="Profile" active />
      </nav>
    </div>
  );
};

// Navigation Item Helper
const NavItem = ({ icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <button className={cn(
    "flex flex-col items-center gap-1.5 transition-all duration-300",
    active ? "text-cyan-400" : "text-zinc-600 hover:text-zinc-400"
  )}>
    <div className={cn("relative transition-transform duration-300", active && "scale-110 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]")}>
      {React.cloneElement(icon, { size: 24, strokeWidth: active ? 2.5 : 1.5 })}
    </div>
    <span className="text-[10px] font-bold uppercase tracking-tight leading-none">{label}</span>
  </button>
);

export default RewardCenter;